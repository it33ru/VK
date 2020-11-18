import React, { HTMLAttributes } from 'react';
export interface PullToRefreshSpinnerProps extends HTMLAttributes<HTMLDivElement> {
    size?: number;
    strokeWidth?: number;
    on?: boolean;
    progress?: number;
}
declare const _default: React.NamedExoticComponent<PullToRefreshSpinnerProps>;
export default _default;
