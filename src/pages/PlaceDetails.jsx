
import { useLocation } from 'react-router-dom';
import Places from '../components/Places/Places';

const PlaceDetails = (props) => {
  const place = useLocation();
  console.log(props, " props");

  const { img, title, location, description, type, images } = place.state;

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
          {" "}
          {type}: {title}, {location}
        </p>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>{description}</p>
        <div className="text-center mt-5 mb-10">
          <img
            src={images}
            alt={title}
            className="image-fluid mx-auto d-block"
          />
        </div>
      </div>
        
      {/* All Blogs Section */}
      <Places />
    </div>
  );
};

export default PlaceDetails;
