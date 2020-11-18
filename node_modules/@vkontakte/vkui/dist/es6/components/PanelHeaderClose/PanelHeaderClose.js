import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import Icon28CancelOutline from '@vkontakte/icons/dist/28/cancel_outline';
import PanelHeaderButton from '../PanelHeaderButton/PanelHeaderButton';
import { ANDROID } from '../../lib/platform';
import usePlatform from '../../hooks/usePlatform';

var PanelHeaderClose = function PanelHeaderClose(_ref) {
  var children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["children"]);

  var platform = usePlatform();
  return /*#__PURE__*/React.createElement(PanelHeaderButton, restProps, platform === ANDROID ? /*#__PURE__*/React.createElement(Icon28CancelOutline, null) : children);
};

PanelHeaderClose.defaultProps = {
  children: 'Отмена'
};
export default PanelHeaderClose;
//# sourceMappingURL=PanelHeaderClose.js.map