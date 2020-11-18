"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _Tappable = _interopRequireWildcard(require("../Tappable/Tappable"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _platform = require("../../lib/platform");

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var Radio = function Radio(props) {
  var children = props.children,
      description = props.description,
      style = props.style,
      className = props.className,
      getRef = props.getRef,
      getRootRef = props.getRootRef,
      top = props.top,
      bottom = props.bottom,
      restProps = (0, _objectWithoutProperties2.default)(props, ["children", "description", "style", "className", "getRef", "getRootRef", "top", "bottom"]);
  var platform = (0, _usePlatform.default)();
  return /*#__PURE__*/_react.default.createElement(_Tappable.default, {
    Component: "label",
    style: style,
    className: (0, _classNames.default)((0, _getClassName.default)('Radio', platform), className),
    activeEffectDelay: platform === _platform.IOS ? 100 : _Tappable.ACTIVE_EFFECT_DELAY,
    disabled: restProps.disabled,
    getRootRef: getRootRef
  }, /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({}, restProps, {
    type: "radio",
    className: "Radio__input",
    ref: getRef
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "Radio__container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "Radio__icon"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "Radio__content"
  }, children, description && /*#__PURE__*/_react.default.createElement("div", {
    className: "Radio__description"
  }, description))));
};

var _default = Radio;
exports.default = _default;
//# sourceMappingURL=Radio.js.map