"use client";
import { formatDate } from "../../../../utils/formatDate";
import { useParams } from "next/navigation";
import { doctors } from "../../../../assets/data/doctors";
import DocNotFound from "../../../../components/DocNotFound";

const DoctorAbout = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc.id === id);

  // FallBack Case
  if (!doctor) {
    return <DocNotFound />;
  }

  // Destructuing Data
  const { name } = doctor;

  return (
    <div>
      <div>
        <h3 className="text-xl text-headingColor font-semibold flex items-center gap-2">
          About of{" "}
          <span className="text-irisBlueColor font-bold text-2xl ">{name}</span>
        </h3>
        <div className="text_para">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni
          dolorem temporibus non tempora debitis sunt voluptates sed quasi
          asperiores, laborum nobis, aliquid libero. Dolorum ipsa eligendi,
          consequatur doloremque ducimus harum totam corrupti quasi quidem ipsum
          cum dolore, nam earum asperiores necessitatibus. Quo voluptates
          eveniet, delectus odit ipsam placeat id expedita.
        </div>
      </div>

      {/* Education */}

      <div className="mt-12">
        <h3 className="text-xl text-headingColor font-semibold ">Education</h3>

        <ul className="pt-4 md:p-5">
          {/* 1 */}
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 md-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("6/14/2014")} - {formatDate("5/23/2017")}
              </span>

              <p className="text-base leading-6 font-medium text-textColor">
                PhD in Surgery
              </p>
            </div>
            <p className="text-sm leading-6 font-medium text-textColor">
              Muhimbili University of Health
            </p>
          </li>
          {/* 1 */}
          <li className="mt-8 flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 md-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("12/7/2017")} - {formatDate("6/10/2021")}
              </span>

              <p className="text-base leading-6 font-medium text-textColor">
                PhD in Surgery
              </p>
            </div>
            <p className="text-sm leading-6 font-medium text-textColor">
              Muhimbili University of Health
            </p>
          </li>
        </ul>
      </div>

      {/* Experience */}

      <div className="mt-12">
        <h3 className="text-xl text-headingColor font-semibold ">Experience</h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          {/* 1 */}
          <li className="p-4 rounded bg-[#FFF9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("12/7/2017")} - {formatDate("6/10/2021")}
            </span>
            <p className="text-[15px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Muhimbili University of Health
            </p>
          </li>
          {/* 1 */}
          <li className="p-4 rounded bg-[#FFF9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("12/7/2017")} - {formatDate("6/10/2021")}
            </span>
            <p className="text-[15px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Muhimbili University of Health
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
