// DestinationDetails.jsx
import { useLocation } from "react-router-dom";
import Destination from "../components/Destination/Destination";

const DestinationDetails = (props) => {
  const destination = useLocation(); // Ambil parameter title dari URL
  console.log(props, " props");

  const { img, title, location, description, header, destinations} = destination.state;

  return (
    <div className="pt-20">
      <div className="h-[300px] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="mx-auto h-[300px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container">
        <p className="text-slate-600 text-sm py-3">
          {title}, {location}
        </p>
        <img src={header} className="img-fluid" alt={`${title} Header`} />
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>{description}</p>
      </div>

      {/* Display Destinations within the region */}
      <div className="container mt-8">
        <h2 className="text-xl font-semibold mb-4">Destinations in {title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="mb-8">
              <img
                src={destination.img}
                alt={destination.title}
                className="h-48 w-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{destination.title}</h3>
              <p className="text-sm">{destination.location}</p>
              <p className="text-sm mt-2">{destination.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <Destination />
    </div>
  );
};


export default DestinationDetails;