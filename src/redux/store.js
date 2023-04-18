import { configureStore } from '@reduxjs/toolkit';
import forexSlice from './ForexSlice';

const store = configureStore({
  reducer: {
    exchange: forexSlice,
  },
});

export default store;
