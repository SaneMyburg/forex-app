import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://financialmodelingprep.com/api/v3/fx?apikey=529983cdb4fa3bfdbb36e1ab89f86b69';

export const fetchCurrencies = createAsyncThunk('currencies/fetchCurrencies',
  async () => {
    const response = await axios.get(baseUrl);
    return response.data;
  });

const initialState = {
  currencyData: [],
  selectedPair: [],
  isLoading: false,
  error: null,
};
const forexSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    forexPair: (state, action) => {
      const clickPair = state.currencyData.filter((pair) => action.payload === pair.ticker);
      return { ...state, selectedPair: clickPair };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencies.pending, (state) => ({
      ...state, isLoading: true,
    }))
      .addCase(fetchCurrencies.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        currencyData: action.payload,
      }))
      .addCase(fetchCurrencies.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export const { forexPair } = forexSlice.actions;
export default forexSlice.reducer;
