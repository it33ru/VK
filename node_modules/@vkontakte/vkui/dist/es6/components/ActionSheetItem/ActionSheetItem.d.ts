import React, { HTMLAttributes } from 'react';
export interface ActionSheetItemProps extends HTMLAttributes<HTMLElement> {
    mode?: 'default' | 'destructive' | 'cancel';
    before?: React.ReactNode;
    autoclose?: boolean;
    href?: string;
    target?: string;
    /**
     * @ignore
     */
    isLast?: boolean;
}
declare const ActionSheetItem: React.FunctionComponent<ActionSheetItemProps>;
export default ActionSheetItem;
