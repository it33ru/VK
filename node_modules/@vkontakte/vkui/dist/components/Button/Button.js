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

var _Tappable = _interopRequireDefault(require("../Tappable/Tappable"));

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var Button = function Button(props) {
  var platform = (0, _usePlatform.default)();
  var className = props.className,
      size = props.size,
      mode = props.mode,
      stretched = props.stretched,
      align = props.align,
      children = props.children,
      before = props.before,
      after = props.after,
      getRootRef = props.getRootRef,
      Component = props.Component,
      restProps = (0, _objectWithoutProperties2.default)(props, ["className", "size", "mode", "stretched", "align", "children", "before", "after", "getRootRef", "Component"]);
  return /*#__PURE__*/_react.default.createElement(_Tappable.default, (0, _extends2.default)({}, restProps, {
    className: (0, _classNames2.default)((0, _getClassName.default)('Button', platform), className, "Button--sz-".concat(size), "Button--lvl-".concat(mode), "Button--aln-".concat(align || 'center'), (0, _defineProperty2.default)({}, 'Button--str', stretched)),
    getRootRef: getRootRef,
    Component: restProps.href ? 'a' : Component
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "Button__in"
  }, before && /*#__PURE__*/_react.default.createElement("div", {
    className: "Button__before"
  }, before), children && /*#__PURE__*/_react.default.createElement("div", {
    className: "Button__content"
  }, children), after && /*#__PURE__*/_react.default.createElement("div", {
    className: "Button__after"
  }, after)));
};

Button.defaultProps = {
  mode: 'primary',
  Component: 'button',
  size: 'm',
  stretched: false,
  stopPropagation: true
};
var _default = Button;
exports.default = _default;
//# sourceMappingURL=Button.js.map