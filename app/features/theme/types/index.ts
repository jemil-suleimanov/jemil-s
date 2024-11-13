export type Theme = 'light' | 'dark' | 'synthwave';

export interface ThemeState {
    value: Theme;
}

export const themes: Theme[] = ['light', 'dark', 'synthwave'];