import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { render, cleanup, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom'; 
import ForexDetails from '../components/ForexDetails';

const mockStore = configureMockStore();
const store = mockStore({
  currencies: {
    selectedPair: [
      {
        ticker: 'USD/JPY',
        bid: '134.060',
        ask: '134.060',
        open: '134.122',
        low: '133.984',
        high: '134.138',
        changes: -0.062,
      },
    ],
    isLoading: false,
    error: null,
  },
});
afterEach(cleanup);

describe('ForexDetails component test', () => {
  it('It renders the selectedpairs', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <ForexDetails />
        </BrowserRouter>
      </Provider>,
    );
    const selected = screen.getAllByText('USD/JPY');
    expect(selected.length).toBeGreaterThan(0);
  });
  it('render selected pairs', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter> 
          <ForexDetails />
        </BrowserRouter>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
