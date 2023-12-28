import PropTypes from "prop-types";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/monas.jpg";
import image1 from "../../assets/places/monas2.jpg";
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
    description:`
    The National Monument, widely known as Monas, is an iconic landmark standing proudly in Jakarta, symbolizing the relentless struggle for Indonesia's independence. This monumental structure is not just an architectural masterpiece but a living testament to the nation's rich history and indomitable spirit.
  
    As you approach Monas, its towering presence commands attention, inviting visitors to explore its significance. The journey to the summit is both a physical ascent and a metaphorical climb through Indonesia's storied past. The panoramic view from the top unveils Jakarta's sprawling cityscape, creating a breathtaking tableau of modernity intertwined with historical resonance.
  
    The ascent is not merely an exploration of height but a deep dive into the struggles and triumphs that define Indonesia's identity. The observation deck offers a unique vantage point, allowing visitors to appreciate the juxtaposition of the city's historical and contemporary landmarks.
  
    Surrounding Monas, meticulously landscaped grounds provide a serene sanctuary, inviting contemplation amidst the hustle and bustle of urban life. The monument is not just a symbol; it's a dynamic narrative etched into every inch, recounting the nation's journey to freedom.
  
    Monas stands as a beacon, a visual chronicle that transcends time, reminding all who visit of Indonesia's enduring spirit. It is a place where the past meets the present, and every step taken echoes with the footsteps of a nation's struggle and ultimate triumph.
  `,
    type: "Landmark",
    id: 1,
    images: image1,
  },
  {
    img: Img2,
    title: "Taman Laut Bunaken",
    location: "Manado, Sulawesi Utara",
    description:
      "Bunaken Marine Park is famous for its stunning marine biodiversity, attracting divers and snorkelers from around the world. The underwater ecosystem here is rich and diverse.",
    type: "Marine Park",
    id: 2,
  },
  {
    img: Img3,
    title: "Candi Borobudur",
    location: "Magelang, Jawa Tengah",
    description:
      "Borobudur Temple is a UNESCO World Heritage Site, known for its magnificent architecture and as one of the world's largest Buddhist temples. It offers a serene and spiritual experience.",
    type: "Historical Site",
    id: 3,
  },
  {
    img: Img4,
    title: "Taman Nasional Komodo",
    location: "Pulau Komodo, Nusa Tenggara Timur",
    description: "Komodo National Park is home to the Komodo dragon, the world's largest lizard. It also boasts stunning landscapes and diverse marine life, making it a paradise for nature lovers.",
    type: "National Park",
    id: 4,
  },
  {
    img: Img5,
    title: "Pulau Maratua",
    location: "Berau, Kalimantan Timur",
    description:
      "Maratua Island is a hidden gem with pristine beaches, crystal-clear waters, and rich marine biodiversity. It's perfect for a relaxing getaway and exploring the underwater wonders.",
    type: "Island",
    id: 5,
  },
  {
    img: Img6,
    title: "Jembatan Ampera",
    location: "Palembang, Sumatera Selatan",
    description:
      "The Ampera Bridge is an iconic landmark in Palembang, connecting Seberang Ulu and Seberang Ilir. It offers a beautiful view of the Musi River and is a symbol of the city's history.",
    type: "Landmark",
    id: 6,
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
