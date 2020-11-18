import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import { HasRootRef } from '../../types';
export interface HeaderProps extends HTMLAttributes<HTMLDivElement>, HasRootRef<HTMLDivElement> {
    mode?: 'primary' | 'secondary';
    subtitle?: ReactNode;
    aside?: ReactNode;
    indicator?: ReactNode;
}
declare const Header: FunctionComponent<HeaderProps>;
export default Header;
