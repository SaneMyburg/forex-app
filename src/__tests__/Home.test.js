import { render, cleanup, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import configureMockStore from 'redux-mock-store';
import Home from '../components/Home';

afterEach(cleanup);
const mockStore = configureMockStore();
const store = mockStore({
  currencies: {
    currencies: [
      {
        ticker: 'EUR/USD',
        open: '1.09720',
      },
      {
        ticker: 'USD/JPY',
        open: '134.122',
      },
    ],
    selectedPair: [],
    isLoading: false,
    error: null,
  },
});

describe('HomePage component test', () => {
  it('It renders', () => {
    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
