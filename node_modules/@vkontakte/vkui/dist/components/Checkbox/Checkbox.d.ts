import React, { InputHTMLAttributes } from 'react';
import { HasFormLabels, HasRef, HasRootRef } from '../../types';
export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement>, HasRootRef<HTMLLabelElement>, HasRef<HTMLInputElement>, HasFormLabels {
}
export declare const Checkbox: React.FunctionComponent<CheckboxProps>;
export default Checkbox;
