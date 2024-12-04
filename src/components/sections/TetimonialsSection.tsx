import Testimonial from "../Testimonial";

const TetimonialsSection = () => {
  return (
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
  );
};

export default TetimonialsSection;
