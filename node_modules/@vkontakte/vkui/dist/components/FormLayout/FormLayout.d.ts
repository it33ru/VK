import { FunctionComponent, HTMLAttributes, ElementType } from 'react';
import { HasChildren, HasRef } from '../../types';
export interface FormLayoutProps extends HTMLAttributes<HTMLElement>, HasRef<HTMLElement>, HasChildren {
    Component?: ElementType;
}
declare const FormLayout: FunctionComponent<FormLayoutProps>;
export default FormLayout;
