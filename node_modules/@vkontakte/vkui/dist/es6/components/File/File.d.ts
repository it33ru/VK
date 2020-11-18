import { FunctionComponent, InputHTMLAttributes } from 'react';
import { VKUIButtonProps } from '../Button/Button';
import { HasRef, HasRootRef } from '../../types';
export interface FileProps extends Omit<VKUIButtonProps, 'size'>, InputHTMLAttributes<HTMLInputElement>, HasRef<HTMLInputElement>, HasRootRef<HTMLElement> {
    controlSize?: VKUIButtonProps['size'];
}
declare const File: FunctionComponent<FileProps>;
export default File;
