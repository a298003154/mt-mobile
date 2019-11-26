import {
  calcRotation,
  getEventName, now,
  calcMultiFingerStatus, calcMoveStatus,
  shouldTriggerSwipe, shouldTriggerDirection,
  getMovingDirection, getDirectionEventName
} from './util';

import {
  PRESS, DIRECTION_ALL, DIRECTION_VERTICAL, DIRECTION_HORIZONTAL
} from './config';

const directionMap = {
  all: DIRECTION_ALL,
  vertical: DIRECTION_VERTICAL,
  horizontal: DIRECTION_HORIZONTAL
};

export default {
  name: 'gesture',

  props: {
    direction: {
      type: String,
      default: 'all'
    },
    enableRotate: {
      type: Boolean,
      default: false
    },
    enablePinch: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      gesture: null,
      pressTimer: null,
      event: null,
      directionSetting: null
    };
  },

  created() {
    this.directionSetting = directionMap[this.direction];
  },

  methods: {
    triggerEvent(name, ...args) {
      this.$emit(name, this.getGestureState(), ...args);
    },

    triggerCombineEvent(mainEventName, eventStatus, ...args) {
      this.triggerEvent(mainEventName, ...args);
      this.triggerSubEvent(mainEventName, eventStatus, ...args);
    },

    triggerSubEvent(mainEventName, eventStatus, ...args) {
      if (eventStatus) {
        const subEventName = getEventName(mainEventName, eventStatus);
        this.triggerEvent(subEventName, ...args);
      }
    },
    triggerPinchEvent(mainEventName, eventStatus, ...args) {
      const { scale } = this.gesture;
      if (eventStatus === 'move' && typeof scale === 'number') {
        if (scale > 1) {
          this.triggerEvent('pinchOut');
        }
        if (scale < 1) {
          this.triggerEvent('pinchIn');
        }
      }
      this.triggerCombineEvent(mainEventName, eventStatus, ...args);
    },
    initPressTimer() {
      this.cleanPressTimer();
      this.pressTimer = setTimeout(() => {
        this.setGestureState({
          press: true,
        });
        this.triggerEvent('press');
      }, PRESS.time);
    },

    cleanPressTimer() {
      /* tslint:disable:no-unused-expression */
      this.pressTimer && clearTimeout(this.pressTimer);
      this.pressTimer = null;
    },

    setGestureState(params) {
      if (!this.gesture) {
        this.gesture = {};
      }

      // cache the previous touches
      if (this.gesture.touches) {
        this.gesture.preTouches = this.gesture.touches;
      }
      this.gesture = {
        ...this.gesture,
        ...params,
      };
    },

    getGestureState() {
      if (!this.gesture) {
        return this.gesture;
      }
      // shallow copy
      return {
        ...this.gesture,
      };
    },

    cleanGestureState() {
      this.gesture = null;
    },

    getTouches(e) {
      return [...e.touches].map(item => ({
        x: item.screenX,
        y: item.screenY,
      }));
    },

    triggerUserCb(status, e) {
      const cbName = getEventName('touch', status);
      this.$emit(cbName, e);
    },

    _handleTouchStart(e) {
      this.triggerUserCb('start', e);
      this.event = e;
      if (e.touches.length > 1) {
        e.preventDefault();
      }
      this.initGestureStatus(e);
      this.initPressTimer();
      this.checkIfMultiTouchStart();
    },

    initGestureStatus(e) {
      this.cleanGestureState();
      // store the gesture start state
      const startTouches = this.getTouches(e);
      const startTime = now();
      const startMultiFingerStatus = calcMultiFingerStatus(startTouches);
      this.setGestureState({
        startTime,
        startTouches,
        startMultiFingerStatus,
        /* copy for next time touch move cala convenient */
        time: startTime,
        touches: startTouches,
        multiFingerStatus: startMultiFingerStatus,
        srcEvent: this.event,
      });
    },

    checkIfMultiTouchStart() {
      const { enablePinch, enableRotate } = this;
      const { touches } = this.gesture;
      if (touches.length > 1 && (enablePinch || enableRotate)) {
        if (enablePinch) {
          const startMultiFingerStatus = calcMultiFingerStatus(touches);
          this.setGestureState({
            startMultiFingerStatus,

            /* init pinch status */
            pinch: true,
            scale: 1,
          });
          this.triggerCombineEvent('pinch', 'start');
        }
        if (enableRotate) {
          this.setGestureState({
            /* init rotate status */
            rotate: true,
            rotation: 0,
          });
          this.triggerCombineEvent('rotate', 'start');
        }
      }
    },

    _handleTouchMove(e) {
      this.triggerUserCb('move', e);
      this.event = e;
      if (!this.gesture) {
        // sometimes weird happen:
        // touchstart -> touchmove..touchmove.. --> touchend --> touchmove --> touchend
        // so we need to skip the unnormal event cycle after touchend
        return;
      }

      // not a long press
      this.cleanPressTimer();

      this.updateGestureStatus(e);
      this.checkIfSingleTouchMove();
      this.checkIfMultiTouchMove();
    },

    checkIfMultiTouchMove() {
      const {
        pinch, rotate, touches, startMultiFingerStatus, multiFingerStatus
      } = this.gesture;
      if (!pinch && !rotate) {
        return;
      }
      if (touches.length < 2) {
        this.setGestureState({
          pinch: false,
          rotate: false,
        });

        pinch && this.triggerCombineEvent('pinch', 'cancel');
        rotate && this.triggerCombineEvent('rotate', 'cancel');
        return;
      }

      if (pinch) {
        const scale = multiFingerStatus.z / startMultiFingerStatus.z;
        this.setGestureState({
          scale,
        });
        this.triggerPinchEvent('pinch', 'move');
      }
      if (rotate) {
        const rotation = calcRotation(startMultiFingerStatus, multiFingerStatus);
        this.setGestureState({
          rotation,
        });
        this.triggerCombineEvent('rotate', 'move');
      }
    },

    allowGesture() {
      return shouldTriggerDirection(this.gesture.direction, this.directionSetting);
    },

    checkIfSingleTouchMove() {
      const {
        pan, touches, moveStatus, preTouches, availablePan = true
      } = this.gesture;
      if (touches.length > 1) {
        this.setGestureState({
          pan: false,
        });

        pan && this.triggerCombineEvent('pan', 'cancel');
        return;
      }

      /** add avilablePan condition to fix the case in scrolling,
        which will cause unavailable pan move. */
      if (moveStatus && availablePan) {
        const direction = getMovingDirection(preTouches[0], touches[0]);
        this.setGestureState({ direction });

        const eventName = getDirectionEventName(direction);
        if (!this.allowGesture()) {
          /** if the first move is unavailable,
           * then judge all of remaining touch movings are also invalid.
           */
          if (!pan) {
            this.setGestureState({ availablePan: false });
          }
          return;
        }
        if (!pan) {
          this.triggerCombineEvent('pan', 'start');
          this.setGestureState({
            pan: true,
            availablePan: true,
          });
        } else {
          this.triggerCombineEvent('pan', eventName);
          this.triggerSubEvent('pan', 'move');
        }
      }
    },

    checkIfMultiTouchEnd(status) {
      const { pinch, rotate } = this.gesture;
      if (pinch) {
        this.triggerCombineEvent('pinch', status);
      }
      if (rotate) {
        this.triggerCombineEvent('rotate', status);
      }
    },

    updateGestureStatus(e) {
      const time = now();
      this.setGestureState({
        time,
      });
      if (!e.touches || !e.touches.length) {
        return;
      }
      const {
        startTime, startTouches, pinch, rotate
      } = this.gesture;
      const touches = this.getTouches(e);
      const moveStatus = calcMoveStatus(startTouches, touches, time - startTime);
      let multiFingerStatus;
      if (pinch || rotate) {
        multiFingerStatus = calcMultiFingerStatus(touches);
      }

      this.setGestureState({
        /* update status snapshot */
        touches,
        multiFingerStatus,
        /* update duration status */
        moveStatus,

      });
    },

    _handleTouchEnd(e) {
      this.triggerUserCb('end', e);
      this.event = e;
      if (!this.gesture) {
        return;
      }
      this.cleanPressTimer();
      this.updateGestureStatus(e);
      this.doSingleTouchEnd('end');
      this.checkIfMultiTouchEnd('end');
    },

    _handleTouchCancel(e) {
      this.triggerUserCb('cancel', e);
      this.event = e;
      if (!this.gesture) {
        return;
      }
      this.cleanPressTimer();
      this.updateGestureStatus(e);
      this.doSingleTouchEnd('cancel');
      this.checkIfMultiTouchEnd('cancel');
    },

    triggerAllowEvent(type, status) {
      if (this.allowGesture()) {
        this.triggerCombineEvent(type, status);
      } else {
        this.triggerSubEvent(type, status);
      }
    },

    doSingleTouchEnd(status) {
      const {
        moveStatus, pinch, rotate, press, pan, direction
      } = this.gesture;

      if (pinch || rotate) {
        return;
      }
      if (moveStatus) {
        const { z, velocity } = moveStatus;
        const swipe = shouldTriggerSwipe(z, velocity);
        this.setGestureState({
          swipe,
        });
        if (pan) {
          // pan need end, it's a process
          // sometimes, start with pan left, but end with pan right....
          this.triggerAllowEvent('pan', status);
        }
        if (swipe) {
          const directionEvName = getDirectionEventName(direction);
          // swipe just need a direction, it's a endpoint
          this.triggerAllowEvent('swipe', directionEvName);
          return;
        }
      }

      if (press) {
        this.triggerEvent('pressUp');
        return;
      }
      this.triggerEvent('tap');
    },

    getTouchAction() {
      const { enablePinch, enableRotate } = this;
      const { directionSetting } = this;
      if (enablePinch || enableRotate || directionSetting === DIRECTION_ALL) {
        return 'pan-x pan-y';
      }
      if (directionSetting === DIRECTION_VERTICAL) {
        return 'pan-x';
      }
      if (directionSetting === DIRECTION_HORIZONTAL) {
        return 'pan-y';
      }
      return 'auto';
    }
  },

  render() {
    if (!this.$slots.default || this.$slots.default.length !== 1) {
      throw new Error('slots number is not one.');
    }
    const touchAction = this.getTouchAction();

    const on = {
      touchstart: this._handleTouchStart,
      touchmove: this._handleTouchMove,
      touchcancel: this._handleTouchCancel,
      touchend: this._handleTouchEnd
    };

    Object.assign(
      this.$slots.default[0].data,
      {
        on,
        style: {
          ...this.$slots.default[0].data.style,
          touchAction
        }
      }
    );

    return this.$slots.default[0];
  }
};
