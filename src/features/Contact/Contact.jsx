import React from "react";
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

function Contact() {
  return (
    <div className="dark:bg-background-dark">
      <div className="container mx-auto sm:px-6 2xl:pr-[4rem] 2xl:pl-[14rem] lg:px-16 py-10 ">
        <div className="flex sm:flex-col xl:flex-row xl:gap-[5rem] ">
          <div className="flex sm:flex-col gap-2 lg:gap-[2rem] xl:pt-[50px]">
            <div className="flex items-center gap-2 ">
              <h1 className="sm:text-[17px] font-[700] lg:text-xl text-black dark:text-white">
                Contact Us
              </h1>
              <div className="h-[2px] w-[100px] bg-slate-500 dark:bg-gray-600"></div>
            </div>

            <div className="sm:w-[290px] lg:w-[360px] xl:w-[470px]">
              <h1 className="sm:text-2xl font-[700] lg:text-3xl  xl:text-[40px] text-black dark:text-white">
                We’d Love To <span className="text-[#8AA823]">Hear Back</span> From You
              </h1>
            </div>
            <div className="sm:w-[420px] xl:w-[475px]">
              <p className="text-[#475156] sm:text-[16px] xl:text-[18px] text-black dark:text-gray-300">
                Need something cleared up? Here are our most frequently asked questions.
              </p>
            </div>

            <div className="mt-4 flex sm:gap-5 sm:justify-center xl:justify-start">
              <div className="border-2 flex justify-between rounded-[8px] flex-col items-center py-3 sm:w-[250px] sm:h-[150px] border-gray-300 dark:border-gray-700">
                <CiMail className="text-[#8AA823] rounded-[12.33px] sm:text-2xl bg-[#ECFFED] p-1 sm:w-[50px] sm:h-[35px]" />
                <h1 className="sm:text-[17px] font-[700] text-black dark:text-white">Email</h1>
                <p className="sm:text-[15px] text-[#023B3B] font-[600] dark:text-gray-300">
                  info@icgchemicals.com
                </p>
              </div>
              <div className="border-2 flex justify-between rounded-[8px] flex-col items-center py-3 sm:w-[250px] sm:h-[150px] border-gray-300 dark:border-gray-700">
                <FiPhone className="text-[#023B3B] rounded-[12.33px] sm:text-2xl bg-[#ECFFED] px-2 py-2 sm:w-[50px] sm:h-[40px]" />
                <h1 className="sm:text-[17px] font-[700] text-black dark:text-white">Phone</h1>
                <p className="sm:text-[15px] text-[#023B3B] font-[600] dark:text-gray-300">
                  +971 4887 6111
                </p>
              </div>
            </div>
          </div>

          <div className="flex sm:justify-center sm:h-[700px] sm:mt-10">
            <div className="sm:w-[400px] sm:h-[400px] flex flex-col gap-[24.65px] lg:w-[505px] lg:h-[676px] ">
              <h1 className="sm:text-2xl font-[700] sm:text-center lg:text-3xl xl:text-start text-black dark:text-white">
                Get in touch
              </h1>
              <p className="text-[#131313] sm:text-[16px] font-[400] sm:text-center xl:text-start dark:text-gray-300">
                We’d love to hear from you. Please fill out this form
              </p>

              <div className="flex gap-2 items-center">
                <div className="flex flex-col sm:w-[50%]">
                  <label className="sm:text-[16px] font-[400] text-black dark:text-white">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className=" sm:h-[45px] border rounded-md border-[#9C9C9C] outline-none px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>
                <div className="flex flex-col sm:w-[50%]">
                  <label className="sm:text-[16px] font-[400] text-black dark:text-white">Last Name</label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className=" sm:h-[45px] border rounded-md border-[#9C9C9C] outline-none px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="sm:text-[16px] font-[400] text-black dark:text-white">Email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="sm:h-[45px] border rounded-md border-[#9C9C9C] outline-none px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="sm:text-[16px] font-[400] text-black dark:text-white">
                  Phone Number
                </label>
                <div className="flex items-center border-[#9C9C9C] border rounded-md  dark:border-gray-700">
                  <select
                    className="w-[50px] sm:h-[45px] pl-[0.75rem] font-[400] text-[#B9B9B9] rounded-md bg-transparent dark:bg-gray-800 dark:text-white"
                    id="category"
                    name="category"
                  >
                    <option value="technology">US</option>
                  </select>
                  <input
                    type="email"
                    placeholder="+1 (555) 000-0000"
                    className="sm:h-[45px] w-[100%] outline-none px-3 dark:bg-gray-800 dark:text-white"
                  />
                </div>

              </div>
              <div className="flex flex-col">
                <label className="sm:text-[16px] font-[400] text-black dark:text-white">Message</label>
                <textarea
                  placeholder="Leave us a message..."
                  className=" py-2 resize-none sm:h-[100px] border rounded-md border-[#9C9C9C] outline-none px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
              </div>
              <div className="flex items-center gap-3 text-black dark:text-white">
                <input className="px-2 py-2 rounded-xl" type="checkbox" name="" id="" />
                <p>You agree to our friendly privacy policy.</p>
              </div>
              <div className="flex justify-center">
                <button className="sm:h-[45px] w-full bg-[#8AA823] rounded-md text-white font-[500]">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 relative sm:w-[100%] sm:h-[440px] 2xl:h-[450px]">
        <div className="bg-[#023B3B] w-full absolute h-full z-[100] top-0 opacity-70"></div>
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src="./assets/ContactImages/ContactImage.jpg"
            alt=""
          />
        </div>
        <div className="absolute z-[200] flex flex-col top-10 sm:left-[50px] md:left-[60px] lg:left-[80px]">
          <h1 className="sm:text-[30px] font-[700] text-[#8AA823] mb-5 2xl:text-[2.5rem] text-white">
            Global Presence
          </h1>

          <div className="flex sm:gap-x-[20px] 2xl:gap-x-[200px] mt-5 flex-wrap md:gap-x-[40px] lg:gap-x-[60px]">
            <div className="flex flex-col">
              <h1 className="sm:text-[18px] font-[700] text-white mb-5 lg:text-[22px] 2xl:text-[25px]">
                Local Presences
              </h1>
              <div className="px-4 text-[#ECECEC] flex flex-col gap-1">
                <li className="lg:text-[18px] 2xl:text-[20px]">Saud Arabia</li>
                <li className="lg:text-[18px] 2xl:text-[20px]">Pakistan</li>
                <li className="lg:text-[18px] 2xl:text-[20px]">China</li>
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="sm:text-[18px] font-[700] text-white mb-5 lg:text-[22px]  2xl:text-[25px]">
                Active Regions
              </h1>
              <div className="px-4 text-[#ECECEC] flex flex-col gap-1">
                <li className="lg:text-[18px] 2xl:text-[20px]">Dubia</li>
                <li className="lg:text-[18px] 2xl:text-[20px]">India</li>
                <li className="lg:text-[18px] 2xl:text-[20px]">Saud Arabia</li>
                <li className="lg:text-[18px] 2xl:text-[20px]">Pakistan</li>
                <li className="lg:text-[18px] 2xl:text-[20px]">China</li>
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="sm:text-[18px] font-[700] text-white mb-5 invisible lg:text-[22px] 2xl:text-[25px]">
                Active Presences
              </h1>
              <div className="px-4 text-[#ECECEC] flex flex-col gap-1">
                <li className="lg:text-[18px] 2xl:text-[20px]">Jordan</li>
                <li className="lg:text-[18px] 2xl:text-[20px]">Oman</li>
                <li className="lg:text-[18px] 2xl:text-[20px]">Qatar</li>
                <li className="lg-text-[20px] 2xl:text-[20px]">Bahrain</li>
              </div>
            </div>

            <div className="flex flex-col">
              <h1 className="sm:text-[18px] font-[700] text-white mb-5 invisible lg:text-[22px] 2xl:text-[25px]">
                Active Presences
              </h1>
              <div className="px-4 text-[#ECECEC] flex flex-col gap-1">
                <li className="lg:text-[18px] 2xl:text-[20px]">Egypt</li>
                <li className="lg:text-[18px] 2xl:text-[20px]">Kuwait</li>
                <li className="lg:text-[18px] 2xl:text-[20px]">Lebanon</li>
                <li className="lg-text-[20px] 2xl:text-[20px]">Africa</li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center mt-10">
        <img
          src="./assets/ContactImages/map.png"
          alt=""
          className="text-center mx-auto"
        />
      </div>
    </div>

  );
}

export default Contact;
