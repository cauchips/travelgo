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
          >
            <img
              src={Img}// Ganti dengan URL gambar banner yang ingin Anda gunakan
              alt="Banner Keindahan Indonesia"
              style={{
                display: 'block', // Agar gambar menyesuaikan lebar kontainer
                width: '100%', // Agar gambar mengisi lebar kontainer
                height: 'auto', // Untuk menjaga aspek rasio gambar
                maxWidth: '100vw',
                maxHeight: '100vh',
              }}
            />
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
              Keindahan Indonesia yang Mendunia
            </h1>
            <p className="text-lg font-semibold mb-6 pl-0 pr-6 lg:pl-0 lg:pr-8 text-left">
              Indonesia adalah negara yang kaya akan keindahan alam, budaya, dan kuliner. Dari Sabang hingga Merauke, terdapat berbagai destinasi wisata yang dapat memukau mata dan memanjakan hati. Keramahtamahan penduduk lokal yang berpadu dengan keanekaragaman budaya tradisional menambah daya tarik Indonesia. Tak hanya itu, kekayaan flora dan fauna yang masih terjaga juga menjadi daya tarik tersendiri. Semua keindahan ini dapat ditemukan hanya di Indonesia.
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