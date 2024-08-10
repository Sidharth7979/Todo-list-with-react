// store.js
import { configureStore } from '@reduxjs/toolkit';
import dateRangeReducer from '../slices/slice'; // Ensure this path is correct
import layoutReducer from '../slices/layoutSlice';
const store = configureStore({
  reducer: {
    dateRange: dateRangeReducer,
    layout: layoutReducer,
  },
});

export default store;
