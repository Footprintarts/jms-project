import { services } from "../assets/data/services";
import ServicesCard from "./ServicesCard";

const ServicesList = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {services.map((item, index) => (
        <ServicesCard key={index} item={item} index={index} />
      ))}
    </div>
  );
};

export default ServicesList;
