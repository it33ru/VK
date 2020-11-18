import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import Tappable, { ACTIVE_EFFECT_DELAY } from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import { IOS } from '../../lib/platform';
import usePlatform from '../../hooks/usePlatform';

var Radio = function Radio(props) {
  var children = props.children,
      description = props.description,
      style = props.style,
      className = props.className,
      getRef = props.getRef,
      getRootRef = props.getRootRef,
      top = props.top,
      bottom = props.bottom,
      restProps = _objectWithoutProperties(props, ["children", "description", "style", "className", "getRef", "getRootRef", "top", "bottom"]);

  var platform = usePlatform();
  return /*#__PURE__*/React.createElement(Tappable, {
    Component: "label",
    style: style,
    className: classNames(getClassName('Radio', platform), className),
    activeEffectDelay: platform === IOS ? 100 : ACTIVE_EFFECT_DELAY,
    disabled: restProps.disabled,
    getRootRef: getRootRef
  }, /*#__PURE__*/React.createElement("input", _extends({}, restProps, {
    type: "radio",
    className: "Radio__input",
    ref: getRef
  })), /*#__PURE__*/React.createElement("div", {
    className: "Radio__container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "Radio__icon"
  }), /*#__PURE__*/React.createElement("div", {
    className: "Radio__content"
  }, children, description && /*#__PURE__*/React.createElement("div", {
    className: "Radio__description"
  }, description))));
};

export default Radio;
//# sourceMappingURL=Radio.js.map