import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <div className="text-lg leading-relaxed mb-8">
            <p>
              TravelGO adalah website pariwisata yang berkomitmen untuk memudahkan dan menyenangkan perjalanan Anda di Indonesia. Kami menawarkan berbagai informasi dan tips perjalanan, mulai dari destinasi wisata, akomodasi, hingga kuliner.
            </p>
            <p className="mt-4">
              Dengan TravelGO, Anda dapat menemukan informasi yang Anda butuhkan untuk merencanakan perjalanan Anda. Kami juga menawarkan berbagai tips perjalanan yang dapat membantu Anda untuk mendapatkan pengalaman perjalanan yang terbaik.
            </p>
          </div>
          <div className="text-lg leading-relaxed">
            <p>
              Tim TravelGO berpengalaman dan berdedikasi untuk memberikan pelayanan terbaik kepada para pengunjung. Kami selalu berusaha untuk memberikan informasi dan tips perjalanan yang akurat dan bermanfaat.
            </p>
          </div>
        </div>
      </div>
      <Location />
    </>
  );
};

export default About;
