import Image from "next/image";
import heroImage from "../../assets/images/hero-img01.png";
import heroImage02 from "../../assets/images/hero-img02.png";
import heroImage03 from "../../assets/images/hero-img03.png";

const HeroSection = () => {
  return (
    <section className="hero_section pt-[60px] 2xl:h-[800px] bg-grad">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
          {/* Hero Content */}
          <div>
            <div className="lg:w-[570px]">
              <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] ">
                We help patients live a healthy, longer life.
              </h1>
              <p className="text_para">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
                velit ut, ullam quis dignissimos, odit sunt debitis aliquam,
                praesentium itaque repellendus repudiandae aspernatur ratione
                rerum.
              </p>

              <button className="btn py-5 hover:bg-blue-100 hover:border hover:border-primaryColor transition-all duration-300 hover:text-primaryColor hover:shadow-xl  hover:shadow-primaryColor/20 hover:-translate-y-1">
                Request an Appointment
              </button>
            </div>

            {/* Hero Counter */}

            <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
              {/* 1 */}
              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] font-bold text-headingColor">
                  10+
                </h2>
                <span className="w-[100px] h-2 bg-yellowColor rounded-full block -mt-[14px]"></span>
                <p className="text_para">Years of Experience</p>
              </div>
              {/* 1 */}
              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] font-bold text-headingColor">
                  15+
                </h2>
                <span className="w-[100px] h-2 bg-purpleColor rounded-full block -mt-[14px]"></span>
                <p className="text_para">Clinic Locations</p>
              </div>
              {/* 1 */}
              <div>
                <h2 className="text-[36px] leading-[56px] lg:text-[44px] font-bold text-headingColor">
                  100%
                </h2>
                <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block -mt-[14px]"></span>
                <p className="text_para">Patient satisfaction</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}

          <div className="flex justify-end gap-[30px]">
            <div>
              <Image src={heroImage} alt="hero_image" />
            </div>
            <div className="mt-[30px] ">
              <Image
                src={heroImage02}
                alt="hero_image"
                className="w-full mb-[30px]"
              />
              <Image src={heroImage03} alt="hero_image" className="w-full " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
