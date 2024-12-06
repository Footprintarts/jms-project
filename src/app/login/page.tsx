/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import Link from "next/link";
import { useState } from "react";

const logIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello👋 <span className="text-primaryColor">Welcome</span> Back!
        </h3>

        <form className="py-4 md:py-0">
          <div className="mb-5">
            {/* 1 */}
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border-b border-solid border-[#0066FF61] focus:outline-none placeholder:text-textColor rounded-md cursor-pointer"
            />
          </div>
          <div className="mb-5">
            {/* 1 */}
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              className="w-full  px-4 py-3 border-b border-solid border-[#0066FF61] focus:outline-none placeholder:text-textColor rounded-md cursor-pointer"
            />
          </div>

          <div className="mt-7">
            <button
              type="submit"
              className="w-full bg-primaryColor text-white text-lg rounded-lg"
            >
              Login
            </button>
          </div>
          <p className="mt-5 text-textColor text-center ">
            Don&#39;t have an account?{" "}
            <Link href="/register" className="text-primaryColor font-medium">
              {" "}
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default logIn;
