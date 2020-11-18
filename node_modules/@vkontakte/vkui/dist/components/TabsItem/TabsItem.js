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

var _getClassName = _interopRequireDefault(require("../../helpers/getClassName"));

var _Tappable = _interopRequireWildcard(require("../Tappable/Tappable"));

var _classNames = _interopRequireDefault(require("../../lib/classNames"));

var _platform = require("../../lib/platform");

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var TabsItem = function TabsItem(_ref) {
  var children = _ref.children,
      selected = _ref.selected,
      className = _ref.className,
      after = _ref.after,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["children", "selected", "className", "after"]);
  var platform = (0, _usePlatform.default)();
  return /*#__PURE__*/_react.default.createElement(_Tappable.default, (0, _extends2.default)({}, restProps, {
    className: (0, _classNames.default)((0, _getClassName.default)('TabsItem', platform), {
      'TabsItem--selected': selected
    }, className),
    activeEffectDelay: platform === _platform.IOS ? 0 : _Tappable.ACTIVE_EFFECT_DELAY
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "TabsItem__in"
  }, children), after && /*#__PURE__*/_react.default.createElement("div", {
    className: "TabsItem__after"
  }, after));
};

TabsItem.defaultProps = {
  selected: false
};
var _default = TabsItem;
exports.default = _default;
//# sourceMappingURL=TabsItem.js.map