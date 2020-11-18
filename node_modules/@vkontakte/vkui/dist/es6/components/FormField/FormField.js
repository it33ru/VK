import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

var FormField = function FormField(_ref) {
  var Component = _ref.Component,
      className = _ref.className,
      children = _ref.children,
      status = _ref.status,
      getRootRef = _ref.getRootRef,
      top = _ref.top,
      bottom = _ref.bottom,
      restProps = _objectWithoutProperties(_ref, ["Component", "className", "children", "status", "getRootRef", "top", "bottom"]);

  var platform = usePlatform();
  return /*#__PURE__*/React.createElement(Component, _extends({}, restProps, {
    ref: getRootRef,
    className: classNames(getClassName('FormField', platform), _defineProperty({}, "FormField--s-".concat(status), status !== 'default'), className)
  }), children, /*#__PURE__*/React.createElement("div", {
    className: "FormField__border"
  }));
};

FormField.defaultProps = {
  status: 'default',
  Component: 'div'
};
export default FormField;
//# sourceMappingURL=FormField.js.map