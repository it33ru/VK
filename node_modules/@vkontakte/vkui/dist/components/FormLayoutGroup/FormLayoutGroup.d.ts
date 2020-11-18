import { FunctionComponent, HTMLAttributes } from 'react';
import { HasFormLabels, HasFormStatus } from '../../types';
export interface FormLayoutGroupProps extends HTMLAttributes<HTMLDivElement>, HasFormStatus, HasFormLabels {
}
declare const FormLayoutGroup: FunctionComponent<FormLayoutGroupProps>;
export default FormLayoutGroup;
