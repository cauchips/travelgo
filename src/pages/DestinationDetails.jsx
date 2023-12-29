// DestinationDetails.jsx
import { useLocation } from "react-router-dom";
import DestinationContent from "../components/Destination/DestinationContent";
import PropTypes from "prop-types";

const DestinationDetails = (props, {handleOrderPopup }) => {
  const destination = useLocation();
  console.log(props, " props");

  const { img, title, location, description, header, destinations } = destination.state;
  console.log(location);
  return (
    <div className="pt-20">
      <div className="h-[300px] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="mx-auto h-[300px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container mt-5">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>{description}</p>
        <img src={header} className="img-fluid center" alt={`${title} Header`} />
        
      </div>

      {/* Display Destinations within the region */}
      <div className="container mb-10">
        <h2 className="text-xl font-semibold mb-4">Destinations in {title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="mb-8">
              {/* Row 1: Destination Image */}
              <h2 className="text-lg font-semibold">{destination.title}</h2>
              <p className="text-sm">{destination.location}</p>
              <img
                src={destination.img}
                alt={destination.title}
                className="h-48 w-full object-cover mt-2 mb-3"
              />
              
              {/* Row 2: Description */}
              <div>
                <p className="text-sm text-justify mt-2">{destination.desc}</p>
              </div>
              
              {/* Row 3: Map */}
              <iframe
                className="mt-10"
                src={destination.map}
                width="100%"
                height="250px"  // You can adjust the height as needed
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
      <section data-aos="fade-up" className="container mb-10">
      <hr className="my-8 border-gray-300" />
      <DestinationContent handleOrderPopup={handleOrderPopup} />
      </section>
    </div>
  );
};
DestinationDetails.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};
export default DestinationDetails;