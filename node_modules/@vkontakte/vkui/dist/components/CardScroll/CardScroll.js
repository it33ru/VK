"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var _HorizontalScroll = _interopRequireDefault(require("../HorizontalScroll/HorizontalScroll"));

var CardScroll = function CardScroll(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["children", "className", "style"]);
  var platform = (0, _usePlatform.default)();
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, restProps, {
    style: style,
    className: (0, _classNames.default)(className, (0, _getClassName.default)('CardScroll', platform))
  }), /*#__PURE__*/_react.default.createElement(_HorizontalScroll.default, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "CardScroll__in"
  }, children)));
};

var _default = CardScroll;
exports.default = _default;
//# sourceMappingURL=CardScroll.js.map