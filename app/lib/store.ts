import { configureStore, PayloadAction, createSlice } from '@reduxjs/toolkit'

export type Theme = 'light' | 'dark' | 'synthwave';
export const themes: Theme[] = ['light', 'dark', 'synthwave'];

export type FontFamily = 'sans-serif' | 'serif' | 'monospace';
export const fontFamilies: FontFamily[] = ['sans-serif', 'serif', 'monospace'];

interface ThemeState {
    value: Theme;
}

interface FontFamilyState {
    value: FontFamily;
}

const initialThemeState: ThemeState = { value: 'light' };
const initialFontFamilyState: FontFamilyState = { value: 'sans-serif' };

const themeSlice = createSlice({
    name: 'theme',
    initialState: initialThemeState,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.value = action.payload;
        }
    }
})

const fontFamilySlice = createSlice({
    name: 'fontFamily',
    initialState: initialFontFamilyState,
    reducers: {
        setFontFamily: (state, action: PayloadAction<FontFamily>) => {
            state.value = action.payload;
        }
    }
})

export const { setTheme } = themeSlice.actions;
export const { setFontFamily } = fontFamilySlice.actions;

export const makeStore = () => {
    return configureStore({
        reducer: {
            theme: themeSlice.reducer,
            fontFamily: fontFamilySlice.reducer
        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
