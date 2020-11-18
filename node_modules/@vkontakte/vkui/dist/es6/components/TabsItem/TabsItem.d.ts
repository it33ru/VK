import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
export interface TabsItemProps extends HTMLAttributes<HTMLElement> {
    after?: ReactNode;
    selected?: boolean;
}
declare const TabsItem: FunctionComponent<TabsItemProps>;
export default TabsItem;
