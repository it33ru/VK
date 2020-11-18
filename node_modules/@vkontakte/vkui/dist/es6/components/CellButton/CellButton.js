import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import Tappable from '../Tappable/Tappable';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

var CellButton = function CellButton(_ref) {
  var className = _ref.className,
      align = _ref.align,
      mode = _ref.mode,
      before = _ref.before,
      children = _ref.children,
      stopPropagation = _ref.stopPropagation,
      Component = _ref.Component,
      restProps = _objectWithoutProperties(_ref, ["className", "align", "mode", "before", "children", "stopPropagation", "Component"]);

  var platform = usePlatform();
  return /*#__PURE__*/React.createElement(Tappable, _extends({}, restProps, {
    className: classNames(getClassName('CellButton', platform), className, "CellButton--lvl-".concat(mode), "CellButton--aln-".concat(align)),
    Component: restProps.href ? 'a' : Component
  }), /*#__PURE__*/React.createElement("div", {
    className: "CellButton__in"
  }, before && /*#__PURE__*/React.createElement("div", {
    className: "CellButton__before"
  }, before), children && /*#__PURE__*/React.createElement("div", {
    className: "CellButton__content"
  }, children)));
};

CellButton.defaultProps = {
  mode: 'primary',
  Component: 'button',
  align: 'left',
  stopPropagation: true
};
export default CellButton;
//# sourceMappingURL=CellButton.js.map