import React, { ButtonHTMLAttributes, ElementType } from 'react';
import { HasAlign } from '../../types';
export interface CellButtonProps extends ButtonHTMLAttributes<HTMLElement>, HasAlign {
    mode?: 'primary' | 'danger';
    before?: React.ReactNode;
    Component?: ElementType;
    stopPropagation?: boolean;
    href?: string;
    target?: string;
}
declare const CellButton: React.FunctionComponent<CellButtonProps>;
export default CellButton;
