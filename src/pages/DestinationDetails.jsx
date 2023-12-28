// DestinationDetails.jsx
import { useLocation } from "react-router-dom";
import Destination from "../components/Destination/Destination";

const DestinationDetails = (props) => {
  const destination = useLocation(); // Ambil parameter title dari URL
  console.log(props, " props");

  const { img, title, location, description, header } = destination.state;

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
        <img src={header} className="img-fluid" />
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>{description}</p>
      </div>

      {/* All Blogs Section */}
      <Destination />
    </div>
  );
};


export default DestinationDetails;