import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Theme, ThemeState } from '@/app/features';

const initialState: ThemeState = {
  value: 'light'
};

export const themes: Theme[] = ['light', 'dark', 'synthwave'];

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.value = action.payload;
    }
  }
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;