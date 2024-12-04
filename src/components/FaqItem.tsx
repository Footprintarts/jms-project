"use client";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="p-3 lg:p-5 rounded-[12px] border border-[#D9DCE2] mb-5 cursor-pointer ">
      <div
        className="centered-row justify-between gap-5"
        onClick={toggleAccordion}
      >
        <h4 className="text-base lg:text-[22px] lg:leading-8 text-headingColor">
          {item.question}
        </h4>

        <div
          className={`${
            isOpen && `bg-primaryColor border-none text-zinc-50 `
          } w-7 h-7 lg:w-8 lg:h-8 border border-[#141F21] text-zinc-800 rounded centered-row justify-center transition-all duration-300 ease-in`}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      {isOpen && (
        <div className="mt-4 transition-all duration-300 ease-in">
          <p className="text-sm lg:text-base font-normal text-textColor ">
            {item.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
