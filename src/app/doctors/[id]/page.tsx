/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-async-client-component */
"use client";
import Image from "next/image";
// import doctorImg from "../../../assets/images/doctor-img01.png";
import starIcon from "../../../assets/images/Star.png";
import { useState } from "react";
import DoctorAbout from "./about/page";
import DoctorFeedback from "./feedback/feedback";
import SidePanel from "../../../components/SidePanel";

// Data
import { doctors } from "../../../assets/data/doctors";
import DocNotFound from "../../../components/DocNotFound";

export default function Page({ params }: { params: { id: string } }) {
  const [tab, setTab] = useState("about");
  const id = params.id; // Directly use params.id without async
  const doctor = doctors.find((doc) => doc.id === id);

  // FallBack Case
  if (!doctor) {
    return <DocNotFound />;
  }

  // Destructuring
  const { name, photo, specialization } = doctor;

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            {/* Top */}
            <div className="centered-row gap-5">
              <figure className="max-w-[200px]">
                <Image src={photo} alt="Doctor Image" />
              </figure>

              <div>
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-base fontt-semibold rounded mt-3">
                  {specialization}
                </span>

                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  {name}
                </h3>

                <div className="centered-row gap-[6px]">
                  <span className="centered-row gap-[6px] text-sm lg:text-base font-semibold text-headingColor">
                    <Image src={starIcon} alt="Rating Star" /> 4.8
                  </span>
                  <span className="text-sm lg:text-base font-normal text-textColor">
                    (276)
                  </span>
                </div>

                <div className="text_para md:text-[15px] leading-6 lg:max-w-[390px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Animi doloribus amet dolorem.
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-[50px] border-b border-[#0066FF34] pb-2">
              <span
                onClick={() => setTab("about")}
                className={`${
                  tab === "about" && "border-b-2  border-b-primaryColor"
                } py-2 px-5 mr-5 text-base text-headingColor bg-zinc-50 font-semibold cursor-pointer`}
              >
                About
              </span>

              <span
                onClick={() => setTab("feedback")}
                className={`${
                  tab === "feedback" && "border-b-2 border-b-primaryColor"
                } py-2 px-5 mr-5 text-base text-headingColor bg-zinc-50 font-semibold cursor-pointer`}
              >
                Feedback
              </span>
            </div>

            {/* About & Feedback */}
            <div className="mt-[50px]">
              {tab === "about" && <DoctorAbout />}
              {tab === "feedback" && <DoctorFeedback />}
            </div>
          </div>

          <div>
            <SidePanel />
          </div>
        </div>
      </div>
    </section>
  );
}
