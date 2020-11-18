import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import Tappable, { ACTIVE_EFFECT_DELAY } from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { IOS } from '../../lib/platform';
import Icon16Done from '@vkontakte/icons/dist/16/done';
import usePlatform from '../../hooks/usePlatform';
export var Checkbox = function Checkbox(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      getRootRef = _ref.getRootRef,
      getRef = _ref.getRef,
      top = _ref.top,
      bottom = _ref.bottom,
      restProps = _objectWithoutProperties(_ref, ["children", "className", "style", "getRootRef", "getRef", "top", "bottom"]);

  var platform = usePlatform();
  return /*#__PURE__*/React.createElement(Tappable, {
    Component: "label",
    className: classNames(getClassName('Checkbox', platform), className),
    style: style,
    disabled: restProps.disabled,
    activeEffectDelay: platform === IOS ? 100 : ACTIVE_EFFECT_DELAY,
    getRootRef: getRootRef
  }, /*#__PURE__*/React.createElement("input", _extends({}, restProps, {
    type: "checkbox",
    className: "Checkbox__input",
    ref: getRef
  })), /*#__PURE__*/React.createElement("div", {
    className: "Checkbox__container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Checkbox__icon"
  }, /*#__PURE__*/React.createElement(Icon16Done, null)), /*#__PURE__*/React.createElement("div", {
    className: "Checkbox__content"
  }, children)));
};
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map