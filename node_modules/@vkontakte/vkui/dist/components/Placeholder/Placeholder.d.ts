import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
export interface PlaceholderProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Иконка
     */
    icon?: ReactNode;
    /**
     * Заголовок плейсхолдера
     */
    header?: ReactNode;
    /**
     * Кнопка действия
     */
    action?: ReactNode;
    /**
     * Растягивает плейсхолдер на весь экран, но в таком случае на экране должен быть только плейсхолдер
     */
    stretched?: boolean;
}
declare const Placeholder: FunctionComponent<PlaceholderProps>;
export default Placeholder;
