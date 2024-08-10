import { createSlice } from '@reduxjs/toolkit';

const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    layout: 'vertical', // or 'horizontal'
  },
  reducers: {
    toggleLayout: (state) => {
      state.layout = state.layout === 'vertical' ? 'horizontal' : 'vertical';
    },
  },
});

export const { toggleLayout } = layoutSlice.actions;
export default layoutSlice.reducer;
