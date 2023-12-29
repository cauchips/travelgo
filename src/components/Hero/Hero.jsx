const Hero = () => {
  return (
    <div className="bg-transparent h-screen flex justify-center items-center">
      <div className="text-center text-white mt-24 font-serif">
        <p
          data-aos="fade-up"
          className="text-6xl font-extrabold mb-2 mt-8"
        >
          Wonderful <span className="text-red-500">Indonesia</span>
        </p>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-4xl font-bold mb-4 mt-4"
        >
          Discover the Beauty of Indonesia.
        </p>
        <button onClick={handleButtonClick} className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-md border border-transparent transition duration-300 ease-in-out transform hover:scale-105 hover:rotate-3 hover:shadow-lg">
          Explore Now
        </button>
      </div>
    </div>
  );
};

const handleButtonClick = () => {
  window.scrollTo({
    top: 660,
    behavior: 'smooth' // This makes the scroll smooth
  });}
export default Hero;
