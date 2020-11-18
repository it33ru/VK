import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import Spinner from '../Spinner/Spinner';
import PopoutWrapper from '../PopoutWrapper/PopoutWrapper';
import getClassName from '../../helpers/getClassName';
import classNames from '../../lib/classNames';
import usePlatform from '../../hooks/usePlatform';

var ScreenSpinner = function ScreenSpinner(props) {
  var style = props.style,
      className = props.className,
      restProps = _objectWithoutProperties(props, ["style", "className"]);

  var platform = usePlatform();
  return /*#__PURE__*/React.createElement(PopoutWrapper, {
    className: classNames(getClassName('ScreenSpinner', platform), className),
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "ScreenSpinner__container"
  }, /*#__PURE__*/React.createElement(Spinner, _extends({
    size: "large"
  }, restProps))));
};

export default ScreenSpinner;
//# sourceMappingURL=ScreenSpinner.js.map