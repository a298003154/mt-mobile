"use strict";

exports.__esModule = true;
exports.now = now;
exports.getEventName = getEventName;
exports.shouldTriggerSwipe = shouldTriggerSwipe;
exports.shouldTriggerDirection = shouldTriggerDirection;
exports.calcMultiFingerStatus = calcMultiFingerStatus;
exports.calcMoveStatus = calcMoveStatus;
exports.calcRotation = calcRotation;
exports.getMovingDirection = getMovingDirection;
exports.getDirectionEventName = getDirectionEventName;

var _config = require("./config");

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
  var radian = Math.atan2(y, x); // 弧度转化为角度：弧度 * 180 / Math.PI

  return 180 / (Math.PI / radian);
}

function now() {
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/now
  return Date.now();
}

function getEventName(prefix, status) {
  return prefix + status[0].toUpperCase() + status.slice(1);
}

function shouldTriggerSwipe(delta, velocity) {
  return Math.abs(delta) >= _config.SWIPE.threshold && Math.abs(velocity) > _config.SWIPE.velocity;
}

function shouldTriggerDirection(direction, directionSetting) {
  return directionSetting && direction;
}

function calcMultiFingerStatus(touches) {
  if (touches.length < 2) {
    return;
  }

  var _touches$ = touches[0],
      x1 = _touches$.x,
      y1 = _touches$.y;
  var _touches$2 = touches[1],
      x2 = _touches$2.x,
      y2 = _touches$2.y;
  var deltaX = x2 - x1;
  var deltaY = y2 - y1;
  return {
    x: deltaX,
    y: deltaY,
    z: _calcTriangleDistance(deltaX, deltaY),
    angle: _calcAngle(deltaX, deltaY)
  };
}

function calcMoveStatus(startTouches, touches, time) {
  var _startTouches$ = startTouches[0],
      x1 = _startTouches$.x,
      y1 = _startTouches$.y;
  var _touches$3 = touches[0],
      x2 = _touches$3.x,
      y2 = _touches$3.y;
  var deltaX = x2 - x1;
  var deltaY = y2 - y1;

  var deltaZ = _calcTriangleDistance(deltaX, deltaY);

  return {
    x: deltaX,
    y: deltaY,
    z: deltaZ,
    time: time,
    velocity: deltaZ / time,
    angle: _calcAngle(deltaX, deltaY)
  };
}

function calcRotation(startMultiFingerStatus, multiFingerStatus) {
  var startAngle = startMultiFingerStatus.angle;
  var angle = multiFingerStatus.angle; // 这里好像是逆时针是角度是正值，不知道为什么这么规定的

  return angle - startAngle;
}

function getMovingDirection(point1, point2) {
  var x1 = point1.x,
      y1 = point1.y;
  var x2 = point2.x,
      y2 = point2.y;
  var deltaX = x2 - x1;
  var deltaY = y2 - y1;

  if (deltaX === 0 && deltaY === 0) {
    return _config.DIRECTION_NONE;
  }

  if (Math.abs(deltaX) >= Math.abs(deltaY)) {
    return deltaX < 0 ? _config.DIRECTION_LEFT : _config.DIRECTION_RIGHT;
  }

  return deltaY < 0 ? _config.DIRECTION_UP : _config.DIRECTION_DOWN;
}

function getDirectionEventName(direction) {
  var name;

  switch (direction) {
    case _config.DIRECTION_NONE:
      break;

    case _config.DIRECTION_LEFT:
      name = 'left';
      break;

    case _config.DIRECTION_RIGHT:
      name = 'right';
      break;

    case _config.DIRECTION_UP:
      name = 'up';
      break;

    case _config.DIRECTION_DOWN:
      name = 'down';
      break;

    default:
  }

  return name;
}