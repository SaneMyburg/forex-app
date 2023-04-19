import { configureStore } from '@reduxjs/toolkit';
import forexSlice from './ForexSlice';

const store = configureStore({
  reducer: {
    currencies: forexSlice,
  },
});

export default store;
