import { services } from "../../assets/data/services";
import ServicesCard from "../../components/ServicesCard";

const Services = () => {
  return (
    <section className="bg-grad">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] cursor-pointer ">
          {services.map((item, index) => (
            <ServicesCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
