import Image from "next/image";
import Link from "next/link";
import featureImg from "../../assets/images/feature-img.png";
import videoIcon from "../../assets/images/video-icon.png";
import avatarIcon from "../../assets/images/avatar-icon.png";

const FeatureSection = () => {
  return (
    <section className="bg-grad">
      <div className="container ">
        <div className="flex items-center justify-between flex-col lg:flex-row ">
          {/* Content */}
          <div className="xl:w-[670px]">
            <h2 className="heading-1">
              Get virtual treatment <br /> anytime.
            </h2>
            <ul className="pl-4">
              <li className="text_para">
                1. Schedule the appointment directly
              </li>
              <li className="text_para">
                2. Search for your physician here, and contact their office
              </li>
              <li className="text_para">
                3. View our physicians who are accepting new patients, use the
                online scheduling tool to select an appointment time.
              </li>
            </ul>
            <Link href="/">
              <button className="btn hover:bg-blue-100 hover:border hover:border-primaryColor transition-all duration-300 hover:text-primaryColor hover:shadow-xl  hover:shadow-primaryColor/20 hover:-translate-y-1">
                Learn More
              </button>
            </Link>
          </div>

          {/* Feature Img */}
          <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
            <Image src={featureImg} alt="image" className="w-3/4" />

            <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
              <div className="centered-row justify-between">
                <div className="centered-row gap-[6px] lg:gap-3">
                  <p className="text-[10px] leading-10 lg:text-[14px] lg:leading-5 text-headingColor font-semibold">
                    Tue, 24
                  </p>
                  <p className="text-[10px] leading-10 lg:text-[14px] lg:leading-5 text-headingColor font-normal">
                    10:00AM
                  </p>
                </div>
                <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] centered-row justify-center bg-yellowColor rounded py-1 px-[6xp] lg:py-3 lg:px-[9px]">
                  <Image src={videoIcon} alt="image" />
                </span>
              </div>

              <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4">
                Consultation
              </div>

              <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                <Image src={avatarIcon} alt="image" />
                <h4 className="text-[10px] leading-3 lg:text-base font-bold text-headingColor">
                  Boniphace Jackson
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
