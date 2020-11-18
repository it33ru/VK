import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PanelHeaderButton from '../PanelHeaderButton/PanelHeaderButton';
import Icon28DoneOutline from '@vkontakte/icons/dist/28/done_outline';
import { ANDROID } from '../../lib/platform';
import usePlatform from '../../hooks/usePlatform';

var PanelHeaderSubmit = function PanelHeaderSubmit(_ref) {
  var children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["children"]);

  var platform = usePlatform();
  return /*#__PURE__*/React.createElement(PanelHeaderButton, _extends({
    primary: true
  }, restProps), platform === ANDROID ? /*#__PURE__*/React.createElement(Icon28DoneOutline, null) : children);
};

PanelHeaderSubmit.defaultProps = {
  children: 'Готово'
};
export default PanelHeaderSubmit;
//# sourceMappingURL=PanelHeaderSubmit.js.map