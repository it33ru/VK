import { Context } from 'react';
/**
 * Контекст для компонентов, использующих Touch в качестве корневой обёртки,
 * и для которых важно не предотвращать вспылие тач-событий от дочерних компонентов
 */
declare const TouchRootContext: Context<boolean>;
export default TouchRootContext;
