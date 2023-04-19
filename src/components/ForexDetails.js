import { useSelector } from 'react-redux';

const ForexDetails = () => {
  const { selectedPair } = useSelector((state) => state.currencies);

  return (
    <div>
      <h1>
        {selectedPair[0].ticker}
      </h1>
      <div>
        Open:
        {selectedPair[0].open}
      </div>
      <div>
        High:
        {selectedPair[0].high}
      </div>
      <div>
        Low:
        {selectedPair[0].low}
      </div>
    </div>
  );
};

export default ForexDetails;
