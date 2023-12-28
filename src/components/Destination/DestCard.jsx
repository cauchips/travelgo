import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DestCard = ({ img, title, location, description, header }) => {
  return (
    <Link to={`/destination/${title}`} 
    state={{ img, title, location, description, header }}
    className="relative group">
      <div className="overflow-hidden rounded-lg shadow-md relative group">
        <img
          src={img}
          alt={title}
          className="w-full h-96 object-cover transition duration-300 transform-gpu group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-300 group-hover:opacity-20"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
          <h2 className="text-3xl font-bold mb-2 text-white">{title}</h2>
          <p className="text-sm text-white mb-3">{description}</p>
        </div>
      </div>
    </Link>
  );
};

DestCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
};

export default DestCard;
