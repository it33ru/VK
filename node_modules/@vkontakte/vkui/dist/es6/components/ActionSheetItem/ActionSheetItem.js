import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import Tappable from '../Tappable/Tappable';
import usePlatform from '../../hooks/usePlatform';

var ActionSheetItem = function ActionSheetItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      autoclose = _ref.autoclose,
      mode = _ref.mode,
      before = _ref.before,
      isLast = _ref.isLast,
      restProps = _objectWithoutProperties(_ref, ["className", "children", "autoclose", "mode", "before", "isLast"]);

  var platform = usePlatform();
  return /*#__PURE__*/React.createElement(Tappable, _extends({}, restProps, {
    className: classNames(getClassName('ActionSheetItem', platform), className, "ActionSheetItem--".concat(mode), _defineProperty({}, 'ActionSheetItem--last', isLast)),
    Component: restProps.href ? 'a' : 'div'
  }), before && /*#__PURE__*/React.createElement("div", {
    className: "ActionSheetItem__before"
  }, before), /*#__PURE__*/React.createElement("div", {
    className: "ActionSheetItem__container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ActionSheetItem__content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ActionSheetItem__children"
  }, children))));
};

ActionSheetItem.defaultProps = {
  mode: 'default'
};
export default ActionSheetItem;
//# sourceMappingURL=ActionSheetItem.js.map