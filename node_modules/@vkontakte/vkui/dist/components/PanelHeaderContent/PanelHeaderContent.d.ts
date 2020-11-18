import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
interface PanelHeaderContentProps extends HTMLAttributes<HTMLDivElement> {
    aside: ReactNode;
    before: ReactNode;
    status: ReactNode;
}
declare const PanelHeaderContent: FunctionComponent<PanelHeaderContentProps>;
export default PanelHeaderContent;
