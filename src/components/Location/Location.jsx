const Location = () => {
  return (
    <>
      <span id="location"></span>
      <section data-aos="fade-up" className="">
        <div className="container my-4">
          <h1 className="inline-block border-l-8 border-primary/50 py-2 pl-2 mb-4 text-xl font-bold sm:text-3xl">
            Location
          </h1>

          <div className="rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.1926535716193!2d106.83061947316963!3d-6.3691092623000864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed01b68548ad%3A0x89aea3afc2b2e77d!2sUniversitas%20Gunadarma%20Kampus%20D!5e0!3m2!1sid!2sid!4v1703590077449!5m2!1sid!2sid" 
              width="1100" 
              height="450" 
              style={{ border: "0", borderRadius: "20px" }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
