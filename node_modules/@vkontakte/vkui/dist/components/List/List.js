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

var List = function List(_ref) {
  var className = _ref.className,
      children = _ref.children,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["className", "children"]);
  var platform = (0, _usePlatform.default)();
  var baseClassName = (0, _getClassName.default)('List', platform);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, restProps, {
    className: (0, _classNames.default)(baseClassName, className)
  }), children);
};

var _default = List;
exports.default = _default;
//# sourceMappingURL=List.js.map