import { Tab } from '@/app/features';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface TabsState {
  tabs: Tab[];
}

const initialState: TabsState = {
  tabs: [{ name: 'page.tsx', path: '/' }]
};

export const tabsSlice = createSlice({
  name: 'tabs',
  initialState,
  reducers: {
    addTab: (state, action: PayloadAction<Tab>) => {
      if (!state.tabs.some(tab => tab.path === action.payload.path)) {
        state.tabs.push(action.payload);
      }
    },
    removeTab: (state, action: PayloadAction<string>) => {
      state.tabs = state.tabs.filter(tab => tab.path !== action.payload);
    }
  }
});

export const { addTab, removeTab } = tabsSlice.actions;
export default tabsSlice.reducer; 