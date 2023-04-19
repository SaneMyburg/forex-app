import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCurrencies, forexPair } from '../redux/ForexSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { currencyData, isLoading, error } = useSelector((store) => store.currencies);

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  const handleSelect = (ticker) => {
    dispatch(forexPair(ticker));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }

  return (
    <div>
      <h1>All Forex Currency</h1>
      <ul>
        {currencyData.map((currency) => (
          <li
            key={currency.ticker}
            onClick={() => handleSelect(currency.ticker)}
          >
            <Link to="/ForexDetails">
              <div>{currency.ticker}</div>
              <div>
                Open:
                {currency.open}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
