import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BlogCard = ({ image, date, title, description, author }) => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, maxLength) + '...';
  };

  return (
    <Link
      to={`/blogs/${title}`}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      state={{ image, date, title, description, author }}
      className="block rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 hover:translate-x-[-10px] sm:hover:translate-x-0"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt="Blog Cover"
          className="w-full h-64 object-cover transform transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
          <p className="text-white text-center text-lg font-bold">Read more</p>
        </div>
      </div>
      <div className="p-4 bg-white">
        <p className="text-gray-500">{date}</p>
        <h2 className="text-gray-800 font-semibold text-2xl mt-4 mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{truncateText(description, 150)}</p>
        <p className="text-gray-700 font-semibold">By {author}</p>
      </div>
    </Link>
  );
};

BlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BlogCard;
