import TravelImg from "../../assets/travelbox.png";
import {
  MdFlight,
  MdOutlineLocalHotel,
  MdWifi,
  MdFastfood
} from "react-icons/md";

const Banner = () => {
  return (
    <div className="min-h-[550px] bg-gray-100">
      <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div data-aos="flip-up">
              <img
                src={TravelImg}
                alt="Travel box"
                className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover transform transition duration-300 hover:scale-105 hover:rotate-3"
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0 lg:px-16">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold text-center sm:text-left"
              >
                Explore the Wonders of Indonesia
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm text-gray-500 tracking-wide leading-8 transition duration-300 hover:text-violet-500 text-center sm:text-left"
              >
                Discover the breathtaking landscapes and vibrant culture of Indonesia. Plan your next adventure to explore majestic temples, stunning beaches, and lush green forests in this beautiful archipelago.
                <br />
                {/* You can add more information about Indonesia here */}
              </p>
              <div data-aos="zoom-in" className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 transition duration-300 transform hover:scale-110 hover:bg-violet-100 dark:hover:bg-violet-400 hover:text-violet-600 justify-center sm:justify-start">
                    <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                    <p>Exploration Flights</p>
                  </div>
                  <div className="flex items-center gap-4 transition duration-300 transform hover:scale-110 hover:bg-orange-100 dark:hover:bg-orange-400 hover:text-orange-600 justify-center sm:justify-start">
                    <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                    <p>Authentic Stays</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 transition duration-300 transform hover:scale-110 hover:bg-green-100 dark:hover:bg-green-400 hover:text-green-600 justify-center sm:justify-start">
                    <MdWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                    <p>Connectivity Services</p>
                  </div>
                  <div className="flex items-center gap-4 transition duration-300 transform hover:scale-110 hover:bg-yellow-100 dark:hover:bg-yellow-400 hover:text-yellow-600 justify-center sm:justify-start">
                    <MdFastfood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                    <p>Culinary Delights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
