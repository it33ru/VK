export interface VKUITouchEvent extends MouseEvent, TouchEvent {
}
export declare type VKUITouchEventHander = (e: VKUITouchEvent) => void;
declare const coordX: (e: VKUITouchEvent) => number;
declare const coordY: (e: VKUITouchEvent) => number;
declare const touchEnabled: boolean;
declare function getSupportedEvents(): string[];
declare function rubber(offset: number, dimension: number, resistanceRate: number, isAndroid: boolean): number;
export { getSupportedEvents, coordX, coordY, touchEnabled, rubber };
