import { doctors } from "../assets/data/doctors";
import DoctorsCard from "./DoctorsCard";

const DoctorsList = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {doctors.map((doctor, index) => (
        <DoctorsCard key={index} doctor={doctor} />
      ))}
    </div>
  );
};

export default DoctorsList;
