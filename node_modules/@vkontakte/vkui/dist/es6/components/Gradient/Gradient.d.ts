import { FunctionComponent, HTMLAttributes } from 'react';
export interface GradientProps extends HTMLAttributes<HTMLDivElement> {
    mode?: 'tint' | 'white' | 'black';
    to?: 'top' | 'bottom';
}
declare const Gradient: FunctionComponent<GradientProps>;
export default Gradient;
