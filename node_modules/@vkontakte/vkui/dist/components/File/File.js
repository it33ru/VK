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

var _Button = _interopRequireDefault(require("../Button/Button"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var File = function File(props) {
  var children = props.children,
      align = props.align,
      controlSize = props.controlSize,
      mode = props.mode,
      stretched = props.stretched,
      before = props.before,
      className = props.className,
      style = props.style,
      getRef = props.getRef,
      getRootRef = props.getRootRef,
      restProps = (0, _objectWithoutProperties2.default)(props, ["children", "align", "controlSize", "mode", "stretched", "before", "className", "style", "getRef", "getRootRef"]);
  var platform = (0, _usePlatform.default)();
  return /*#__PURE__*/_react.default.createElement(_Button.default, {
    align: align,
    className: (0, _classNames.default)((0, _getClassName.default)('File', platform), className),
    Component: "label",
    stretched: stretched,
    mode: mode,
    size: controlSize,
    before: before,
    style: style,
    getRootRef: getRootRef,
    disabled: restProps.disabled
  }, /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({}, restProps, {
    className: "File__input",
    type: "file",
    ref: getRef
  })), children);
};

File.defaultProps = {
  children: 'Выберите файл',
  align: 'left'
};
var _default = File;
exports.default = _default;
//# sourceMappingURL=File.js.map