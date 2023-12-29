import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <section data-aos="fade-up" className="">
        <div className="container pt-14">
          <div className="py-10">
            <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
              About us
            </h1>
            <div className="text-lg leading-relaxed mb-8">
              <p>
                TravelGO is a tourism website committed to making your travels in Indonesia easy and enjoyable. We provide a range of information and travel tips, covering destinations, accommodations, and culinary experiences.
              </p>
              <p className="mt-4">
                With TravelGO, you can find the information you need to plan your journey. We also offer various travel tips to help you have the best travel experience possible.
              </p>
            </div>
            <div className="text-lg leading-relaxed">
              <p>
                The TravelGO team is experienced and dedicated to providing the best service to visitors. We always strive to offer accurate and useful travel information and tips.
              </p>
            </div>
          </div>
        </div>
        <Location />
      </section>
    </>
  );
};

export default About;
