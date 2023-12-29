import PropTypes from "prop-types";
import DestinationContent from "./DestinationContent";
import Img from "../../assets/destination/jakarta.jpg";

const Destination = ({ handleOrderPopup }) => {
    return (
        <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
          {/* Banner besar di atas judul */}
          <section
            className="container mx-auto px-0" // Menghapus padding left dan right
            style={{
              marginInline: 'auto', // Mengatur margin secara horizontal
              maxWidth: '100%',
              width: '100%',
            }}
          ><div className="h-[300px] overflow-hidden">
            <img
              className="mx-auto h-[300px] w-full object-cover transition duration-700 hover:scale-110"
              src={Img}// Ganti dengan URL gambar banner yang ingin Anda gunakan
              alt="Banner Keindahan Indonesia"
              style={{
                display: 'block', // Agar gambar menyesuaikan lebar kontainer
                width: '100%', // Agar gambar mengisi lebar kontainer
                height: 'auto', // Untuk menjaga aspek rasio gambar
                maxWidth: '100vw',
                maxHeight: '100vh',
              }}
            /></div>
          </section>
        <section data-aos="fade-up" className="container mx-auto px-4">
          <div className="max-w-screen-lg mx-auto">
            <h1
              className="text-4xl lg:text-6xl font-bold py-3 pl-0 pr-6 lg:py-4 lg:pl-0 lg:pr-8 mb-8"
              style={{
                marginBottom: '1.5rem',
                marginTop: '2rem',
                whiteSpace: 'pre-line',
                wordBreak: 'break-word',
                // Media queries untuk responsif
                '@media (max-width: 768px)': {
                  fontSize: '4rem',
                },
                '@media (max-width: 480px)': {
                  fontSize: '2rem',
                },
              }}
            >
              Indonesia&apos;s World-renowned Beauty
            </h1>
            <p className="text-lg font-semibold mb-6 pl-0 pr-6 lg:pl-0 lg:pr-8 text-left">
            Indonesia stands as a nation abundant in natural beauty, cultural richness, and culinary delights. From Sabang to Merauke, the country boasts a plethora of captivating tourist destinations that enchant the eyes and warm the heart. The genuine hospitality of the local population, intertwined with the diverse tapestry of traditional cultures, further contributes to Indonesia&apos;s allure. Beyond the warmth of its people, Indonesia&apos;s well-preserved wealth of flora and fauna adds an additional layer of charm. Truly, these unparalleled beauties are uniquely and exclusively found within the borders of Indonesia.
            </p>
            <hr className="my-8 border-gray-300" />
            <DestinationContent handleOrderPopup={handleOrderPopup} />
          </div>
        </section>
      </div>
    );
  };
  
  Destination.propTypes = {
    handleOrderPopup: PropTypes.func.isRequired,
  };
  
  export default Destination;