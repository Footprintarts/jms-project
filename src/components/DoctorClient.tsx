"use client";

import Image from "next/image";
import { useState } from "react";
import DoctorAbout from "../app/doctors/[id]/about/page";
import DoctorFeedback from "../app/doctors/[id]/feedback/feedback";
import SidePanel from "./SidePanel";
import { StaticImageData } from "next/image";

interface Doctor {
  id: string;
  name: string;
  photo: string | StaticImageData | any;
  specialization: string;
}

interface Props {
  doctor: Doctor;
}

export default function DoctorClient({ doctor }: Props) {
  const [tab, setTab] = useState("about");

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="centered-row gap-5">
              <figure className="max-w-[200px]">
                <Image src={doctor.photo} alt="Doctor Image" />
              </figure>
              <div>
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-base font-semibold rounded mt-3">
                  {doctor.specialization}
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  {doctor.name}
                </h3>
              </div>
            </div>

            <div className="mt-[50px] border-b border-[#0066FF34] pb-2">
              <span
                onClick={() => setTab("about")}
                className={`${
                  tab === "about" && "border-b-2 border-b-primaryColor"
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
