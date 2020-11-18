import { FunctionComponent, ReactNode, ElementType, ButtonHTMLAttributes } from 'react';
import { HasAlign, HasRootRef } from '../../types';
export interface VKUIButtonProps extends HasAlign {
    mode?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'commerce' | 'destructive' | 'overlay_primary' | 'overlay_secondary' | 'overlay_outline';
    size?: 'm' | 'l' | 'xl';
    stretched?: boolean;
    before?: ReactNode;
    after?: ReactNode;
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLElement>, HasRootRef<HTMLElement>, VKUIButtonProps {
    Component?: ElementType;
    stopPropagation?: boolean;
    href?: string;
    target?: string;
}
declare const Button: FunctionComponent<ButtonProps>;
export default Button;
