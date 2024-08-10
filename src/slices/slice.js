import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

// Initial state for the date range
const initialState = {
  startDate: dayjs().startOf('month'),
  endDate: dayjs().endOf('month'),
};

const dateRangeSlice = createSlice({
  name: 'dateRange',
  initialState,
  reducers: {
    setDateRange: (state, action) => {
      const { startDate, endDate } = action.payload;
      state.startDate = startDate;
      state.endDate = endDate;
    },
  },
});

// Export the actions
export const { setDateRange } = dateRangeSlice.actions;

// Export the reducer to be used in the store
export default dateRangeSlice.reducer;
