
import { useLocation, useParams } from 'react-router-dom';
import Places from '../components/Places/Places';

const PlaceDetails = () => {
  const location = useLocation();
  const { id } = useParams();

  if (!location.state) {
    return <div>Data tidak tersedia.</div>;
  }

  const { image, date, title, description, author } = location.state;

  return (
    <div className="pt-20">
      <div className="h-[300px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="mx-auto h-[300px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="container">
        <p className="text-slate-600 text-sm py-3">
          {' '}
          written by {author} on {date}
        </p>
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p>{description}</p>
      </div>

      {/* Additional rendering based on the id */}
      <div className="container mt-8">
        <h2>Additional Details for Place ID: {id}</h2>
        {/* You can use 'id' to fetch additional data or perform other actions */}
      </div>

      {/* All Blogs Section */}
      <Places />
    </div>
  );
};

export default PlaceDetails;
