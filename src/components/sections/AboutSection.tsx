import Image from "next/image";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
          {/* img */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <Image src={aboutImg} alt="image" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]    ">
              <Image src={aboutCardImg} alt="image" />
            </div>
          </div>

          {/* About Content */}

          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading-1  text-left">
              Proud to be one of the nations best.
            </h2>
            <p className="text_para">
              For 30 years in a row, T.Z, has recognized Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Eum, atque, incidunt voluptas
              veniam explicabo culpa accusantium voluptatum officiis, quisquam
              dicta vel nisi? Quae, asperiores.
            </p>
            <p className="text_para">
              Our patients are looking for the best Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Cupiditate consequuntur maxime
              dolore. Animi officiis eveniet hic perferendis quidem.
            </p>
            <Link href="/">
              <button className="btn hover:bg-blue-100 hover:border hover:border-primaryColor transition-all duration-300 hover:text-primaryColor hover:shadow-xl  hover:shadow-primaryColor/20 hover:-translate-y-1">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
