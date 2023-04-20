import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { BsArrowRightCircle } from 'react-icons/bs';
import { fetchCurrencies, forexPair } from '../redux/ForexSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { currencyData, isLoading, error } = useSelector((state) => state.currencies);

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  const handleClicked = (ticker) => {
    dispatch(forexPair(ticker));
  };

  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  };
  const today = new Date();
  const formattedDate = new Intl.DateTimeFormat('en-US', dateOptions).format(today);

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
    <div className="list-container">
      <div className="recent-container">
        <p>most recent price</p>
        <div className="recent-icons">
          <FaMicrophone />
          <FiSettings />
        </div>
      </div>
      <div>
        <h1>Today&apos;s Rates</h1>
        <span>{formattedDate}</span>
      </div>
      <div className="opening-prices">
        <p>OPENING PRICES</p>
      </div>
      <ul>
        {currencyData && currencyData.map((currency) => (
          <li key={currency.ticker}>
            <Link to="/ForexDetails" onClick={() => handleClicked(currency.ticker)}>
              <div><BsArrowRightCircle /></div>
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
