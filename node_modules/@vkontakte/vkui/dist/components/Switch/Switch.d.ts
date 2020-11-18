import { FunctionComponent, InputHTMLAttributes } from 'react';
import { HasRef, HasRootRef } from '../../types';
export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement>, HasRootRef<HTMLLabelElement>, HasRef<HTMLInputElement> {
}
declare const Switch: FunctionComponent<SwitchProps>;
export default Switch;
