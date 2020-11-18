import { Component, ReactNode, FocusEventHandler, InputHTMLAttributes, ChangeEventHandler } from 'react';
import { HasPlatform, HasRef } from '../../types';
import { TouchEventHandler } from '../Touch/Touch';
import { VKUITouchEvent } from '../../lib/touch';
export declare type InputRef = (element: HTMLInputElement) => void;
export interface SearchProps extends InputHTMLAttributes<HTMLInputElement>, HasRef<HTMLInputElement>, HasPlatform {
    /**
     * iOS only. Текст кнопки "отмена", которая чистит текстовое поле и убирает фокус.
     */
    after?: ReactNode;
    icon?: ReactNode;
    onIconClick?: (e: VKUITouchEvent) => void;
    defaultValue?: string;
}
export interface SearchState {
    value?: string;
    focused?: boolean;
}
declare class Search extends Component<SearchProps, SearchState> {
    static defaultProps: SearchProps;
    isControlledOutside: boolean;
    inputEl: HTMLInputElement;
    searchId: string;
    constructor(props: SearchProps);
    get value(): string | number | string[];
    onFocus: FocusEventHandler;
    onBlur: FocusEventHandler;
    onChange: ChangeEventHandler;
    onCancel: VoidFunction;
    onIconClickStart: TouchEventHandler;
    onIconCancelClickStart: TouchEventHandler;
    inputRef: InputRef;
    render(): JSX.Element;
}
declare const _default: typeof Search;
export default _default;
