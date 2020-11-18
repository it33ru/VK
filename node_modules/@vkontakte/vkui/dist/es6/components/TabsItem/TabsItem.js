import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import getClassName from '../../helpers/getClassName';
import Tappable, { ACTIVE_EFFECT_DELAY } from '../Tappable/Tappable';
import classNames from '../../lib/classNames';
import { IOS } from '../../lib/platform';
import usePlatform from '../../hooks/usePlatform';

var TabsItem = function TabsItem(_ref) {
  var children = _ref.children,
      selected = _ref.selected,
      className = _ref.className,
      after = _ref.after,
      restProps = _objectWithoutProperties(_ref, ["children", "selected", "className", "after"]);

  var platform = usePlatform();
  return /*#__PURE__*/React.createElement(Tappable, _extends({}, restProps, {
    className: classNames(getClassName('TabsItem', platform), {
      'TabsItem--selected': selected
    }, className),
    activeEffectDelay: platform === IOS ? 0 : ACTIVE_EFFECT_DELAY
  }), /*#__PURE__*/React.createElement("div", {
    className: "TabsItem__in"
  }, children), after && /*#__PURE__*/React.createElement("div", {
    className: "TabsItem__after"
  }, after));
};

TabsItem.defaultProps = {
  selected: false
};
export default TabsItem;
//# sourceMappingURL=TabsItem.js.map