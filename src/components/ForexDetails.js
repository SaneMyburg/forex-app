import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { IoIosArrowBack } from 'react-icons/io';
import { FiSettings } from 'react-icons/fi';
import '../styles/details.css';

const ForexDetails = () => {
  const { selectedPair } = useSelector((state) => state.currencies);

  if (selectedPair.length === 0) {
    return null;
  }

  return (
    <div className="details-container">
      <div className="details-top">
        <Link to="/">
          <IoIosArrowBack />
        </Link>
        <p>{selectedPair[0].ticker}</p>
        <div className="extra-icons">
          <FaMicrophone />
          <FiSettings />
        </div>
      </div>
      <div className="details-p">
        <h1>
          {selectedPair[0].ticker}
        </h1>
      </div>
      <div className="details-para">
        <p>FOREX PAIR DETAILS</p>
      </div>
      <div className="details-div">
        <div className="details-div-child">
          <p className="first-p">Open</p>
          <p className="second-p">{selectedPair[0].open}</p>
        </div>
        <div className="details-div-child">
          <p className="first-p">Bid</p>
          <p className="second-p">{selectedPair[0].bid}</p>
        </div>
        <div className="details-div-child">
          <p className="first-p">Ask</p>
          <p className="second-p">{selectedPair[0].ask}</p>
        </div>
        <div className="details-div-child">
          <p className="first-p">High</p>
          <p className="second-p">{selectedPair[0].high}</p>
        </div>
        <div className="details-div-child">
          <p className="first-p">Low</p>
          <p className="second-p">{selectedPair[0].low}</p>
        </div>
        <div className="details-div-child">
          <p className="first-p">Changes</p>
          <p className="second-p">{selectedPair[0].changes.toFixed(3)}</p>
        </div>
      </div>
    </div>
  );
};

export default ForexDetails;
