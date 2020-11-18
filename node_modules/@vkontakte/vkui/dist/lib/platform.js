"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.platform = platform;
exports.IS_PLATFORM_ANDROID = exports.IS_PLATFORM_IOS = exports.IOS = exports.ANDROID = exports.OS = void 0;

var _dom = require("./dom");

var OS;
exports.OS = OS;

(function (OS) {
  OS["ANDROID"] = "android";
  OS["IOS"] = "ios";
})(OS || (exports.OS = OS = {}));

var ANDROID = OS.ANDROID;
exports.ANDROID = ANDROID;
var IOS = OS.IOS;
exports.IOS = IOS;

function platform(useragent) {
  var ua = useragent || _dom.canUseDOM && navigator.userAgent || '';
  return /android/i.test(ua) ? ANDROID : IOS;
}

var osname = platform();
/**
 * @deprecated для определения платформы используйте withPlatform или usePlatform
 */

var IS_PLATFORM_IOS = osname === IOS;
/**
 * @deprecated для определения платформы используйте withPlatform или usePlatform
 */

exports.IS_PLATFORM_IOS = IS_PLATFORM_IOS;
var IS_PLATFORM_ANDROID = osname === ANDROID;
exports.IS_PLATFORM_ANDROID = IS_PLATFORM_ANDROID;
//# sourceMappingURL=platform.js.map