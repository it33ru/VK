import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React, { Children } from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

var preventDefault = function preventDefault(e) {
  return e.preventDefault();
};

var FormLayout = function FormLayout(props) {
  var children = props.children,
      Component = props.Component,
      className = props.className,
      getRef = props.getRef,
      onSubmit = props.onSubmit,
      restProps = _objectWithoutProperties(props, ["children", "Component", "className", "getRef", "onSubmit"]);

  var platform = usePlatform();
  return /*#__PURE__*/React.createElement(Component, _extends({}, restProps, {
    className: classNames(getClassName('FormLayout', platform), className),
    onSubmit: onSubmit,
    ref: getRef
  }), /*#__PURE__*/React.createElement("div", {
    className: "FormLayout__container"
  }, Children.toArray(children).map(function (field, i) {
    if (field) {
      var _field$props = field.props,
          status = _field$props.status,
          top = _field$props.top,
          bottom = _field$props.bottom;
      return /*#__PURE__*/React.createElement("div", {
        className: classNames('FormLayout__row', _defineProperty({}, "FormLayout__row--s-".concat(status), !!status)),
        key: field.key || "row-".concat(i)
      }, top && /*#__PURE__*/React.createElement("div", {
        className: "FormLayout__row-top"
      }, top), field, bottom && /*#__PURE__*/React.createElement("div", {
        className: "FormLayout__row-bottom"
      }, bottom));
    } else {
      return null;
    }
  })), Component === 'form' && /*#__PURE__*/React.createElement("input", {
    type: "submit",
    className: "FormLayout__submit",
    value: ""
  }));
};

FormLayout.defaultProps = {
  Component: 'form',
  onSubmit: preventDefault
};
export default FormLayout;
//# sourceMappingURL=FormLayout.js.map