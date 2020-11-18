import { FunctionComponent, InputHTMLAttributes } from 'react';
import { HasAlign, HasFormLabels, HasFormStatus, HasRef, HasRootRef } from '../../types';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement>, HasRef<HTMLInputElement>, HasRootRef<HTMLDivElement>, HasFormStatus, HasFormLabels, HasAlign {
}
declare const Input: FunctionComponent<InputProps>;
export default Input;
