"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames2 = _interopRequireDefault(require("../../lib/classNames"));

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var FormField = function FormField(_ref) {
  var Component = _ref.Component,
      className = _ref.className,
      children = _ref.children,
      status = _ref.status,
      getRootRef = _ref.getRootRef,
      top = _ref.top,
      bottom = _ref.bottom,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["Component", "className", "children", "status", "getRootRef", "top", "bottom"]);
  var platform = (0, _usePlatform.default)();
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, restProps, {
    ref: getRootRef,
    className: (0, _classNames2.default)((0, _getClassName.default)('FormField', platform), (0, _defineProperty2.default)({}, "FormField--s-".concat(status), status !== 'default'), className)
  }), children, /*#__PURE__*/_react.default.createElement("div", {
    className: "FormField__border"
  }));
};

FormField.defaultProps = {
  status: 'default',
  Component: 'div'
};
var _default = FormField;
exports.default = _default;
//# sourceMappingURL=FormField.js.map