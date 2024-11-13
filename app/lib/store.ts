import { configureStore, PayloadAction, createSlice } from '@reduxjs/toolkit'
import tabsReducer from './slices/tabs.slice'
import themeSlice from './slices/theme.slice';

export type FontFamily = 'sans-serif' | 'serif' | 'monospace';
export const fontFamilies: FontFamily[] = ['sans-serif', 'serif', 'monospace'];

export type FontSize = 'small' | 'medium' | 'large';
export const fontSizes: FontSize[] = ['small', 'medium', 'large'];

interface FontFamilyState {
    value: FontFamily;
}

interface FontSizeState {
    value: FontSize;
}

const initialFontFamilyState: FontFamilyState = { value: 'sans-serif' };
const initialFontSizeState: FontSizeState = { value: 'medium' };

const fontFamilySlice = createSlice({
    name: 'fontFamily',
    initialState: initialFontFamilyState,
    reducers: {
        setFontFamily: (state, action: PayloadAction<FontFamily>) => {
            state.value = action.payload;
        }
    }
})

const fontSizeSlice = createSlice({
    name: 'fontSize',
    initialState: initialFontSizeState,
    reducers: {
        setFontSize: (state, action: PayloadAction<FontSize>) => {
            state.value = action.payload;
        }
    }
})

export const { setFontFamily } = fontFamilySlice.actions;
export const { setFontSize } = fontSizeSlice.actions;

export const makeStore = () => {
    return configureStore({
        reducer: {
            theme: themeSlice,
            fontFamily: fontFamilySlice.reducer,
            fontSize: fontSizeSlice.reducer,
            tabs: tabsReducer,
        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
