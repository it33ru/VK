import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from '../../lib/classNames';
import getClassname from '../../helpers/getClassName';
import usePlatform from '../../hooks/usePlatform';

var CardGrid = function CardGrid(_ref) {
  var children = _ref.children,
      className = _ref.className,
      style = _ref.style,
      restProps = _objectWithoutProperties(_ref, ["children", "className", "style"]);

  var platform = usePlatform();
  return /*#__PURE__*/React.createElement("div", _extends({}, restProps, {
    style: style,
    className: classNames(className, getClassname('CardGrid', platform))
  }), children);
};

export default CardGrid;
//# sourceMappingURL=CardGrid.js.map