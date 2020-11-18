import { FunctionComponent, HTMLAttributes } from 'react';
import { HasAlign, HasFormLabels, HasFormStatus, HasRootRef } from '../../types';
export interface SelectMimicryProps extends HTMLAttributes<HTMLElement>, HasAlign, HasFormStatus, HasFormLabels, HasRootRef<HTMLElement> {
    multiline?: boolean;
    disabled?: boolean;
}
declare const SelectMimicry: FunctionComponent<SelectMimicryProps>;
export default SelectMimicry;
