import _extends from "@babel/runtime/helpers/esm/extends";
import { calcRotation, getEventName, now, calcMultiFingerStatus, calcMoveStatus, shouldTriggerSwipe, shouldTriggerDirection, getMovingDirection, getDirectionEventName } from './util';
import { PRESS, DIRECTION_ALL, DIRECTION_VERTICAL, DIRECTION_HORIZONTAL } from './config';
var directionMap = {
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
  data: function data() {
    return {
      gesture: null,
      pressTimer: null,
      event: null,
      directionSetting: null
    };
  },
  created: function created() {
    this.directionSetting = directionMap[this.direction];
  },
  methods: {
    triggerEvent: function triggerEvent(name) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      this.$emit.apply(this, [name, this.getGestureState()].concat(args));
    },
    triggerCombineEvent: function triggerCombineEvent(mainEventName, eventStatus) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      this.triggerEvent.apply(this, [mainEventName].concat(args));
      this.triggerSubEvent.apply(this, [mainEventName, eventStatus].concat(args));
    },
    triggerSubEvent: function triggerSubEvent(mainEventName, eventStatus) {
      if (eventStatus) {
        var subEventName = getEventName(mainEventName, eventStatus);

        for (var _len3 = arguments.length, args = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
          args[_key3 - 2] = arguments[_key3];
        }

        this.triggerEvent.apply(this, [subEventName].concat(args));
      }
    },
    triggerPinchEvent: function triggerPinchEvent(mainEventName, eventStatus) {
      var scale = this.gesture.scale;

      if (eventStatus === 'move' && typeof scale === 'number') {
        if (scale > 1) {
          this.triggerEvent('pinchOut');
        }

        if (scale < 1) {
          this.triggerEvent('pinchIn');
        }
      }

      for (var _len4 = arguments.length, args = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
        args[_key4 - 2] = arguments[_key4];
      }

      this.triggerCombineEvent.apply(this, [mainEventName, eventStatus].concat(args));
    },
    initPressTimer: function initPressTimer() {
      var _this = this;

      this.cleanPressTimer();
      this.pressTimer = setTimeout(function () {
        _this.setGestureState({
          press: true
        });

        _this.triggerEvent('press');
      }, PRESS.time);
    },
    cleanPressTimer: function cleanPressTimer() {
      /* tslint:disable:no-unused-expression */
      this.pressTimer && clearTimeout(this.pressTimer);
      this.pressTimer = null;
    },
    setGestureState: function setGestureState(params) {
      if (!this.gesture) {
        this.gesture = {};
      } // cache the previous touches


      if (this.gesture.touches) {
        this.gesture.preTouches = this.gesture.touches;
      }

      this.gesture = _extends({}, this.gesture, {}, params);
    },
    getGestureState: function getGestureState() {
      if (!this.gesture) {
        return this.gesture;
      } // shallow copy


      return _extends({}, this.gesture);
    },
    cleanGestureState: function cleanGestureState() {
      this.gesture = null;
    },
    getTouches: function getTouches(e) {
      return [].concat(e.touches).map(function (item) {
        return {
          x: item.screenX,
          y: item.screenY
        };
      });
    },
    triggerUserCb: function triggerUserCb(status, e) {
      var cbName = getEventName('touch', status);
      this.$emit(cbName, e);
    },
    _handleTouchStart: function _handleTouchStart(e) {
      this.triggerUserCb('start', e);
      this.event = e;

      if (e.touches.length > 1) {
        e.preventDefault();
      }

      this.initGestureStatus(e);
      this.initPressTimer();
      this.checkIfMultiTouchStart();
    },
    initGestureStatus: function initGestureStatus(e) {
      this.cleanGestureState(); // store the gesture start state

      var startTouches = this.getTouches(e);
      var startTime = now();
      var startMultiFingerStatus = calcMultiFingerStatus(startTouches);
      this.setGestureState({
        startTime: startTime,
        startTouches: startTouches,
        startMultiFingerStatus: startMultiFingerStatus,

        /* copy for next time touch move cala convenient */
        time: startTime,
        touches: startTouches,
        multiFingerStatus: startMultiFingerStatus,
        srcEvent: this.event
      });
    },
    checkIfMultiTouchStart: function checkIfMultiTouchStart() {
      var enablePinch = this.enablePinch,
          enableRotate = this.enableRotate;
      var touches = this.gesture.touches;

      if (touches.length > 1 && (enablePinch || enableRotate)) {
        if (enablePinch) {
          var startMultiFingerStatus = calcMultiFingerStatus(touches);
          this.setGestureState({
            startMultiFingerStatus: startMultiFingerStatus,

            /* init pinch status */
            pinch: true,
            scale: 1
          });
          this.triggerCombineEvent('pinch', 'start');
        }

        if (enableRotate) {
          this.setGestureState({
            /* init rotate status */
            rotate: true,
            rotation: 0
          });
          this.triggerCombineEvent('rotate', 'start');
        }
      }
    },
    _handleTouchMove: function _handleTouchMove(e) {
      this.triggerUserCb('move', e);
      this.event = e;

      if (!this.gesture) {
        // sometimes weird happen:
        // touchstart -> touchmove..touchmove.. --> touchend --> touchmove --> touchend
        // so we need to skip the unnormal event cycle after touchend
        return;
      } // not a long press


      this.cleanPressTimer();
      this.updateGestureStatus(e);
      this.checkIfSingleTouchMove();
      this.checkIfMultiTouchMove();
    },
    checkIfMultiTouchMove: function checkIfMultiTouchMove() {
      var _this$gesture = this.gesture,
          pinch = _this$gesture.pinch,
          rotate = _this$gesture.rotate,
          touches = _this$gesture.touches,
          startMultiFingerStatus = _this$gesture.startMultiFingerStatus,
          multiFingerStatus = _this$gesture.multiFingerStatus;

      if (!pinch && !rotate) {
        return;
      }

      if (touches.length < 2) {
        this.setGestureState({
          pinch: false,
          rotate: false
        });
        pinch && this.triggerCombineEvent('pinch', 'cancel');
        rotate && this.triggerCombineEvent('rotate', 'cancel');
        return;
      }

      if (pinch) {
        var scale = multiFingerStatus.z / startMultiFingerStatus.z;
        this.setGestureState({
          scale: scale
        });
        this.triggerPinchEvent('pinch', 'move');
      }

      if (rotate) {
        var rotation = calcRotation(startMultiFingerStatus, multiFingerStatus);
        this.setGestureState({
          rotation: rotation
        });
        this.triggerCombineEvent('rotate', 'move');
      }
    },
    allowGesture: function allowGesture() {
      return shouldTriggerDirection(this.gesture.direction, this.directionSetting);
    },
    checkIfSingleTouchMove: function checkIfSingleTouchMove() {
      var _this$gesture2 = this.gesture,
          pan = _this$gesture2.pan,
          touches = _this$gesture2.touches,
          moveStatus = _this$gesture2.moveStatus,
          preTouches = _this$gesture2.preTouches,
          _this$gesture2$availa = _this$gesture2.availablePan,
          availablePan = _this$gesture2$availa === void 0 ? true : _this$gesture2$availa;

      if (touches.length > 1) {
        this.setGestureState({
          pan: false
        });
        pan && this.triggerCombineEvent('pan', 'cancel');
        return;
      }
      /** add avilablePan condition to fix the case in scrolling,
        which will cause unavailable pan move. */


      if (moveStatus && availablePan) {
        var direction = getMovingDirection(preTouches[0], touches[0]);
        this.setGestureState({
          direction: direction
        });
        var eventName = getDirectionEventName(direction);

        if (!this.allowGesture()) {
          /** if the first move is unavailable,
           * then judge all of remaining touch movings are also invalid.
           */
          if (!pan) {
            this.setGestureState({
              availablePan: false
            });
          }

          return;
        }

        if (!pan) {
          this.triggerCombineEvent('pan', 'start');
          this.setGestureState({
            pan: true,
            availablePan: true
          });
        } else {
          this.triggerCombineEvent('pan', eventName);
          this.triggerSubEvent('pan', 'move');
        }
      }
    },
    checkIfMultiTouchEnd: function checkIfMultiTouchEnd(status) {
      var _this$gesture3 = this.gesture,
          pinch = _this$gesture3.pinch,
          rotate = _this$gesture3.rotate;

      if (pinch) {
        this.triggerCombineEvent('pinch', status);
      }

      if (rotate) {
        this.triggerCombineEvent('rotate', status);
      }
    },
    updateGestureStatus: function updateGestureStatus(e) {
      var time = now();
      this.setGestureState({
        time: time
      });

      if (!e.touches || !e.touches.length) {
        return;
      }

      var _this$gesture4 = this.gesture,
          startTime = _this$gesture4.startTime,
          startTouches = _this$gesture4.startTouches,
          pinch = _this$gesture4.pinch,
          rotate = _this$gesture4.rotate;
      var touches = this.getTouches(e);
      var moveStatus = calcMoveStatus(startTouches, touches, time - startTime);
      var multiFingerStatus;

      if (pinch || rotate) {
        multiFingerStatus = calcMultiFingerStatus(touches);
      }

      this.setGestureState({
        /* update status snapshot */
        touches: touches,
        multiFingerStatus: multiFingerStatus,

        /* update duration status */
        moveStatus: moveStatus
      });
    },
    _handleTouchEnd: function _handleTouchEnd(e) {
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
    _handleTouchCancel: function _handleTouchCancel(e) {
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
    triggerAllowEvent: function triggerAllowEvent(type, status) {
      if (this.allowGesture()) {
        this.triggerCombineEvent(type, status);
      } else {
        this.triggerSubEvent(type, status);
      }
    },
    doSingleTouchEnd: function doSingleTouchEnd(status) {
      var _this$gesture5 = this.gesture,
          moveStatus = _this$gesture5.moveStatus,
          pinch = _this$gesture5.pinch,
          rotate = _this$gesture5.rotate,
          press = _this$gesture5.press,
          pan = _this$gesture5.pan,
          direction = _this$gesture5.direction;

      if (pinch || rotate) {
        return;
      }

      if (moveStatus) {
        var z = moveStatus.z,
            velocity = moveStatus.velocity;
        var swipe = shouldTriggerSwipe(z, velocity);
        this.setGestureState({
          swipe: swipe
        });

        if (pan) {
          // pan need end, it's a process
          // sometimes, start with pan left, but end with pan right....
          this.triggerAllowEvent('pan', status);
        }

        if (swipe) {
          var directionEvName = getDirectionEventName(direction); // swipe just need a direction, it's a endpoint

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
    getTouchAction: function getTouchAction() {
      var enablePinch = this.enablePinch,
          enableRotate = this.enableRotate;
      var directionSetting = this.directionSetting;

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
  render: function render() {
    if (!this.$slots.default || this.$slots.default.length !== 1) {
      throw new Error('slots number is not one.');
    }

    var touchAction = this.getTouchAction();
    var on = {
      touchstart: this._handleTouchStart,
      touchmove: this._handleTouchMove,
      touchcancel: this._handleTouchCancel,
      touchend: this._handleTouchEnd
    };

    _extends(this.$slots.default[0].data, {
      on: on,
      style: _extends({}, this.$slots.default[0].data.style, {
        touchAction: touchAction
      })
    });

    return this.$slots.default[0];
  }
};