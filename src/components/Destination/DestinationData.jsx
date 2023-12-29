import Img1 from "../../assets/destination/sumatra/sumatra.jpg";
import Img10 from "../../assets/destination/sumatra/sumatraisland.jpg"
import Img11 from "../../assets/destination/sumatra/laketoba.jpg"
import Img12 from "../../assets/destination/sumatra/bukitlawang.jpg"
import Img13 from "../../assets/destination/sumatra/wehisland.jpg"

import Img2 from "../../assets/destination/java/java.jpg";
import Img20 from "../../assets/destination/java/javaisland.jpg"
import Img21 from "../../assets/destination/java/diengplateau.jpg"
import Img22 from "../../assets/destination/java/prambanantemple.jpg"
import Img23 from "../../assets/destination/java/mountbromo.jpg"

import Img3 from "../../assets/destination/bali/bali.jpg";
import Img30 from "../../assets/destination/bali/baliisland.jpg"
import Img31 from "../../assets/destination/bali/ubud.jpg"
import Img32 from "../../assets/destination/bali/tanahlot.jpg"
import Img33 from "../../assets/destination/bali/kutabeach.jpg"

import Img4 from "../../assets/destination/kalimantan/kalimantan.jpg";
import Img40 from "../../assets/destination/kalimantan/kalimantanisland.jpg"
import Img41 from "../../assets/destination/kalimantan/tanjungputing.jpg"
import Img42 from "../../assets/destination/kalimantan/derawan.jpg"
import Img43 from "../../assets/destination/kalimantan/kapuas.jpg"

import Img5 from "../../assets/destination/sulawesi/sulawesi.jpg";
import Img50 from "../../assets/destination/sulawesi/sulawesiisland.jpg"
import Img51 from "../../assets/destination/sulawesi/tanatoraja.jpg"
import Img52 from "../../assets/destination/sulawesi/lorelindu.jpg"
import Img53 from "../../assets/destination/sulawesi/togianislands.jpg"

import Img6 from "../../assets/destination/papua/papua.jpg";
import Img60 from "../../assets/destination/papua/papuaisland.jpg"
import Img61 from "../../assets/destination/papua/rajaampat.jpg"
import Img62 from "../../assets/destination/papua/baliemvalley.jpg"
import Img63 from "../../assets/destination/papua/asmat.jpg"


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
        desc: "Lake Toba, located in North Sumatra, is the largest volcanic lake in the world, formed within a mesmerizing caldera. Surrounded by lush green landscapes and traditional Batak villages, the lake offers a serene escape. Visitors can indulge in boat rides, exploring the enchanting island of Samosir at the heart of the lake. Immerse yourself in the unique culture of the Batak people, discover historical sites, and savor the breathtaking views that Lake Toba has to offer.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510166.6758153555!2d98.5062843527481!3d2.6107178399116284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031de07a843b6ad%3A0xc018edffa69c0d05!2sLake%20Toba!5e0!3m2!1sen!2sid!4v1703817513177!5m2!1sen!2sid"
      },
      {
        img: Img12,
        title: "Bukit Lawang",
        location: "North Sumatra",
        desc: "Bukit Lawang, nestled in the heart of North Sumatra within the Gunung Leuser National Park, is a renowned ecotourism destination. The main draw is the opportunity to witness orangutans in their natural habitat through expert-guided treks in the verdant rainforest. The Bohorok River meanders through the region, providing not only a scenic backdrop but also opportunities for adventurous jungle exploration. Bukit Lawang is a haven for eco-friendly activities, offering a unique blend of wildlife encounters and lush, untouched nature.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31857.079559622096!2d98.13946304999999!3d3.556369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3030c81b5f04b997%3A0xd57e31753995db8f!2sBukit%20Lawang%2C%20Bohorok%2C%20Langkat%20Regency%2C%20North%20Sumatra!5e0!3m2!1sen!2sid!4v1703821363607!5m2!1sen!2sid"
      },
      {
        img: Img13,
        title: "Weh Island",
        location: "Aceh Province",
        desc: "Weh Island, also known as Pulau Weh, is a tropical paradise situated off the northern tip of Sumatra in Aceh Province. With its pristine white-sand beaches and crystal-clear waters, Weh Island beckons to travelers seeking a tranquil escape. The island is a haven for diving and snorkeling enthusiasts, boasting vibrant coral reefs and a diverse array of marine life. Embrace the laid-back atmosphere, explore charming coastal villages, and be captivated by the stunning underwater landscapes that make Weh Island an idyllic destination for relaxation and water-based activities.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127011.65654731351!2d95.29624195!3d5.839514500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3041cf2458af5be9%3A0x20892775b3c98e17!2sWe%20Island!5e0!3m2!1sen!2sid!4v1703821420583!5m2!1sen!2sid"
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
        title: "Dieng Plateau",
        location: "Central Java",
        desc: "Escape to the breathtaking landscapes of Dieng Plateau in Central Java. Nestled high in the mountains, this volcanic plateau offers a unique and serene escape. Explore the ancient Arjuna Temple complex, dating back to the 8th century, with its well-preserved stone structures and captivating views. Marvel at the colorful Telaga Warna (Color-changing Lake) and Sikidang Crater, where you can witness the otherworldly sight of volcanic activity. Dieng Plateau is not only a natural wonder but also a cultural treasure, hosting traditional ceremonies and performances. Discover the charm of this highland destination, where misty mountains and cultural heritage converge to create an unforgettable experience.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31665.817800291028!2d109.8819290395508!3d-7.2149011999999955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700ce34714804d%3A0xf71779c2d538ad1!2sDieng%20Plateau!5e0!3m2!1sen!2sid!4v1703821480774!5m2!1sen!2sid"
      },    
      {
        img: Img22,
        title: "Prambanan Temple",
        location: "Central Java",
        desc: "Prambanan Temple is a masterpiece of Hindu architecture situated in Central Java. This UNESCO World Heritage site dates back to the 9th century and is dedicated to the Trimurti, the three main Hindu deities: Brahma, Vishnu, and Shiva. Explore the intricately carved reliefs and towering spires that characterize this ancient temple complex. Attend cultural performances against the backdrop of Prambanan, adding a vibrant touch to your visit. Immerse yourself in the history and mythology of Prambanan as you wander through its captivating grounds.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.3559336818375!2d110.49146739999999!3d-7.752020600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5ae3dbd859d1%3A0x19e7a03b25955a2d!2sPrambanan%20Temple!5e0!3m2!1sen!2sid!4v1703821649009!5m2!1sen!2sid"
      },
      {
        img: Img23,
        title: "Mount Bromo",
        location: "East Java",
        desc: "Mount Bromo, located in East Java, is an active volcano and a surreal landscape that attracts adventurers and nature lovers alike. Witness the spectacular sunrise over the Bromo-Tengger-Semeru National Park as you stand on the crater rim. The otherworldly scenery, with its vast caldera, smoking crater, and surrounding desert-like plains, offers a unique and unforgettable experience. Embark on a jeep tour to explore the lunar-like landscapes and capture breathtaking views of Mount Bromo against the changing hues of the sky. Brace yourself for an adventure in this mesmerizing volcanic region.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31612.36008489832!2d112.95301219999999!3d-7.94249345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd637aaab794a41%3A0xada40d36ecd2a5dd!2sMt%20Bromo!5e0!3m2!1sen!2sid!4v1703821681442!5m2!1sen!2sid"
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
        desc: "Ubud, located in the Gianyar Regency, is the cultural heart of Bali. Surrounded by lush rice terraces and dense forests, Ubud is a haven for art enthusiasts and nature lovers. Explore the vibrant markets, traditional Balinese temples, and the iconic Monkey Forest. Immerse yourself in the local arts scene by visiting galleries and attending traditional dance performances. Ubud offers a serene retreat with its yoga studios and wellness resorts, making it a perfect destination for relaxation and cultural exploration.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63136.53805966453!2d115.26603944999998!3d-8.49611115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23d739f22c9c3%3A0x54a38afd6b773d1c!2sUbud%2C%20Gianyar%20Regency%2C%20Bali!5e0!3m2!1sen!2sid!4v1703821766310!5m2!1sen!2sid"
      },
      {
        img: Img32,
        title: "Tanah Lot",
        location: "Tabanan Regency",
        desc: "Tanah Lot is an iconic sea temple located in the Tabanan Regency. Perched on a rock formation just off the shore, the temple is surrounded by the Indian Ocean and offers breathtaking sunset views. Explore the temple grounds, which are adorned with Balinese architecture and mythology. Witness the cultural performances that often take place against the stunning backdrop of Tanah Lot. The temple is not only a religious site but also a picturesque spot that encapsulates the beauty and spirituality of Bali.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.7371628928126!2d115.08461831744384!3d-8.621213000000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd237824f71deab%3A0xcaabe270f7e34d69!2sTanah%20Lot!5e0!3m2!1sen!2sid!4v1703821822996!5m2!1sen!2sid"
      },
      {
        img: Img33,
        title: "Kuta Beach",
        location: "Badung Regency",
        desc: "Kuta Beach, situated in the Badung Regency, is renowned for its golden sands and lively atmosphere. This popular beach destination is a hub for water sports, vibrant nightlife, and shopping. Catch the perfect wave or learn to surf with the numerous surf schools along the coast. Enjoy the vibrant beach clubs, restaurants, and markets that line the bustling streets of Kuta. Whether you seek relaxation or excitement, Kuta Beach offers a dynamic blend of leisure and entertainment in the heart of Bali.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15774.883539354174!2d115.16803455000002!3d-8.718032549999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd246bc2ab70d43%3A0x82feaae12f4ab48e!2sKuta%20Beach!5e0!3m2!1sen!2sid!4v1703821856759!5m2!1sen!2sid"
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
        desc: "Tanjung Puting National Park, located in Central Kalimantan, is a haven for wildlife enthusiasts and conservationists. Home to the endangered orangutans, this national park offers the opportunity to witness these incredible creatures in their natural habitat. Cruise along the rivers that wind through the rainforest and observe diverse wildlife, including proboscis monkeys and exotic bird species. Immerse yourself in the lush surroundings and contribute to the conservation efforts that make Tanjung Puting a unique and rewarding destination.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1019927.309347607!2d111.94258169999999!3d-3.0703423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e09a5fcc9bb3c5d%3A0xddb88e3644e9ea03!2sTaman%20Nasional%20Tanjung%20Puting!5e0!3m2!1sen!2sid!4v1703821958092!5m2!1sen!2sid"
      },
      {
        img: Img42,
        title: "Derawan Islands",
        location: "East Kalimantan",
        desc: "The Derawan Islands, situated in East Kalimantan, are a tropical paradise with pristine beaches and vibrant underwater ecosystems. Explore the crystal-clear waters surrounding the islands, known for their rich coral reefs and diverse marine life. Snorkel or dive to discover an underwater world teeming with colorful fish, turtles, and coral formations. Derawan offers a tranquil escape, with white sandy beaches and a laid-back atmosphere, making it an ideal destination for both relaxation and water-based activities.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510311.9147701712!2d118.05286799999998!3d2.22442595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32128397e4edf7c5%3A0x8f40d5175cb6f86b!2sPulau%20Derawan%2C%20Berau%20Regency%2C%20East%20Kalimantan!5e0!3m2!1sen!2sid!4v1703822002734!5m2!1sen!2sid"
      },
      {
        img: Img43,
        title: "Kapuas River",
        location: "West Kalimantan",
        desc: "The Kapuas River, flowing through West Kalimantan, is one of the longest rivers in Indonesia. Embark on a river cruise to experience the beauty of the lush rainforest along the riverbanks. Encounter indigenous Dayak communities and learn about their traditional way of life. The Kapuas River provides a unique opportunity to explore remote and untouched landscapes, offering a glimpse into the natural and cultural diversity of Kalimantan. Cruise through the heart of Borneo and witness the fascinating sights along the Kapuas River.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4085546.6222800114!2d111.19006170000002!3d0.20960069999999328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d384699a3d483%3A0xdc04394f9c672a16!2sKapuas%20River!5e0!3m2!1sen!2sid!4v1703822039054!5m2!1sen!2sid"
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
        desc: "Tana Toraja, located in South Sulawesi, is renowned for its distinctive culture and stunning landscapes. Explore traditional Torajan villages with their unique boat-shaped houses and intricate wood carvings. Attend elaborate funeral ceremonies that showcase the rich cultural heritage of the Torajan people. Surrounded by lush green hills and picturesque rice terraces, Tana Toraja offers a captivating blend of cultural immersion and natural beauty, making it a must-visit destination for those seeking a unique and enriching experience.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d509970.057253915!2d119.70713199999999!3d-3.056902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d9395b1758f3585%3A0x3030bfbcaf77090!2sTana%20Toraja%20Regency%2C%20South%20Sulawesi!5e0!3m2!1sen!2sid!4v1703822142046!5m2!1sen!2sid"
      },
      {
        img: Img52,
        title: "Lore Lindu National Park",
        location: "Central Sulawesi",
        desc: "Discover the natural wonders of Central Sulawesi at Lore Lindu National Park, a haven for biodiversity and pristine landscapes. This national park is home to diverse ecosystems, including tropical rainforests, lakes, and meadows. Trek through lush trails to encounter unique wildlife such as the endangered anoa, tarsius primates, and various bird species. Explore the mysterious Bada Valley with its ancient megalithic statues and stone carvings dating back centuries. Immerse yourself in the tranquility of Danau Tambing, a serene lake surrounded by lush greenery. Lore Lindu National Park offers a perfect blend of nature and cultural heritage, making it an ideal destination for eco-adventurers and those seeking off-the-beaten-path experiences.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.49638976313!2d120.18894209999999!3d-1.4749502999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d8e82e95806f055%3A0xfff2d0319faff404!2sLore%20Lindu%20National%20Park!5e0!3m2!1sen!2sid!4v1703822172600!5m2!1sen!2sid"
      },
      {
        img: Img53,
        title: "Togian Islands",
        location: "Central Sulawesi",
        desc: "The Togian Islands, located in Central Sulawesi, are a remote and pristine archipelago with white-sand beaches and turquoise waters. Explore the diverse marine life while snorkeling or diving in the crystal-clear lagoons. Visit traditional Bajo villages on stilts and learn about the unique culture of the islanders. The Togian Islands provide a tranquil escape from the hustle and bustle, offering a perfect blend of relaxation and adventure in a tropical paradise.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510684.332133018!2d122.01469399999999!3d-0.3994781999999933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d87b7c3b1e84a7b%3A0x9893a63f3bb2ab0!2sTogian%20Islands!5e0!3m2!1sen!2sid!4v1703822202595!5m2!1sen!2sid"
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
        desc: "The Raja Ampat Islands, located in West Papua, are a paradise for divers and nature enthusiasts. Explore the world-renowned coral reefs that house an incredible diversity of marine life, from colorful fish to majestic manta rays. Snorkel in crystal-clear waters and relax on pristine, white-sand beaches. Raja Ampat is not only a haven for underwater exploration but also boasts lush landscapes and a unique island culture, making it a must-visit destination for those seeking both adventure and tranquility.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4084911.1869562194!2d128.26400666249995!3d-1.0320467999999936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d5c3eaaccb47097%3A0x7851bd844c4cdf44!2sRaja%20Ampat%20Regency!5e0!3m2!1sen!2sid!4v1703822252295!5m2!1sen!2sid"
      },
      {
        img: Img62,
        title: "Baliem Valley",
        location: "Papua Province",
        desc: "Baliem Valley, situated in the Papua Province, is a picturesque highland region surrounded by towering mountains. Explore the lush greenery, traditional Dani villages, and terraced fields that characterize this remote valley. Immerse yourself in the indigenous Dani culture by attending local festivals and witnessing traditional ceremonies. Baliem Valley offers trekking opportunities, allowing you to discover hidden waterfalls and experience the natural beauty of Papua's interior, making it an ideal destination for nature lovers and cultural enthusiasts.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63651.99591545008!2d139.00036883998564!3d-4.364213699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6814fe24f4a67a0b%3A0x2f14aa2d51993194!2sBaliem%20River!5e0!3m2!1sen!2sid!4v1703822605297!5m2!1sen!2sid"
      },
      {
        img: Img63,
        title: "Asmat Region",
        location: "Papua Province",
        desc: "The Asmat Region, located in the Papua Province, is home to the Asmat people known for their unique woodcarvings and traditional art. Explore the villages along the riverbanks and witness the intricate craftsmanship of the Asmat carvings, which depict their cultural beliefs and daily life. Engage with the local communities to learn about their customs and traditions. The Asmat Region provides a rare opportunity to experience the rich cultural heritage of Papua and witness the resilience of its indigenous peoples.",
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2033113.3388501783!2d137.27739484118905!3d-5.578181093086775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x683a2289b6bfe001%3A0xa1ca49320f426551!2sAsmat%20Regency%2C%20Papua!5e0!3m2!1sen!2sid!4v1703822648813!5m2!1sen!2sid"
      }
    ]    
  },
];

export default DestinationData;