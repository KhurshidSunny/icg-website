import React from 'react'
import { PiSubtitlesBold } from "react-icons/pi";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
function Career() {
    return (
        <div className="container mx-auto px-6 lg:px-16 py-10">
            <div className="relative mb-16">
                <img
                    src="./assets/JobsPageImages/Jobs.jpg"
                    alt="New Release"
                    className="w-full rounded-xl object-cover object-center h-full"
                    style={{ width: "1408.96px", height: "427.22px" }}
                />


                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

                <h1 className="absolute text-white 2xl:text-[48px] text-lg lg:text-3xl -tracking-tighter font-bold top-[170.32px] left-[658.0px] md:left-[295px] md:text-[25px] lg:left-[360px] xl:left-[480px] 2xl:left-[620px]">
                    ICG Career
                </h1>
            </div>

            <div className='flex sm:flex-col xl:flex-row xl:justify-between' >

                <div>
                    <h1 className='sm:text-3xl font-[700] 2xl:text-3xl'>Lab <span className='text-[#8AA823] 2xl:text-3xl'>Technician</span></h1>
                    <div className='mt-5'>
                        <h2 className='sm:text-xl font-[700] '>Who Are We Looking For</h2>
                        <div className='px-4 mt-2'>
                            <li className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, a.</li>
                            <li className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, a.</li>
                            <li className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, a.</li>
                            <li className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, a.</li>
                            <li className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, a.</li>
                            <li className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, a.</li>
                            <li className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, a.</li>
                            <li className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, a.</li>
                            <li className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, a.</li>
                        </div>
                    </div>

                    <div className='mt-8'>
                        <h2 className='sm:text-xl font-[700] '>What You Will Be Doing</h2>
                        <div className='px-4 mt-2'>
                            <li className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, a.</li>
                            <li className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, a.</li>
                            <li className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, a.</li>
                            <li className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, a.</li>
                            <li className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, a.</li>
                            <li className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, a.</li>
                            <li className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, a.</li>
                            <li className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, a.</li>
                            <li className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, a.</li>
                        </div>
                    </div>

                    <div className='mt-8'>
                        <h2 className='sm:text-xl font-[700] '>Educational Requirement</h2>
                        <div className='mt-2 xl:w-[530px]'>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going</p>
                        </div>
                    </div>

                    <div className='mt-8'>
                        <h2 className='sm:text-xl font-[700] '>Salary</h2>
                        <div className='px-4 mt-2'>
                            <li className=''>Salary:  18,000 to 35,000 BDT (Depends on Skill and Experience)</li>
                            <li className=''>Salary Review: Yearly.</li>
                        </div>
                    </div>

                    <div className='mt-8'>
                        <h2 className='sm:text-xl font-[700] '>Working Hours</h2>
                        <div className='px-4 mt-2'>
                            <li className=''>8 AM – 5 PM</li>
                        </div>
                    </div>

                    <div className='mt-8'>
                        <h2 className='sm:text-xl font-[700] '>Working Days</h2>
                        <div className='px-4 mt-2'>
                            <li className=''>Weekly: 5 days.</li>
                            <li className=''>Weekend: Friday.Saturday</li>
                        </div>
                    </div>
                </div>

                <div className='w-full h-[410px] bg-[#F8F7F7] rounded-[8px] mt-10 xl:w-[410px]'>
                    <h1 className='sm:text-2xl font-[700] px-8 mt-5'>Job <span className='text-[#8AA823]'>Summary</span></h1>
                    <div className='flex flex-col gap-3 mt-5 px-8'>
                        <div className='flex items-center gap-2'>
                            <PiSubtitlesBold className='sm:text-xl' />
                            <h1>Title</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <BsFillBagCheckFill className='sm:text-xl' />
                            <div className='flex flex-col' >
                                <h1>Employment Type</h1>
                                <h1>Full Time</h1>
                            </div>
                        </div>

                        <div className='flex items-center gap-2'>
                            < MdOutlineWatchLater className='sm:text-xl' />
                            <div className='flex flex-col' >
                                <h1>Deparmnet</h1>
                                <h1>9AM - 6PM</h1>
                            </div>
                        </div>

                        <div className='flex items-center gap-2'>
                            <FaLocationDot className='sm:text-xl' />
                            <div className='flex flex-col' >
                                <h1>Location</h1>
                                <h1>Islambad , Pakistan</h1>
                            </div>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <h1 className='sm:text-[18px] font-[700] mt-5 underline decoration-[#8AA823] px-6'>View all Job</h1>
                    </div>

                    <div className='px-2' >
                        <button className='w-full mt-5 py-3 rounded-[8px] bg-[#8AA823] text-white'>Apply Now</button>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Career
