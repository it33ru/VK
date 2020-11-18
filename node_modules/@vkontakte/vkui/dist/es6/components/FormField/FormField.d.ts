import React, { ElementType, HTMLAttributes } from 'react';
import { HasFormLabels, HasFormStatus, HasRootRef } from '../../types';
export interface FormFieldProps extends HTMLAttributes<HTMLElement>, HasRootRef<HTMLElement>, HasFormStatus, HasFormLabels {
    Component?: ElementType;
}
declare const FormField: React.FunctionComponent<FormFieldProps>;
export default FormField;
