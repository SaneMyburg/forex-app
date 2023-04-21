import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { BsArrowRightCircle } from 'react-icons/bs';
import { fetchCurrencies, forexPair } from '../redux/ForexSlice';
import '../styles/home.css';

const Home = () => {
  const dispatch = useDispatch();
  const { currencyData, isLoading, error } = useSelector((state) => state.currencies);
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredCurrencies = currencyData.filter((currency) => {
    const search = searchTerm.toLowerCase();
    return currency.ticker.toLowerCase().includes(search);
  });

  return (
    <div className="list-container">
      <div className="recent-container">
        <p className="recent-p">most recent price</p>
        <div className="recent-icons">
          <FaMicrophone />
          <FiSettings />
        </div>
      </div>
      <div className="todays-rate-container">
        <h1>Today&apos;s Rates</h1>
        <p>147 pairs</p>
        <span>{formattedDate}</span>
      </div>
      <div className="opening-prices">
        <p>OPENING PRICES</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <ul className="pairs-container filtered-currencies">
        {filteredCurrencies.map((currency) => (
          <li className="individual-pair" key={currency.ticker}>
            <Link to="/ForexDetails" onClick={() => handleClicked(currency.ticker)}>
              <div className="right-arrow">
                <p>
                  <BsArrowRightCircle />
                </p>
              </div>
              <div className="ticker-name">
                <p>
                  {currency.ticker}
                </p>
              </div>
              <div className="ticker-rate">
                <p>
                  Open:
                  {currency.open}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
