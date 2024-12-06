import { doctors } from "../../assets/data/doctors";
import DoctorsCard from "../../components/DoctorsCard";
import Testimonial from "../../components/Testimonial";

const Doctors = () => {
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="centered-row max-w-[570px] mx-auto bg-[#0066ff2c] rounded-md justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search Doctor"
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md hover:bg-zinc-800 hover:text-zinc-100 transition  ease-in">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* DOCTORS-Grid */}
      <section>
        <div className="container">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4 lg:gap-[30px] mt-[30px] ">
            {doctors.map((doctor, index) => (
              <DoctorsCard key={index} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What Our Patients Say</h2>
            <p className="text_para text-center">
              World-class care for everyone. Our health System offers
              unmatched,expert health care.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;
