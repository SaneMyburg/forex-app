import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';

const ForexDetails = () => {
  const { selectedPair } = useSelector((state) => state.currencies);

  if (selectedPair.length === 0) {
    return null;
  }

  return (
    <div>
      <div>
        <Link to="/">
          <IoIosArrowBack />
        </Link>
        <p>{selectedPair[0].ticker}</p>
        <FaMicrophone />
        <FiSettings />
      </div>
      <h1>
        {selectedPair[0].ticker}
      </h1>
      <div>
        Open:
        {selectedPair[0].open}
      </div>
      <div>
        Bid:
        {selectedPair[0].bid}
      </div>
      <div>
        Ask:
        {selectedPair[0].ask}
      </div>
      <div>
        High:
        {selectedPair[0].high}
      </div>
      <div>
        Low:
        {selectedPair[0].low}
      </div>
      <div>
        Changes:
        {selectedPair[0].changes.toFixed(3)}
      </div>
    </div>
  );
};

export default ForexDetails;
