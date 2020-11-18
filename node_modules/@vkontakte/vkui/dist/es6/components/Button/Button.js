import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import Tappable from '../Tappable/Tappable';
import usePlatform from '../../hooks/usePlatform';

var Button = function Button(props) {
  var platform = usePlatform();

  var className = props.className,
      size = props.size,
      mode = props.mode,
      stretched = props.stretched,
      align = props.align,
      children = props.children,
      before = props.before,
      after = props.after,
      getRootRef = props.getRootRef,
      Component = props.Component,
      restProps = _objectWithoutProperties(props, ["className", "size", "mode", "stretched", "align", "children", "before", "after", "getRootRef", "Component"]);

  return /*#__PURE__*/React.createElement(Tappable, _extends({}, restProps, {
    className: classNames(getClassName('Button', platform), className, "Button--sz-".concat(size), "Button--lvl-".concat(mode), "Button--aln-".concat(align || 'center'), _defineProperty({}, 'Button--str', stretched)),
    getRootRef: getRootRef,
    Component: restProps.href ? 'a' : Component
  }), /*#__PURE__*/React.createElement("div", {
    className: "Button__in"
  }, before && /*#__PURE__*/React.createElement("div", {
    className: "Button__before"
  }, before), children && /*#__PURE__*/React.createElement("div", {
    className: "Button__content"
  }, children), after && /*#__PURE__*/React.createElement("div", {
    className: "Button__after"
  }, after)));
};

Button.defaultProps = {
  mode: 'primary',
  Component: 'button',
  size: 'm',
  stretched: false,
  stopPropagation: true
};
export default Button;
//# sourceMappingURL=Button.js.map