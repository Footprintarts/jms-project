/* eslint-disable react/no-unescaped-entities */
"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import patientAvatar from "../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";

const Testimonial: React.FC = () => {
  const slidesRef = useRef<HTMLDivElement>(null); // Ref for the slides container
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalSlides: number = 5; // Update based on the number of slides

  const goToSlide = (index: number): void => {
    // Ensure the index wraps around correctly
    const newIndex = (index + totalSlides) % totalSlides;
    setCurrentIndex(newIndex);

    // Adjust the transform style for the slides container
    if (slidesRef.current) {
      slidesRef.current.style.transform = `translateX(-${newIndex * 70}%)`;
    }
  };

  return (
    <div className="testimonial-slider">
      <div className="slides" ref={slidesRef}>
        {[...Array(totalSlides)].map((_, index) => (
          <div
            className="slide grid gap-4  md:w-1/2  py-16  md:centered-row justify-center "
            key={index}
          >
            <div className="py-6 px-5  bg-gradient-to-br from-zinc-100 via-white to-blue-200 w-full md:h-[220px] md:w-[500px]  rounded-xl">
              <div className="flex items-center gap-4">
                <Image
                  src={patientAvatar}
                  alt={`Patient ${index + 1}`}
                  width={50}
                  height={50}
                />
                <div>
                  <h4 className="text-lg font-semibold text-headingColor">
                    Patient {index + 1}
                  </h4>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <HiStar key={i} className="text-yellowColor w-4 h-4" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-base mt-4 text-textColor font-normal">
                "Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> Dicta, cupiditate iste ducimus sint quas omnis. slide{" "}
                {index + 1}."
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="controls">
        <button className="prev" onClick={() => goToSlide(currentIndex - 1)}>
          ←
        </button>
        <button className="next" onClick={() => goToSlide(currentIndex + 1)}>
          →
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
