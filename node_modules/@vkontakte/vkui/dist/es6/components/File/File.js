import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import getClassName from '../../helpers/getClassName';
import Button from '../Button/Button';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

var File = function File(props) {
  var children = props.children,
      align = props.align,
      controlSize = props.controlSize,
      mode = props.mode,
      stretched = props.stretched,
      before = props.before,
      className = props.className,
      style = props.style,
      getRef = props.getRef,
      getRootRef = props.getRootRef,
      restProps = _objectWithoutProperties(props, ["children", "align", "controlSize", "mode", "stretched", "before", "className", "style", "getRef", "getRootRef"]);

  var platform = usePlatform();
  return /*#__PURE__*/React.createElement(Button, {
    align: align,
    className: classNames(getClassName('File', platform), className),
    Component: "label",
    stretched: stretched,
    mode: mode,
    size: controlSize,
    before: before,
    style: style,
    getRootRef: getRootRef,
    disabled: restProps.disabled
  }, /*#__PURE__*/React.createElement("input", _extends({}, restProps, {
    className: "File__input",
    type: "file",
    ref: getRef
  })), children);
};

File.defaultProps = {
  children: 'Выберите файл',
  align: 'left'
};
export default File;
//# sourceMappingURL=File.js.map