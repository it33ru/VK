import { HTMLAttributes, ReactNode, Component } from 'react';
import { HasChildren, HasPlatform } from '../../types';
export interface EpicProps extends HTMLAttributes<HTMLDivElement>, HasChildren, HasPlatform {
    tabbar: ReactNode;
    activeStory: string;
}
export interface EpicContext {
    hasTabbar: boolean;
}
declare class Epic extends Component<EpicProps> {
    getChildContext(): EpicContext;
    static childContextTypes: {};
    render(): JSX.Element;
}
declare const _default: typeof Epic;
export default _default;
