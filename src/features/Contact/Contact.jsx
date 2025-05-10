import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

function Contact() {
  return (
    <div className="dark:bg-background-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-8 sm:py-10">
        <div className="flex flex-col xl:flex-row xl:gap-10">
          <div className="flex flex-col gap-4 lg:gap-6 xl:pt-10">
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg lg:text-xl font-bold text-black dark:text-white">
                Contact Us
              </h1>
              <div className="h-[2px] w-20 sm:w-24 lg:w-28 bg-slate-500 dark:bg-gray-600"></div>
            </div>

            <div className="w-full max-w-md xl:max-w-lg">
              <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-black dark:text-white">
                We’d Love To <span className="text-[#8AA823]">Hear Back</span>{" "}
                From You
              </h1>
            </div>
            <div className="w-full max-w-md xl:max-w-lg">
              <p className="text-sm sm:text-base xl:text-lg text-black dark:text-gray-300">
                Need something cleared up? Here are our most frequently asked
                questions.
              </p>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row sm:gap-5 justify-center xl:justify-start">
              <div className="border-2 flex flex-col items-center justify-between py-3 w-full sm:w-60 h-32 sm:h-36 rounded-lg border-gray-300 dark:border-gray-700 mb-4 sm:mb-0">
                <CiMail className="text-[#8AA823] text-2xl sm:text-3xl bg-[#ECFFED] p-1 rounded-xl w-10 h-10" />
                <h1 className="text-base sm:text-lg font-bold text-black dark:text-white">
                  Email
                </h1>
                <p className="text-sm sm:text-base text-[#023B3B] font-semibold dark:text-gray-300">
                  info@icgchemicals.com
                </p>
              </div>
              <div className="border-2 flex flex-col items-center justify-between py-3 w-full sm:w-60 h-32 sm:h-36 rounded-lg border-gray-300 dark:border-gray-700">
                <FiPhone className="text-[#023B3B] text-2xl sm:text-3xl bg-[#ECFFED] p-2 rounded-xl w-10 h-10" />
                <h1 className="text-base sm:text-lg font-bold text-black dark:text-white">
                  Phone
                </h1>
                <p className="text-sm sm:text-base text-[#023B3B] font-semibold dark:text-gray-300">
                  +971 4887 6111
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 sm:mt-10 xl:mt-0">
            <div className="w-full max-w-md lg:max-w-lg flex flex-col gap-6">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center xl:text-left text-black dark:text-white">
                Get in touch
              </h1>
              <p className="text-sm sm:text-base text-center xl:text-left text-black dark:text-gray-300">
                We’d love to hear from you. Please fill out this form
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
                <div className="flex flex-col w-full sm:w-1/2">
                  <label className="text-sm sm:text-base text-black dark:text-white">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="h-10 sm:h-11 border rounded-md border-[#9C9C9C] outline-none px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>
                <div className="flex flex-col w-full sm:w-1/2">
                  <label className="text-sm sm:text-base text-black dark:text-white">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="h-10 sm:h-11 border rounded-md border-[#9C9C9C] outline-none px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-sm sm:text-base text-black dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="h-10 sm:h-11 border rounded-md border-[#9C9C9C] outline-none px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-sm sm:text-base text-black dark:text-white">
                  Phone Number
                </label>
                <div className="flex items-center border-[#9C9C9C] border rounded-md dark:border-gray-700">
                  <select
                    className="w-12 sm:w-14 h-10 sm:h-11 pl-2 font-normal text-[#B9B9B9] rounded-md bg-transparent dark:bg-gray-800 dark:text-white"
                    id="category"
                    name="category"
                  >
                    <option value="technology">US</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="h-10 sm:h-11 w-full outline-none px-3 dark:bg-gray-800 dark:text-white"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-sm sm:text-base text-black dark:text-white">
                  Message
                </label>
                <textarea
                  placeholder="Leave us a message..."
                  className="py-2 resize-none h-24 sm:h-28 border rounded-md border-[#9C9C9C] outline-none px-3 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
              </div>
              <div className="flex items-center gap-3 text-black dark:text-white text-sm sm:text-base">
                <input
                  className="w-4 h-4 sm:w-5 sm:h-5 rounded"
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>You agree to our friendly privacy policy.</p>
              </div>
              <div className="flex justify-center">
                <button className="h-10 sm:h-11 w-full bg-[#8AA823] rounded-md text-white font-medium text-sm sm:text-base">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 relative w-full h-[450px] sm:h-[600px] lg:h-[450px]">
        <div className="bg-[#023B3B] w-full absolute h-full z-[100] top-0 opacity-70"></div>
        <div className="w-full h-full">
          <img
            className="w-full h-full object-cover"
            src="./assets/ContactImages/ContactImage.jpg"
            alt=""
          />
        </div>
        <div className="absolute z-[200] flex flex-col top-6 sm:top-10 px-4 sm:px-6 md:px-10 lg:px-16 w-full">
          <h1 className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-bold text-[#8AA823] mb-4 sm:mb-6 text-white">
            Global Presence
          </h1>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            <div className="flex flex-col">
              <h1 className="text-base sm:text-lg lg:text-xl 2xl:text-2xl font-bold text-white mb-3 sm:mb-4">
                Local Presences
              </h1>
              <ul className="px-4 text-[#ECECEC] flex flex-col gap-1 text-sm sm:text-base lg:text-lg list-disc">
                <li>Saudi Arabia</li>
                <li>Pakistan</li>
                <li>China</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h1 className="text-base sm:text-lg lg:text-xl 2xl:text-2xl font-bold text-white mb-3 sm:mb-4">
                Active Regions
              </h1>
              <ul className="px-4 text-[#ECECEC] flex flex-col gap-1 text-sm sm:text-base lg:text-lg list-disc">
                <li>Dubai</li>
                <li>India</li>
                <li>Saudi Arabia</li>
                <li>Pakistan</li>
                <li>China</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h1 className="text-base sm:text-lg lg:text-xl 2xl:text-2xl font-bold text-white mb-3 sm:mb-4">
                Active Presences
              </h1>
              <ul className="px-4 text-[#ECECEC] flex flex-col gap-1 text-sm sm:text-base lg:text-lg list-disc">
                <li>Jordan</li>
                <li>Oman</li>
                <li>Qatar</li>
                <li>Bahrain</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h1 className="text-base sm:text-lg lg:text-xl 2xl:text-2xl font-bold text-white mb-3 sm:mb-4">
                Active Presences
              </h1>
              <ul className="px-4 text-[#ECECEC] flex flex-col gap-1 text-sm sm:text-base lg:text-lg list-disc">
                <li>Egypt</li>
                <li>Kuwait</li>
                <li>Lebanon</li>
                <li>Africa</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto text-center mt-8 sm:mt-10">
        <img
          src="./assets/ContactImages/map.png"
          alt=""
          className="w-full mx-auto"
        />
      </div>
    </div>
  );
}

export default Contact;