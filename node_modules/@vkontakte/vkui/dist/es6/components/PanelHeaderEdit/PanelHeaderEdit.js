import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PanelHeaderButton from '../PanelHeaderButton/PanelHeaderButton';
import { ANDROID } from '../../lib/platform';
import Icon28EditOutline from '@vkontakte/icons/dist/28/edit_outline';
import Icon28DoneOutline from '@vkontakte/icons/dist/28/done_outline';
import usePlatform from '../../hooks/usePlatform';

var PanelHeaderEdit = function PanelHeaderEdit(_ref) {
  var isActive = _ref.isActive,
      editLabel = _ref.editLabel,
      doneLabel = _ref.doneLabel,
      restProps = _objectWithoutProperties(_ref, ["isActive", "editLabel", "doneLabel"]);

  var iOSText = isActive ? doneLabel : editLabel;
  var AndroidIcon = isActive ? /*#__PURE__*/React.createElement(Icon28DoneOutline, null) : /*#__PURE__*/React.createElement(Icon28EditOutline, null);
  var platform = usePlatform();
  return /*#__PURE__*/React.createElement(PanelHeaderButton, restProps, platform === ANDROID ? AndroidIcon : iOSText);
};

PanelHeaderEdit.defaultProps = {
  isActive: false,
  editLabel: 'Редактировать',
  doneLabel: 'Готово'
};
export default PanelHeaderEdit;
//# sourceMappingURL=PanelHeaderEdit.js.map