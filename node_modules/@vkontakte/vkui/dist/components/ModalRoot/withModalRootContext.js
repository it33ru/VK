"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = withModalRootContext;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _ModalRootContext = _interopRequireDefault(require("./ModalRootContext"));

function withModalRootContext(Component) {
  function WithModalRootContext(props) {
    var _useContext = (0, _react.useContext)(_ModalRootContext.default),
        updateModalHeight = _useContext.updateModalHeight; // @ts-ignore


    return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
      updateModalHeight: updateModalHeight
    }));
  }

  return WithModalRootContext;
}
//# sourceMappingURL=withModalRootContext.js.map