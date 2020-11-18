"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _Tappable = _interopRequireDefault(require("../Tappable/Tappable"));

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var CellButton = function CellButton(_ref) {
  var className = _ref.className,
      align = _ref.align,
      mode = _ref.mode,
      before = _ref.before,
      children = _ref.children,
      stopPropagation = _ref.stopPropagation,
      Component = _ref.Component,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["className", "align", "mode", "before", "children", "stopPropagation", "Component"]);
  var platform = (0, _usePlatform.default)();
  return /*#__PURE__*/_react.default.createElement(_Tappable.default, (0, _extends2.default)({}, restProps, {
    className: (0, _classNames.default)((0, _getClassName.default)('CellButton', platform), className, "CellButton--lvl-".concat(mode), "CellButton--aln-".concat(align)),
    Component: restProps.href ? 'a' : Component
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "CellButton__in"
  }, before && /*#__PURE__*/_react.default.createElement("div", {
    className: "CellButton__before"
  }, before), children && /*#__PURE__*/_react.default.createElement("div", {
    className: "CellButton__content"
  }, children)));
};

CellButton.defaultProps = {
  mode: 'primary',
  Component: 'button',
  align: 'left',
  stopPropagation: true
};
var _default = CellButton;
exports.default = _default;
//# sourceMappingURL=CellButton.js.map