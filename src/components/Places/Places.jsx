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
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666307543373!2d106.82458402380226!3d-6.175408343811965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sNational%20Monument!5e0!3m2!1sen!2sid!4v1703744883815!5m2!1sen!2sid",
  },
  {
    img: Img2,
    title: "Taman Laut Bunaken",
    location: "Manado, Sulawesi Utara",
    description:
      "Home to vibrant coral reefs and a myriad of marine life, Bunaken Marine Park stands as a renowned haven for underwater enthusiasts. Situated in the heart of the Coral Triangle, this Indonesian gem beckons divers and snorkelers with its unparalleled marine biodiversity. The park's crystal-clear waters host a kaleidoscope of coral formations, providing a breathtaking backdrop to the bustling underwater world. From colorful coral gardens to schools of exotic fish and majestic sea turtles, Bunaken offers a mesmerizing spectacle for those exploring its depths. The commitment to conservation and sustainable practices in the area has contributed to the preservation of this aquatic paradise, ensuring that future generations can continue to marvel at the beauty of Bunaken's underwater wonders. Whether you are an experienced diver or a novice snorkeler, Bunaken Marine Park promises an unforgettable journey into the heart of one of the world's most remarkable marine ecosystems.",
    type: "Marine Park",
    id: 2,
    images: image1,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63810.96751437398!2d124.72106598930145!3d1.6392648264206833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32879a2b647bba53%3A0x9a1ab444a22495!2sBunaken%20Marine%20Park!5e0!3m2!1sen!2sid!4v1703746196315!5m2!1sen!2sid"
  },
  {
    img: Img3,
    title: "Candi Borobudur",
    location: "Magelang, Jawa Tengah",
    description:
      "Borobudur Temple, nestled on the lush Indonesian island of Java, holds the prestigious title of a UNESCO World Heritage Site and is celebrated for its awe-inspiring architecture. This colossal structure stands as one of the largest Buddhist temples globally, dating back to the 9th century. The temple's design reflects a remarkable blend of indigenous Indonesian architectural styles with influences from Indian artistry. Comprising nine stacked platforms adorned with intricate reliefs and adorned with over 500 Buddha statues, Borobudur is a testament to the skill and creativity of its builders. Beyond its architectural grandeur, the temple serves as a pilgrimage site and offers a tranquil and spiritual ambiance. Visitors are captivated by the sense of serenity that permeates the air as they explore the labyrinth of stupas and galleries. Ascending the temple provides breathtaking panoramic views of the surrounding landscape, creating an immersive experience that seamlessly combines cultural richness and natural beauty. Borobudur Temple stands as a testament to the profound historical and spiritual legacy of Buddhism in the region, making it a must-visit destination for those seeking a profound connection with both ancient history and timeless spirituality.",
    type: "Historical Site",
    id: 3,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.6973689465976!2d110.19898769678952!3d-7.607873800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8cf009a7d697%3A0xdd34334744dc3cb!2sBorobudur%20Temple!5e0!3m2!1sen!2sid!4v1703746408373!5m2!1sen!2sid"
  },
  {
    img: Img4,
    title: "Taman Nasional Komodo",
    location: "Pulau Komodo, Nusa Tenggara Timur",
    description: "Nestled in the heart of the Indonesian archipelago, Komodo National Park is a natural marvel that beckons adventurers and nature enthusiasts alike. Renowned as the habitat of the Komodo dragon, the park is a living testament to the prehistoric era, with these formidable reptiles reigning as the world's largest lizards. As visitors traverse the rugged terrain of the park, they encounter a surreal landscape of arid hills, lush savannahs, and panoramic coastal views that create a mesmerizing backdrop for the ancient creatures that roam freely. Beyond the terrestrial wonders, Komodo National Park unfolds an underwater paradise, teeming with vibrant coral reefs and an array of marine life. Snorkelers and divers are treated to a kaleidoscope of colors beneath the waves, where schools of tropical fish, graceful manta rays, and elusive sea turtles inhabit the crystal-clear waters. The harmonious coexistence of diverse ecosystems within the park's boundaries establishes it as a haven for biodiversity. Komodo National Park, with its unique combination of terrestrial marvels and marine treasures, stands as a sanctuary for those seeking an immersive encounter with the wonders of the natural world.",
    type: "National Park",
    id: 4,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.707874554362!2d119.48074487383167!3d-8.52771599151499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2db4f8f329ac91b9%3A0xb1a1078870e0d162!2sKomodo%20National%20Park!5e0!3m2!1sen!2sid!4v1703746442552!5m2!1sen!2sid"
  },
  {
    img: Img5,
    title: "Pulau Maratua",
    location: "Berau, Kalimantan Timur",
    description:
      "Maratua Island is a hidden gem with pristine beaches, crystal-clear waters, and rich marine biodiversity. It's perfect for a relaxing getaway and exploring the underwater wonders.",
    type: "Island",
    id: 5,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127576.84396916119!2d118.52478165565219!3d2.2375071882758513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3212ac7490c7038d%3A0x9b789f0629d46dd0!2sMaratua%20Island!5e0!3m2!1sen!2sid!4v1703746561880!5m2!1sen!2sid"
  },
  {
    img: Img6,
    title: "Jembatan Ampera",
    location: "Palembang, Sumatera Selatan",
    description:
      "Tucked away in the azure embrace of the Celebes Sea, Maratua Island emerges as a hidden gem, inviting intrepid travelers to a secluded paradise of unspoiled beauty. The island, with its powder-white beaches and crystalline waters, presents an idyllic escape for those seeking tranquility and natural splendor. As the sun casts its golden glow upon the pristine shores, visitors can revel in the serenity of this untouched haven. However, Maratua's allure extends beyond its terrestrial charm. Beneath the surface of its turquoise waters lies a thriving marine wonderland, with vibrant coral gardens and an abundance of marine life. Snorkelers and divers are treated to a spectacle of colorful reef fish, graceful sea turtles, and intricate coral formations. The island's surrounding waters are part of the Coral Triangle, known for its exceptional biodiversity, making Maratua a perfect destination for those eager to explore the mysteries of the deep. Whether one seeks the quietude of sun-kissed beaches or the adventure beneath the waves, Maratua Island unfolds as a pristine canvas, inviting visitors to immerse themselves in the natural wonders of this secluded tropical oasis.",
    type: "Landmark",
    id: 6,
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1992.1901755456026!2d104.76246908828091!3d-2.991773999246069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b76034b851401%3A0x9b68f8209694f926!2sAmpera%20Bridge%2C%20Palembang%20City%2C%20South%20Sumatra!5e0!3m2!1sen!2sid!4v1703746600224!5m2!1sen!2sid"
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
