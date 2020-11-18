import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import { HasChildren, HasDangerHTML } from '../../types';
export interface FormStatusProps extends HTMLAttributes<HTMLDivElement>, HasChildren, HasDangerHTML {
    mode?: 'default' | 'error';
    header?: ReactNode;
}
declare const FormStatus: FunctionComponent<FormStatusProps>;
export default FormStatus;
