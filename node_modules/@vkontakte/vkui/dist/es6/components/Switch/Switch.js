import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

var Switch = function Switch(_ref) {
  var style = _ref.style,
      className = _ref.className,
      getRef = _ref.getRef,
      getRootRef = _ref.getRootRef,
      restProps = _objectWithoutProperties(_ref, ["style", "className", "getRef", "getRootRef"]);

  var platform = usePlatform();
  return /*#__PURE__*/React.createElement("label", {
    className: classNames(getClassName('Switch', platform), className),
    style: style,
    ref: getRootRef
  }, /*#__PURE__*/React.createElement("input", _extends({}, restProps, {
    type: "checkbox",
    className: "Switch__self",
    ref: getRef
  })), /*#__PURE__*/React.createElement("span", {
    className: "Switch__pseudo"
  }));
};

export default Switch;
//# sourceMappingURL=Switch.js.map