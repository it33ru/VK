"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _PanelHeaderButton = _interopRequireDefault(require("../PanelHeaderButton/PanelHeaderButton"));

var _done_outline = _interopRequireDefault(require("@vkontakte/icons/dist/28/done_outline"));

var _platform = require("../../lib/platform");

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var PanelHeaderSubmit = function PanelHeaderSubmit(_ref) {
  var children = _ref.children,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["children"]);
  var platform = (0, _usePlatform.default)();
  return /*#__PURE__*/_react.default.createElement(_PanelHeaderButton.default, (0, _extends2.default)({
    primary: true
  }, restProps), platform === _platform.ANDROID ? /*#__PURE__*/_react.default.createElement(_done_outline.default, null) : children);
};

PanelHeaderSubmit.defaultProps = {
  children: 'Готово'
};
var _default = PanelHeaderSubmit;
exports.default = _default;
//# sourceMappingURL=PanelHeaderSubmit.js.map