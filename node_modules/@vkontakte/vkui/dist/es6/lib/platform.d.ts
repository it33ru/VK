export declare enum OS {
    ANDROID = "android",
    IOS = "ios"
}
export declare const ANDROID = OS.ANDROID;
export declare const IOS = OS.IOS;
export declare type OSType = OS.ANDROID | OS.IOS;
export declare function platform(useragent?: string): OSType;
/**
 * @deprecated для определения платформы используйте withPlatform или usePlatform
 */
export declare const IS_PLATFORM_IOS: boolean;
/**
 * @deprecated для определения платформы используйте withPlatform или usePlatform
 */
export declare const IS_PLATFORM_ANDROID: boolean;
