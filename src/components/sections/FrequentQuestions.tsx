import Image from "next/image";
import faqImg from "../../assets/images/faq-img.png";
import FaqList from "../FaqList";

const FrequentQuestions = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-0 ">
          <div className="w-1/2 hidden md:block">
            <Image src={faqImg} alt="image" />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-headingColor">
              Most asked questions by our beloved patients
            </h2>

            <FaqList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequentQuestions;
