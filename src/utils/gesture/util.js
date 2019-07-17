import {
  SWIPE,
  DIRECTION_NONE,
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  DIRECTION_UP,
  DIRECTION_DOWN
} from './config';

/**
 * @description 计算两个点之间的距离，可用于计算pinch的scale
 * @param {Number} x
 * @param {Number} y
 */
function _calcTriangleDistance(x, y) {
  return Math.sqrt(x * x + y * y);
}
/**
 * @description 计算相对于x轴正方向的角度，可用于计算两次手势之间的夹角
 * @param {*} x
 * @param {*} y
 */
function _calcAngle(x, y) {
  // https://blog.csdn.net/pecke/article/details/41014069
  const radian = Math.atan2(y, x);
  // 弧度转化为角度：弧度 * 180 / Math.PI
  return 180 / (Math.PI / radian);
}

export function now() {
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/now
  return Date.now();
}


export function getEventName(prefix, status) {
  return prefix + status[0].toUpperCase() + status.slice(1);
}

export function shouldTriggerSwipe(delta, velocity) {
  return Math.abs(delta) >= SWIPE.threshold && Math.abs(velocity) > SWIPE.velocity;
}

export function shouldTriggerDirection(direction, directionSetting) {
  return directionSetting && direction;
}

export function calcMultiFingerStatus(touches) {
  if (touches.length < 2) {
    return;
  }
  const { x: x1, y: y1 } = touches[0];
  const { x: x2, y: y2 } = touches[1];
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;
  return {
    x: deltaX,
    y: deltaY,
    z: _calcTriangleDistance(deltaX, deltaY),
    angle: _calcAngle(deltaX, deltaY)
  };
}

export function calcMoveStatus(startTouches, touches, time) {
  const { x: x1, y: y1 } = startTouches[0];
  const { x: x2, y: y2 } = touches[0];
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;
  const deltaZ = _calcTriangleDistance(deltaX, deltaY);
  return {
    x: deltaX,
    y: deltaY,
    z: deltaZ,
    time,
    velocity: deltaZ / time,
    angle: _calcAngle(deltaX, deltaY)
  };
}

export function calcRotation(startMultiFingerStatus, multiFingerStatus) {
  const { angle: startAngle } = startMultiFingerStatus;
  const { angle } = multiFingerStatus;
  // 这里好像是逆时针是角度是正值，不知道为什么这么规定的
  return angle - startAngle;
}


export function getMovingDirection(point1, point2) {
  const { x: x1, y: y1 } = point1;
  const { x: x2, y: y2 } = point2;
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;

  if (deltaX === 0 && deltaY === 0) {
    return DIRECTION_NONE;
  }

  if (Math.abs(deltaX) >= Math.abs(deltaY)) {
    return deltaX < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
  }

  return deltaY < 0 ? DIRECTION_UP : DIRECTION_DOWN;
}

export function getDirectionEventName(direction) {
  let name;
  switch (direction) {
    case DIRECTION_NONE:
      break;
    case DIRECTION_LEFT:
      name = 'left';
      break;
    case DIRECTION_RIGHT:
      name = 'right';
      break;
    case DIRECTION_UP:
      name = 'up';
      break;
    case DIRECTION_DOWN:
      name = 'down';
      break;
    default:
  }
  return name;
}
