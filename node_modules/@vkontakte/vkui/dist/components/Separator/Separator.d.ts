import React, { HTMLAttributes } from 'react';
export interface SeparatorProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * С этим свойством компонент не будет иметь отступы слева и справа
     */
    wide?: boolean;
}
declare const _default: React.NamedExoticComponent<SeparatorProps>;
export default _default;
