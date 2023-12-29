import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Roy Kimochi",
    text: "Indonesia has breathtaking natural beauty, from exotic beaches to stunning mountains. I am deeply impressed by the friendliness of its people and the richness of its culture.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Salma",
    text: "I am fascinated by the diversity of Indonesian culture. From the famous Bali to various other regions, each place has its own charm. Indonesia's tourism truly captivates my heart.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Dika",
    text: "Exploring Indonesia's nature provides an extraordinary experience. From pristine forests to mesmerizing coral reefs, every corner of this country offers unforgettable wonders.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Testimonial
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold">Testimonial</h1>
            <p className="text-base lg:text-lg text-gray-400 my-4 mx-2 lg:mx-0">
              Explore the enchantment of Indonesia through unique experiences from the perspectives of travelers. Enjoy the stunning natural beauty, diverse captivating cultures, and the wealth of tourism destinations waiting to be explored.
            </p>
          </div>
          {/* testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-6 lg:p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                      <img
                        src={img}
                        alt=""
                        className="rounded-full block mx-auto w-20 lg:w-24"
                      />
                      <h1 className="text-2xl lg:text-3xl font-bold">{name}</h1>
                      <p className="text-gray-500 text-lg lg:text-base">{text}</p>
                      <p className="text-black/20 text-6xl lg:text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
