"use strict";

exports.__esModule = true;
exports.isAsyncPlaceholder = isAsyncPlaceholder;

function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}