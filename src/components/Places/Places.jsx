import PropTypes from "prop-types";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/monas.jpg";
import Img2 from "../../assets/places/bunaken.jpg";
import Img3 from "../../assets/places/borobudur.jpg";
import Img4 from "../../assets/places/komodo.jpg";
import Img5 from "../../assets/places/maratua.jpg";
import Img6 from "../../assets/places/ampera.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Monumen Nasional",
    location: "Jakarta Pusat, DKI Jakarta",
    description: "The National Monument, or Monas, is a landmark of Jakarta and symbolizes the struggle for Indonesia's independence. Visitors can climb to the top and enjoy a panoramic view of the city.",
    type: "Landmark",
  },
  {
    img: Img2,
    title: "Taman Laut Bunaken",
    location: "Manado, Sulawesi Utara",
    description:
      "Bunaken Marine Park is famous for its stunning marine biodiversity, attracting divers and snorkelers from around the world. The underwater ecosystem here is rich and diverse.",
    type: "Marine Park",
  },
  {
    img: Img3,
    title: "Candi Borobudur",
    location: "Magelang, Jawa Tengah",
    description:
      "Borobudur Temple is a UNESCO World Heritage Site, known for its magnificent architecture and as one of the world's largest Buddhist temples. It offers a serene and spiritual experience.",
    type: "Historical Site",
  },
  {
    img: Img4,
    title: "Taman Nasional Komodo",
    location: "Pulau Komodo, Nusa Tenggara Timur",
    description: "Komodo National Park is home to the Komodo dragon, the world's largest lizard. It also boasts stunning landscapes and diverse marine life, making it a paradise for nature lovers.",
    type: "National Park",
  },
  {
    img: Img5,
    title: "Pulau Maratua",
    location: "Berau, Kalimantan Timur",
    description:
      "Maratua Island is a hidden gem with pristine beaches, crystal-clear waters, and rich marine biodiversity. It's perfect for a relaxing getaway and exploring the underwater wonders.",
    type: "Island",
  },
  {
    img: Img6,
    title: "Jembatan Ampera",
    location: "Palembang, Sumatera Selatan",
    description:
      "The Ampera Bridge is an iconic landmark in Palembang, connecting Seberang Ulu and Seberang Ilir. It offers a beautiful view of the Musi River and is a symbol of the city's history.",
    type: "Landmark",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places 
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

Places.propTypes = {
  handleOrderPopup: PropTypes.func.isRequired,
};

export default Places;
