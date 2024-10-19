import { configureStore, PayloadAction, createSlice } from '@reduxjs/toolkit'

export type Theme = 'light' | 'dark' | 'synthwave';

export const themes: Theme[] = ['light', 'dark', 'synthwave'];

interface ThemeState {
    value: Theme;
}

const initialState: ThemeState = { value: 'light' };

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<Theme>) => {
            state.value = action.payload;
        }
    }
})

export const { setTheme } = themeSlice.actions;

export const makeStore = () => {
    return configureStore({
        reducer: {
            theme: themeSlice.reducer
        }
    })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
