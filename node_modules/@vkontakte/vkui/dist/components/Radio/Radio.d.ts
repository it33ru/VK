import { FunctionComponent, InputHTMLAttributes, ReactNode } from 'react';
import { HasFormLabels, HasRef, HasRootRef } from '../../types';
export interface RadioProps extends InputHTMLAttributes<HTMLInputElement>, HasRef<HTMLInputElement>, HasRootRef<HTMLLabelElement>, HasFormLabels {
    description?: ReactNode;
}
declare const Radio: FunctionComponent<RadioProps>;
export default Radio;
