"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _nodeHtmlParser = require("node-html-parser");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var replaceWithComponent = function replaceWithComponent(node, index, tags) {
  var Component = tags(node.tagName.toLowerCase(), _extends({}, node.attributes, {
    key: index,
    children: htmlToReact(node.innerHTML, tags)
  }));
  return Component;
};

var htmlToReact = function htmlToReact(html, tags) {
  if (typeof html !== "string") {
    return [];
  }

  var root = (0, _nodeHtmlParser.parse)(html);

  if (!root.childNodes.length) {
    return null;
  }

  var result = root.childNodes.map(function (node, index) {
    if (node.text && node.nodeType === 3) {
      return node.text;
    }

    return replaceWithComponent(node, index, tags);
  });
  return result;
};

var _default = htmlToReact;
exports["default"] = _default;
module.exports = exports.default;