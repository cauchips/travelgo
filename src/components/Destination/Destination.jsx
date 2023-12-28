import PropTypes from "prop-types";
import DestCard from "./DestCard";
import Img1 from "../../assets/destination/sumatera.jpg";
import Img10 from "../../assets/destination/pulausumatera.jpg"
import Img11 from "../../assets/destination/pulausumatera.jpg"
import Img12 from "../../assets/destination/pulausumatera.jpg"
import Img13 from "../../assets/destination/pulausumatera.jpg"
import Img2 from "../../assets/destination/jawa.jpg";
import Img20 from "../../assets/destination/pulausumatera.jpg"
import Img21 from "../../assets/destination/pulausumatera.jpg"
import Img22 from "../../assets/destination/pulausumatera.jpg"
import Img23 from "../../assets/destination/pulausumatera.jpg"
import Img3 from "../../assets/destination/bali.jpg";
import Img30 from "../../assets/destination/pulausumatera.jpg"
import Img31 from "../../assets/destination/pulausumatera.jpg"
import Img32 from "../../assets/destination/pulausumatera.jpg"
import Img33 from "../../assets/destination/pulausumatera.jpg"
import Img4 from "../../assets/destination/kalimantan.jpg";
import Img40 from "../../assets/destination/pulausumatera.jpg"
import Img41 from "../../assets/destination/pulausumatera.jpg"
import Img42 from "../../assets/destination/pulausumatera.jpg"
import Img43 from "../../assets/destination/pulausumatera.jpg"
import Img5 from "../../assets/destination/sulawesi.jpg";
import Img50 from "../../assets/destination/pulausumatera.jpg"
import Img51 from "../../assets/destination/pulausumatera.jpg"
import Img52 from "../../assets/destination/pulausumatera.jpg"
import Img53 from "../../assets/destination/pulausumatera.jpg"
import Img6 from "../../assets/destination/papua.jpg";
import Img60 from "../../assets/destination/pulausumatera.jpg"
import Img61 from "../../assets/destination/pulausumatera.jpg"
import Img62 from "../../assets/destination/pulausumatera.jpg"
import Img63 from "../../assets/destination/pulausumatera.jpg"
import Img7 from "../../assets/destination/jakarta.jpg";


const DestinationData = [
  {
    img: Img1,
    title: "Sumatra",
    location: "Indonesia",
    description: "Explore the beautiful island of Sumatera.",
    header: Img10,
    destinations: [
      {
        img: Img11,
        title: "Lake Toba",
        location: "North Sumatra",
        desc: "Lake Toba, located in North Sumatra, is the largest volcanic lake in the world, formed within a mesmerizing caldera. Surrounded by lush green landscapes and traditional Batak villages, the lake offers a serene escape. Visitors can indulge in boat rides, exploring the enchanting island of Samosir at the heart of the lake. Immerse yourself in the unique culture of the Batak people, discover historical sites, and savor the breathtaking views that Lake Toba has to offer."
      },
      {
        img: Img12,
        title: "Bukit Lawang",
        location: "North Sumatra",
        desc: "Bukit Lawang, nestled in the heart of North Sumatra within the Gunung Leuser National Park, is a renowned ecotourism destination. The main draw is the opportunity to witness orangutans in their natural habitat through expert-guided treks in the verdant rainforest. The Bohorok River meanders through the region, providing not only a scenic backdrop but also opportunities for adventurous jungle exploration. Bukit Lawang is a haven for eco-friendly activities, offering a unique blend of wildlife encounters and lush, untouched nature."
      },
      {
        img: Img13,
        title: "Weh Island",
        location: "Aceh Province",
        desc: "Weh Island, also known as Pulau Weh, is a tropical paradise situated off the northern tip of Sumatra in Aceh Province. With its pristine white-sand beaches and crystal-clear waters, Weh Island beckons to travelers seeking a tranquil escape. The island is a haven for diving and snorkeling enthusiasts, boasting vibrant coral reefs and a diverse array of marine life. Embrace the laid-back atmosphere, explore charming coastal villages, and be captivated by the stunning underwater landscapes that make Weh Island an idyllic destination for relaxation and water-based activities."
      }
    ]    
  },
  {
    img: Img2,
    title: "Java",
    location: "Indonesia",
    description: "Explore the diverse and culturally rich island of Jawa.",
    header: Img20,
    destinations: [
      {
        img: Img21,
        title: "Borobudur Temple",
        location: "Central Java",
        desc: "Borobudur Temple, located in Central Java, is one of the most iconic Buddhist monuments in the world. This ancient temple, dating back to the 9th century, is a UNESCO World Heritage site and a testament to Indonesia's rich cultural heritage. Marvel at the intricate stone carvings and ascend the terraces for panoramic views of the surrounding landscapes. Experience the spiritual ambiance as you explore the various levels adorned with stupas and statues, making Borobudur a must-visit destination for history and architecture enthusiasts."
      },
      {
        img: Img22,
        title: "Prambanan Temple",
        location: "Central Java",
        desc: "Prambanan Temple is a masterpiece of Hindu architecture situated in Central Java. This UNESCO World Heritage site dates back to the 9th century and is dedicated to the Trimurti, the three main Hindu deities: Brahma, Vishnu, and Shiva. Explore the intricately carved reliefs and towering spires that characterize this ancient temple complex. Attend cultural performances against the backdrop of Prambanan, adding a vibrant touch to your visit. Immerse yourself in the history and mythology of Prambanan as you wander through its captivating grounds."
      },
      {
        img: Img23,
        title: "Mount Bromo",
        location: "East Java",
        desc: "Mount Bromo, located in East Java, is an active volcano and a surreal landscape that attracts adventurers and nature lovers alike. Witness the spectacular sunrise over the Bromo-Tengger-Semeru National Park as you stand on the crater rim. The otherworldly scenery, with its vast caldera, smoking crater, and surrounding desert-like plains, offers a unique and unforgettable experience. Embark on a jeep tour to explore the lunar-like landscapes and capture breathtaking views of Mount Bromo against the changing hues of the sky. Brace yourself for an adventure in this mesmerizing volcanic region."
      }
    ]    
  },
  {
    img: Img3,
    title: "Bali",
    location: "Indonesia",
    description: "Discover the enchanting island of Bali, known for its rich culture, stunning landscapes, and vibrant arts scene.",
    header: Img30,
    destinations: [
      {
        img: Img31,
        title: "Ubud",
        location: "Gianyar Regency",
        desc: "Ubud, located in the Gianyar Regency, is the cultural heart of Bali. Surrounded by lush rice terraces and dense forests, Ubud is a haven for art enthusiasts and nature lovers. Explore the vibrant markets, traditional Balinese temples, and the iconic Monkey Forest. Immerse yourself in the local arts scene by visiting galleries and attending traditional dance performances. Ubud offers a serene retreat with its yoga studios and wellness resorts, making it a perfect destination for relaxation and cultural exploration."
      },
      {
        img: Img32,
        title: "Tanah Lot",
        location: "Tabanan Regency",
        desc: "Tanah Lot is an iconic sea temple located in the Tabanan Regency. Perched on a rock formation just off the shore, the temple is surrounded by the Indian Ocean and offers breathtaking sunset views. Explore the temple grounds, which are adorned with Balinese architecture and mythology. Witness the cultural performances that often take place against the stunning backdrop of Tanah Lot. The temple is not only a religious site but also a picturesque spot that encapsulates the beauty and spirituality of Bali."
      },
      {
        img: Img33,
        title: "Kuta Beach",
        location: "Badung Regency",
        desc: "Kuta Beach, situated in the Badung Regency, is renowned for its golden sands and lively atmosphere. This popular beach destination is a hub for water sports, vibrant nightlife, and shopping. Catch the perfect wave or learn to surf with the numerous surf schools along the coast. Enjoy the vibrant beach clubs, restaurants, and markets that line the bustling streets of Kuta. Whether you seek relaxation or excitement, Kuta Beach offers a dynamic blend of leisure and entertainment in the heart of Bali."
      }
    ]    
  },  
  {
    img: Img4,
    title: "Kalimantan",
    location: "Indonesia",
    description: "Embark on an adventure in the vast and diverse island of Kalimantan, where dense rainforests, exotic wildlife, and indigenous cultures await.",
    header: Img40,
    destinations: [
      {
        img: Img41,
        title: "Tanjung Puting National Park",
        location: "Central Kalimantan",
        desc: "Tanjung Puting National Park, located in Central Kalimantan, is a haven for wildlife enthusiasts and conservationists. Home to the endangered orangutans, this national park offers the opportunity to witness these incredible creatures in their natural habitat. Cruise along the rivers that wind through the rainforest and observe diverse wildlife, including proboscis monkeys and exotic bird species. Immerse yourself in the lush surroundings and contribute to the conservation efforts that make Tanjung Puting a unique and rewarding destination."
      },
      {
        img: Img42,
        title: "Derawan Islands",
        location: "East Kalimantan",
        desc: "The Derawan Islands, situated in East Kalimantan, are a tropical paradise with pristine beaches and vibrant underwater ecosystems. Explore the crystal-clear waters surrounding the islands, known for their rich coral reefs and diverse marine life. Snorkel or dive to discover an underwater world teeming with colorful fish, turtles, and coral formations. Derawan offers a tranquil escape, with white sandy beaches and a laid-back atmosphere, making it an ideal destination for both relaxation and water-based activities."
      },
      {
        img: Img43,
        title: "Kapuas River",
        location: "West Kalimantan",
        desc: "The Kapuas River, flowing through West Kalimantan, is one of the longest rivers in Indonesia. Embark on a river cruise to experience the beauty of the lush rainforest along the riverbanks. Encounter indigenous Dayak communities and learn about their traditional way of life. The Kapuas River provides a unique opportunity to explore remote and untouched landscapes, offering a glimpse into the natural and cultural diversity of Kalimantan. Cruise through the heart of Borneo and witness the fascinating sights along the Kapuas River."
      }
    ]    
  },
  {
    img: Img5,
    title: "Sulawesi",
    location: "Indonesia",
    description: "Discover the diverse landscapes and rich cultural heritage of Sulawesi, an island known for its unique shape and vibrant traditions.",
    header: Img50,
    destinations: [
      {
        img: Img51,
        title: "Tana Toraja",
        location: "South Sulawesi",
        desc: "Tana Toraja, located in South Sulawesi, is renowned for its distinctive culture and stunning landscapes. Explore traditional Torajan villages with their unique boat-shaped houses and intricate wood carvings. Attend elaborate funeral ceremonies that showcase the rich cultural heritage of the Torajan people. Surrounded by lush green hills and picturesque rice terraces, Tana Toraja offers a captivating blend of cultural immersion and natural beauty, making it a must-visit destination for those seeking a unique and enriching experience."
      },
      {
        img: Img52,
        title: "Bunaken Marine Park",
        location: "North Sulawesi",
        desc: "Bunaken Marine Park, situated in North Sulawesi, is a paradise for diving enthusiasts and nature lovers. Explore the vibrant coral reefs teeming with a variety of marine life, including colorful fish, sea turtles, and coral gardens. Dive into the crystal-clear waters surrounding Bunaken Island to witness the underwater biodiversity that has made this marine park famous. With its stunning underwater landscapes and diverse ecosystems, Bunaken offers an unforgettable experience for both experienced divers and those new to underwater exploration."
      },
      {
        img: Img53,
        title: "Togian Islands",
        location: "Central Sulawesi",
        desc: "The Togian Islands, located in Central Sulawesi, are a remote and pristine archipelago with white-sand beaches and turquoise waters. Explore the diverse marine life while snorkeling or diving in the crystal-clear lagoons. Visit traditional Bajo villages on stilts and learn about the unique culture of the islanders. The Togian Islands provide a tranquil escape from the hustle and bustle, offering a perfect blend of relaxation and adventure in a tropical paradise."
      }
    ]    
  },
  {
    img: Img6,
    title: "Papua",
    location: "Indonesia",
    description: "Embark on an adventure in the rugged landscapes and vibrant cultures of Papua, a region known for its diverse ecosystems and unique traditions.",
    header: Img60,
    destinations: [
      {
        img: Img61,
        title: "Raja Ampat Islands",
        location: "West Papua",
        desc: "The Raja Ampat Islands, located in West Papua, are a paradise for divers and nature enthusiasts. Explore the world-renowned coral reefs that house an incredible diversity of marine life, from colorful fish to majestic manta rays. Snorkel in crystal-clear waters and relax on pristine, white-sand beaches. Raja Ampat is not only a haven for underwater exploration but also boasts lush landscapes and a unique island culture, making it a must-visit destination for those seeking both adventure and tranquility."
      },
      {
        img: Img62,
        title: "Baliem Valley",
        location: "Papua Province",
        desc: "Baliem Valley, situated in the Papua Province, is a picturesque highland region surrounded by towering mountains. Explore the lush greenery, traditional Dani villages, and terraced fields that characterize this remote valley. Immerse yourself in the indigenous Dani culture by attending local festivals and witnessing traditional ceremonies. Baliem Valley offers trekking opportunities, allowing you to discover hidden waterfalls and experience the natural beauty of Papua's interior, making it an ideal destination for nature lovers and cultural enthusiasts."
      },
      {
        img: Img63,
        title: "Asmat Region",
        location: "Papua Province",
        desc: "The Asmat Region, located in the Papua Province, is home to the Asmat people known for their unique woodcarvings and traditional art. Explore the villages along the riverbanks and witness the intricate craftsmanship of the Asmat carvings, which depict their cultural beliefs and daily life. Engage with the local communities to learn about their customs and traditions. The Asmat Region provides a rare opportunity to experience the rich cultural heritage of Papua and witness the resilience of its indigenous peoples."
      }
    ]    
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