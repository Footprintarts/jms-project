"use client";
import Image from "next/image";
import signupImg from "../../assets/images/signup.gif";
import avatar from "../../assets/images/doctor-img01.png";
import Link from "next/link";
import { useState } from "react";

const SignUp = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    photo: selectedFile,
    gender: "",
    role: "patient",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (e) => {
    const file = e.target.files[0];

    // Upload Photo to Cloud Store

    console.log(file);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[1170px] mx-auto">
        <div className="grid lg:grid-cols-2">
          {/* img box */}
          <div className="hidden lg:block bg-primaryColor rounded-l-lg">
            <figure className="rounded-l-lg">
              <Image src={signupImg} alt="" className="w-full rounded-lg" />
            </figure>
          </div>

          {/* SignUp Form */}

          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">account</span>
            </h3>

            <form onSubmit={submitHandler}>
              {/* 1 */}
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full  p-4 py-3 border-b border-solid border-[#0066FF61] focus:outline-none placeholder:text-textColor rounded-md cursor-pointer"
              />
              {/* 1 */}
              <input
                type="text"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full my-4 p-4 py-3 border-b border-solid border-[#0066FF61] focus:outline-none placeholder:text-textColor rounded-md cursor-pointer"
              />
              {/* 1 */}
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full  p-4 py-3 border-b border-solid border-[#0066FF61] focus:outline-none placeholder:text-textColor rounded-md cursor-pointer"
              />
            </form>
            <div className="mt-5 centered-row justify-between">
              {/* 1 */}
              <label
                htmlFor=""
                className="text-headingColor font-bold text-[16px] leading-7"
              >
                Are you a:
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                >
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                </select>
              </label>
              {/* 1 */}
              <label
                htmlFor=""
                className="text-headingColor font-bold text-[16px] leading-7"
              >
                Gender:
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </label>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <figure className="w-[60px] rounded-full border-2 border-solid border-primaryColor centered-row justify-center">
                <Image
                  src={avatar}
                  alt="image"
                  className="w-full rounded-full"
                />
              </figure>

              <div className="relative w-[160px] h-[50px]">
                <input
                  type="file"
                  name="photo"
                  id="customFile"
                  onChange={handleFileInputChange}
                  accept=".jpg, .png"
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer centered-row"
                />

                <label
                  htmlFor="customFile"
                  className="absolute w-full h-full top-0 left-0 overflow-hidden px-[0.75px] py-[0.375rem] text-[15px] leading-6 bg-[#0066FF46] text-headingColor font-semibold cursor-pointer centered-row justify-center rounded-md -z-50"
                >
                  Upload Photo
                </label>
              </div>
            </div>

            <div className="mt-7">
              <button
                type="submit"
                className="w-full bg-primaryColor text-white text-lg rounded-lg"
              >
                Sign up
              </button>
            </div>
            <p className="mt-5 text-textColor text-center ">
              Already have an account?{" "}
              <Link href="/login" className="text-primaryColor font-medium">
                {" "}
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
