import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
export interface InfoRowProps extends HTMLAttributes<HTMLDivElement> {
    header: ReactNode;
}
declare const InfoRow: FunctionComponent<InfoRowProps>;
export default InfoRow;
