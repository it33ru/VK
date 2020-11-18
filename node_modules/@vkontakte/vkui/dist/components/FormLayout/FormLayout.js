"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames2 = _interopRequireDefault(require("../../lib/classNames"));

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var preventDefault = function preventDefault(e) {
  return e.preventDefault();
};

var FormLayout = function FormLayout(props) {
  var children = props.children,
      Component = props.Component,
      className = props.className,
      getRef = props.getRef,
      onSubmit = props.onSubmit,
      restProps = (0, _objectWithoutProperties2.default)(props, ["children", "Component", "className", "getRef", "onSubmit"]);
  var platform = (0, _usePlatform.default)();
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, restProps, {
    className: (0, _classNames2.default)((0, _getClassName.default)('FormLayout', platform), className),
    onSubmit: onSubmit,
    ref: getRef
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "FormLayout__container"
  }, _react.Children.toArray(children).map(function (field, i) {
    if (field) {
      var _field$props = field.props,
          status = _field$props.status,
          top = _field$props.top,
          bottom = _field$props.bottom;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: (0, _classNames2.default)('FormLayout__row', (0, _defineProperty2.default)({}, "FormLayout__row--s-".concat(status), !!status)),
        key: field.key || "row-".concat(i)
      }, top && /*#__PURE__*/_react.default.createElement("div", {
        className: "FormLayout__row-top"
      }, top), field, bottom && /*#__PURE__*/_react.default.createElement("div", {
        className: "FormLayout__row-bottom"
      }, bottom));
    } else {
      return null;
    }
  })), Component === 'form' && /*#__PURE__*/_react.default.createElement("input", {
    type: "submit",
    className: "FormLayout__submit",
    value: ""
  }));
};

FormLayout.defaultProps = {
  Component: 'form',
  onSubmit: preventDefault
};
var _default = FormLayout;
exports.default = _default;
//# sourceMappingURL=FormLayout.js.map