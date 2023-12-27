// DestinationDetails.jsx
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const DestinationDetails = ({ destinations }) => {
  const { title } = useParams(); // Ambil parameter title dari URL

  const destination = destinations.find(
    (destination) => destination.title === title
  ); // Cari destinasi yang sesuai dengan judul dari parameter URL

  if (!destination) {
    return <div>Destinasi tidak ditemukan</div>; // Jika destinasi tidak ditemukan, tampilkan pesan ini
  }

  const { img, location, description } = destination;

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-screen-lg mx-auto">
        <img src={img} alt={title} className="w-full h-96 object-cover mb-6" />
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg font-semibold mb-4">{location}</p>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};
DestinationDetails.propTypes = {
  destinations: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DestinationDetails;