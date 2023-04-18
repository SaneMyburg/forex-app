import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currencyData: [],
  isLoading: false,
  error: null,
};
const forexSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {

  },
});
export default forexSlice.reducer;
