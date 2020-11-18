import { canUseDOM } from './dom';
export var OS;

(function (OS) {
  OS["ANDROID"] = "android";
  OS["IOS"] = "ios";
})(OS || (OS = {}));

export var ANDROID = OS.ANDROID;
export var IOS = OS.IOS;
export function platform(useragent) {
  var ua = useragent || canUseDOM && navigator.userAgent || '';
  return /android/i.test(ua) ? ANDROID : IOS;
}
var osname = platform();
/**
 * @deprecated для определения платформы используйте withPlatform или usePlatform
 */

export var IS_PLATFORM_IOS = osname === IOS;
/**
 * @deprecated для определения платформы используйте withPlatform или usePlatform
 */

export var IS_PLATFORM_ANDROID = osname === ANDROID;
//# sourceMappingURL=platform.js.map