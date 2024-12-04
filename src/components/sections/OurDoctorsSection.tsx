import DoctorsList from "../DoctorsList";

const OurDoctorsSection = () => {
  return (
    <section>
      <div className="container">
        <h2 className="heading-1 text-center"> Our Great Doctors </h2>
        <p className="text_para text-center">
          World-class care for everyone. Our health System offers
          unmatched,expert health care.
        </p>

        {/* Doctors List */}
        <DoctorsList />
      </div>
    </section>
  );
};

export default OurDoctorsSection;
