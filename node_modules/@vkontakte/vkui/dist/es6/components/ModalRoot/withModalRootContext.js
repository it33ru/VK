import _extends from "@babel/runtime/helpers/extends";
import React, { useContext } from 'react';
import ModalRootContext from './ModalRootContext';
export default function withModalRootContext(Component) {
  function WithModalRootContext(props) {
    var _useContext = useContext(ModalRootContext),
        updateModalHeight = _useContext.updateModalHeight; // @ts-ignore


    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      updateModalHeight: updateModalHeight
    }));
  }

  return WithModalRootContext;
}
//# sourceMappingURL=withModalRootContext.js.map