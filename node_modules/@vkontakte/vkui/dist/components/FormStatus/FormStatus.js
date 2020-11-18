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

var FormStatus = function FormStatus(_ref) {
  var mode = _ref.mode,
      header = _ref.header,
      children = _ref.children,
      className = _ref.className,
      dangerouslySetInnerHTML = _ref.dangerouslySetInnerHTML,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["mode", "header", "children", "className", "dangerouslySetInnerHTML"]);
  var platform = (0, _usePlatform.default)();
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, restProps, {
    className: (0, _classNames.default)((0, _getClassName.default)('FormStatus', platform), "FormStatus--".concat(mode), className)
  }), header && /*#__PURE__*/_react.default.createElement("div", {
    className: "FormStatus__header"
  }, header), dangerouslySetInnerHTML && /*#__PURE__*/_react.default.createElement("div", {
    className: "FormStatus__content",
    dangerouslySetInnerHTML: dangerouslySetInnerHTML
  }), children && !dangerouslySetInnerHTML && /*#__PURE__*/_react.default.createElement("div", {
    className: "FormStatus__content"
  }, children));
};

var _default = FormStatus;
exports.default = _default;
//# sourceMappingURL=FormStatus.js.map