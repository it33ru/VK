"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _PanelHeaderButton = _interopRequireDefault(require("../PanelHeaderButton/PanelHeaderButton"));

var _platform = require("../../lib/platform");

var _edit_outline = _interopRequireDefault(require("@vkontakte/icons/dist/28/edit_outline"));

var _done_outline = _interopRequireDefault(require("@vkontakte/icons/dist/28/done_outline"));

var _usePlatform = _interopRequireDefault(require("../../hooks/usePlatform"));

var PanelHeaderEdit = function PanelHeaderEdit(_ref) {
  var isActive = _ref.isActive,
      editLabel = _ref.editLabel,
      doneLabel = _ref.doneLabel,
      restProps = (0, _objectWithoutProperties2.default)(_ref, ["isActive", "editLabel", "doneLabel"]);
  var iOSText = isActive ? doneLabel : editLabel;
  var AndroidIcon = isActive ? /*#__PURE__*/_react.default.createElement(_done_outline.default, null) : /*#__PURE__*/_react.default.createElement(_edit_outline.default, null);
  var platform = (0, _usePlatform.default)();
  return /*#__PURE__*/_react.default.createElement(_PanelHeaderButton.default, restProps, platform === _platform.ANDROID ? AndroidIcon : iOSText);
};

PanelHeaderEdit.defaultProps = {
  isActive: false,
  editLabel: 'Редактировать',
  doneLabel: 'Готово'
};
var _default = PanelHeaderEdit;
exports.default = _default;
//# sourceMappingURL=PanelHeaderEdit.js.map