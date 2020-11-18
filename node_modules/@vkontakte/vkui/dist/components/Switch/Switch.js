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

var Switch = function Switch(_ref) {
  var style = _ref.style,
      className = _ref.className,
      getRef = _ref.getRef,
      getRootRef = _ref.getRootRef,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["style", "className", "getRef", "getRootRef"]);
  var platform = (0, _usePlatform.default)();
  return /*#__PURE__*/_react.default.createElement("label", {
    className: (0, _classNames.default)((0, _getClassName.default)('Switch', platform), className),
    style: style,
    ref: getRootRef
  }, /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({}, restProps, {
    type: "checkbox",
    className: "Switch__self",
    ref: getRef
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "Switch__pseudo"
  }));
};

var _default = Switch;
exports.default = _default;
//# sourceMappingURL=Switch.js.map