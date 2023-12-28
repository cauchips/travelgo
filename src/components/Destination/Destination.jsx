import PropTypes from "prop-types";
import DestCard from "./DestCard";
import Img1 from "../../assets/destination/sumatera.jpg";
import Img2 from "../../assets/destination/jawa.jpg";
import Img3 from "../../assets/destination/bali.jpg";
import Img4 from "../../assets/destination/kalimantan.jpg";
import Img5 from "../../assets/destination/sulawesi.jpg";
import Img6 from "../../assets/destination/papua.jpg";
import Img7 from "../../assets/destination/jakarta.jpg";
import Img8 from "../../assets/destination/pulausumatera.jpg"

const DestinationData = [
  {
    img: Img1,
    title: "Sumatera",
    location: "Indonesia",
    description: "Explore the beautiful island of Sumatera.",
    header: Img8,
  },
  {
    img: Img2,
    title: "Jawa",
    location: "Indonesia",
    description: "Discover the cultural richness of Jawa.",
  },
  {
    img: Img3,
    title: "Bali",
    location: "Indonesia",
    description: "Experience the paradise in Bali.",
  },
  {
    img: Img4,
    title: "Kalimantan",
    location: "Indonesia",
    description: "Explore the wild wonders of Kalimantan.",
  },
  {
    img: Img5,
    title: "Sulawesi",
    location: "Indonesia",
    description: "Discover the unique culture of Sulawesi.",
  },
  {
    img: Img6,
    title: "Papua",
    location: "Indonesia",
    description: "Explore the unspoiled beauty of Papua.",
  },

];

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
              src={Img7}// Ganti dengan URL gambar banner yang ingin Anda gunakan
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Jelajahi Berbagai Destinasi Indonesia
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {DestinationData.map((item, index) => (
                <DestCard
                  handleOrderPopup={handleOrderPopup}
                  key={index}
                  {...item}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  Destination.propTypes = {
    handleOrderPopup: PropTypes.func.isRequired,
  };
  
  export default Destination;