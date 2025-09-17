import en from './en';
import zh from './zh';
export type Lang = 'en' | 'zh';
export const dictionaries = { en, zh };
export function t(lang: Lang) { return dictionaries[lang]; }
export function validLang(l?: string): l is Lang { return l === 'en' || l === 'zh'; }
export function otherLang(l: Lang): Lang { return l === 'en' ? 'zh' : 'en'; }
