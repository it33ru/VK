import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import classNames from '../../lib/classNames';
import getClassName from '../../helpers/getClassName';
import usePlatform from '../../hooks/usePlatform';

var FormStatus = function FormStatus(_ref) {
  var mode = _ref.mode,
      header = _ref.header,
      children = _ref.children,
      className = _ref.className,
      dangerouslySetInnerHTML = _ref.dangerouslySetInnerHTML,
      restProps = _objectWithoutProperties(_ref, ["mode", "header", "children", "className", "dangerouslySetInnerHTML"]);

  var platform = usePlatform();
  return /*#__PURE__*/React.createElement("div", _extends({}, restProps, {
    className: classNames(getClassName('FormStatus', platform), "FormStatus--".concat(mode), className)
  }), header && /*#__PURE__*/React.createElement("div", {
    className: "FormStatus__header"
  }, header), dangerouslySetInnerHTML && /*#__PURE__*/React.createElement("div", {
    className: "FormStatus__content",
    dangerouslySetInnerHTML: dangerouslySetInnerHTML
  }), children && !dangerouslySetInnerHTML && /*#__PURE__*/React.createElement("div", {
    className: "FormStatus__content"
  }, children));
};

export default FormStatus;
//# sourceMappingURL=FormStatus.js.map