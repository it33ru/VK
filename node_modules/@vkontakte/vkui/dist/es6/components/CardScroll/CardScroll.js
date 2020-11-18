import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from '../../lib/classNames';
import getClassname from '../../helpers/getClassName';
import usePlatform from '../../hooks/usePlatform';
import HorizontalScroll from '../HorizontalScroll/HorizontalScroll';

var CardScroll = function CardScroll(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      restProps = _objectWithoutProperties(_ref, ["children", "className", "style"]);

  var platform = usePlatform();
  return /*#__PURE__*/React.createElement("div", _extends({}, restProps, {
    style: style,
    className: classNames(className, getClassname('CardScroll', platform))
  }), /*#__PURE__*/React.createElement(HorizontalScroll, null, /*#__PURE__*/React.createElement("div", {
    className: "CardScroll__in"
  }, children)));
};

export default CardScroll;
//# sourceMappingURL=CardScroll.js.map