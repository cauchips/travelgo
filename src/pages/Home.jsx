import { useState, useEffect } from "react";
import Hero from "../components/Hero/Hero";
import NatureVid from "../assets/video/footer.mp4";
import BlogsComp from "../components/Blogs/BlogsComp";
import Places from "../components/Places/Places";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import BannerPic from "../components/BannerPic/BannerPic";
import BannerImg1 from "../assets/indonesia1.jpg";
import BannerImg2 from "../assets/indonesia2.jpg";
import BannerImg3 from "../assets/indonesia3.jpg";
import Banner2 from "../assets/petaindonesia.jpg";
import OrderPopup from "../components/OrderPopup/OrderPopup";

const Home = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const [randomBannerImg, setRandomBannerImg] = useState(BannerImg1);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    const bannerImages = [BannerImg1, BannerImg2, BannerImg3]; // Tambahkan semua gambar banner di sini

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * bannerImages.length);
      setRandomBannerImg(bannerImages[randomIndex]);
    }, 1500); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <>
      <div>
        <div className="h-[700px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <Places handleOrderPopup={handleOrderPopup} />
        <BannerPic img={randomBannerImg} /> 
        <BlogsComp />
        <Banner />
        <BannerPic img={Banner2} />
        <Testimonial />
        <OrderPopup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;
