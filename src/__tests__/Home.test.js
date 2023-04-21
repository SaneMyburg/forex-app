import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from '../components/Home';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Home', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      currencies: {
        currencyData: [
          {
            ticker: 'USD/EUR',
            open: 0.8,
          },
          {
            ticker: 'USD/JPY',
            open: 110.5,
          },
        ],
        isLoading: false,
        error: null,
      },
    });
  });

  it('renders the component', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );

    expect(screen.getByText('most recent price')).toBeInTheDocument();
    expect(screen.getByText("Today's Rates")).toBeInTheDocument();
    expect(screen.getByText('147 pairs')).toBeInTheDocument();
    expect(screen.getByText('OPENING PRICES')).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });

  it('dispatches the forexPair action when a currency pair is clicked', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>,
    );

    screen.getAllByRole('link')[0].click();

    const actions = store.getActions().filter((action) => action.type === 'currencies/forexPair');
    expect(actions).toEqual([{ type: 'currencies/forexPair', payload: 'USD/EUR' }]);
  });
});
