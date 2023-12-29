import { useLocation } from 'react-router-dom';
import Places from '../components/Places/Places';

const PlaceDetails = (props) => {
  const place = useLocation();
  console.log(props, " props");

  const { img, title, location, description, type, map } = place.state;

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Text, takes 2/3 of the container */}
          <div className="col-span-2">
            <p className="text-slate-600 text-sm py-3">
              {type}: {title}, {location}
            </p>
            <h1 className="text-2xl font-semibold mb-5">{title}</h1>
            <p className="text-justify">{description}</p>
            <div className="text-center mt-5 mb-10">
              <img
                src={img}
                alt={title}
                className="image-fluid mx-auto d-block"
              />
            </div>
          </div>

          {/* Column 2 - Map, takes 1/3 of the container */}
          <div className="col-span-1 flex flex-col items-center justify-center mb-10 mt-10">
            <iframe
              src={map}
              width="100%"
              height="100%"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* All Places Section */}
      <Places />
    </div>
  );
};

export default PlaceDetails;
