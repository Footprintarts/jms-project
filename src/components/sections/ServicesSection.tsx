import ServicesList from "../ServicesList";

const ServicesSection = () => {
  return (
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">Our Medical Services</h2>
          <p className="text_para text-center">
            World-class care for everyone. Our health System offers
            unmatched,expert health care.
          </p>
        </div>

        <ServicesList />
      </div>
    </section>
  );
};

export default ServicesSection;
