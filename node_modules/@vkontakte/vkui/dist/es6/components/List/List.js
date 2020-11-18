import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import usePlatform from '../../hooks/usePlatform';

var List = function List(_ref) {
  var className = _ref.className,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["className", "children"]);

  var platform = usePlatform();
  var baseClassName = getClassName('List', platform);
  return /*#__PURE__*/React.createElement("div", _extends({}, restProps, {
    className: classNames(baseClassName, className)
  }), children);
};

export default List;
//# sourceMappingURL=List.js.map