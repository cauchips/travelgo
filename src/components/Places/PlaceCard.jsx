import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PlaceCard = ({ img, title, location, description, type, id, images, map, }) => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + '...';
  };

  return (
    <Link to={`/places/${id}`} className="block w-full bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
    onClick={() => {
      window.scrollTo(0, 0);
    }}
    state={{ img, title, location, description, type, images, map }}
    >
      <div className="relative overflow-hidden">
        <img className="w-full h-52 object-cover object-center transition duration-300 transform hover:scale-110" src={img} alt={title} />
        <div className="absolute inset-0 bg-black opacity-30 transition duration-300 hover:opacity-0"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
          <p className="text-white text-xl font-semibold tracking-wider uppercase">Explore</p>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        <p className="text-lg text-gray-600 mt-2">{location}</p>
        <p className="text-base text-gray-700 mt-2">{truncateText(description, 150)}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="text-sm text-white rounded-full px-3 py-1" style={{ backgroundColor: "#00c3c7", fontSize: "0.75rem", fontWeight: "bold" }}>
            {type}
          </div>
        </div>
      </div>
    </Link>
  );
};

PlaceCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  images: PropTypes.string,
  map: PropTypes.string,
};

export default PlaceCard;
