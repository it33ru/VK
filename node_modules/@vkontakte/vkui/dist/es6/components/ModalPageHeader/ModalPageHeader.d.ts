import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import { HasRef } from '../../types';
export interface ModalPageHeaderProps extends HTMLAttributes<HTMLDivElement>, HasRef<HTMLDivElement> {
    /**
     * Иконки, отображаемые слева
     */
    left?: ReactNode;
    /**
     * Иконки, отображаемые справа
     */
    right?: ReactNode;
    noShadow?: boolean;
}
declare const ModalPageHeader: FunctionComponent<ModalPageHeaderProps>;
export default ModalPageHeader;
