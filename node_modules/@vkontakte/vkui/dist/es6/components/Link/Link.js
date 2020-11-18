import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

var Link = function Link(_ref) {
  var children = _ref.children,
      className = _ref.className,
      Component = _ref.Component,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["children", "className", "Component", "getRootRef"]);

  var platform = usePlatform();
  var baseClassName = getClassName('Link', platform);
  return /*#__PURE__*/React.createElement(Component, _extends({}, restProps, {
    ref: getRootRef,
    className: classNames(baseClassName, className)
  }), children);
};

Link.defaultProps = {
  Component: 'a'
};
export default Link;
//# sourceMappingURL=Link.js.map