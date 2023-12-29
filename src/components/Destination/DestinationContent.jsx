import DestCard from './DestCard'; // assuming you have DestCard component
import DestinationData from './DestinationData'; // assuming you have DestinationData
import PropTypes from "prop-types";

const DestinationContent = ({ handleOrderPopup }) => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6">
      Explore Various Destinations in Indonesia
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {DestinationData.map((item, index) => (
          <DestCard
            handleOrderPopup={handleOrderPopup}
            key={index}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};

DestinationContent.propTypes = {
    handleOrderPopup: PropTypes.func.isRequired,
  };

export default DestinationContent;
