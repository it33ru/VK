"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var Link = function Link(_ref) {
  var children = _ref.children,
      className = _ref.className,
      Component = _ref.Component,
      getRootRef = _ref.getRootRef,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "Component", "getRootRef"]);
  var platform = (0, _usePlatform.default)();
  var baseClassName = (0, _getClassName.default)('Link', platform);
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, restProps, {
    ref: getRootRef,
    className: (0, _classNames.default)(baseClassName, className)
  }), children);
};

Link.defaultProps = {
  Component: 'a'
};
var _default = Link;
exports.default = _default;
//# sourceMappingURL=Link.js.map