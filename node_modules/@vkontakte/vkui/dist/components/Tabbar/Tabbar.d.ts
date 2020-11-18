import { FunctionComponent, HTMLAttributes } from 'react';
export interface TabbarProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Флаг для показа/скрытия верхней тени (Android) или границы (iOS)
     */
    shadow?: boolean;
    itemsLayout?: 'vertical' | 'horizontal' | 'auto';
}
declare const Tabbar: FunctionComponent<TabbarProps>;
export default Tabbar;
