import React from 'react'
import { CiSearch } from "react-icons/ci";
function MediaEvents() {
    return (
        <div className="container mx-auto px-6 lg:px-16 py-10">
            <div className="relative mb-16">
                <img
                    src="./assets/MediaNewsImages/MediaEventImage.png"
                    alt="New Release"
                    className="w-full rounded-xl object-cover object-center h-full"
                    style={{ width: "1408.96px", height: "427.22px" }}
                />


                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

                <h1 className="absolute text-white 2xl:text-[48px] text-lg lg:text-3xl -tracking-tighter font-bold top-[170.32px] left-[658.0px] md:left-[295px] md:text-[25px] lg:left-[360px] xl:left-[480px] 2xl:left-[620px]">
                    Events
                </h1>
            </div>

            <div className='flex sm:flex-col gap-5  sm:items-center xl:flex-row xl:justify-between '>
            <div className='2xl:w-[80%] sm:w-[70%] sm:flex sm:justify-center lg:flex lg:justify-start 2xl:justify-start' >
                    <div className='bg-white sm:w-[70%]   border   border-[#9C9C9C] rounded-md  flex items-center  px-3'>
                    <CiSearch className='text-2xl text-[#9C9C9C]' />
                    <input type="text" placeholder='Search' className='px-2 outline-none py-2 bg-transparent sm:w-[80%] ' />
                  </div>
                </div>

                <div className='sm:w-full sm:flex py-3 sm:justify-between xl:gap-3 px-2'>
                    <select className='sm:w-[30%] py-3 px-3 font-[400] text-[#B9B9B9] border rounded-md  border-[#9C9C9C] bg-white' id="category" name="category">
                        <option value="technology">Topic</option>
                        <option value="business">Business</option>
                        <option value="health">Health</option>
                        <option value="sports">Sports</option>
                        <option value="entertainment">Entertainment</option>
                    </select>
                    <select className='sm:w-[30%] py-3 px-3 font-[400] text-[#B9B9B9] border rounded-md  border-[#9C9C9C] bg-white' id="category" name="category">
                        <option value="technology">Industry</option>
                        <option value="business">Business</option>
                        <option value="health">Health</option>
                        <option value="sports">Sports</option>
                        <option value="entertainment">Entertainment</option>
                    </select>
                    <select className='sm:w-[30%] py-3 px-3 font-[400] text-[#B9B9B9] border rounded-md  border-[#9C9C9C] bg-white' id="category" name="category">
                        <option value="technology">Publish Data</option>
                        <option value="business">Business</option>
                        <option value="health">Health</option>
                        <option value="sports">Sports</option>
                        <option value="entertainment">Entertainment</option>
                    </select>    
                </div>
            </div>
                
            

            <div className='w-full flex flex-col gap-5 mt-10'>

                <div className='w-full p-5 h-[200px] flex justify-between rounded-[8px] bg-[#F2F2F2] xl:h-[300px ] 2xl:h-[240px]'>
                    <div className='flex flex-col gap-3 '>
                       <div className='flex gap-2'>
                       <h1 className='sm:text-xl xl:text-2xl '>10 OCT 2024</h1>
                       <h1 className='sm:text-xl xl:text-2xl'> ----- </h1>
                       <h1 className='sm:text-xl xl:text-2xl'>15 OCT 2024</h1>
                       </div>
                       <div className='flex gap-2 2xl:mb-[20px]'>
                        <h1 className='sm:text-2xl xl:text-3xl'>Event</h1>
                        <h1 className='sm:text-2xl text-[#8AA823] xl:text-3xl'>Name:</h1>
                       </div>
                       <p className='sm:text-[16px] font-[400]'>Short Description</p>
                    </div>
                    <div className='flex flex-col gap-20 2xl:justify-around'>
                        <button className='bg-[#8AA823] text-white sm:text-[18px] rounded-full px-10 py-1'>On Going</button>
                        <button className='border border-[#8AA823] px-5 py-2 rounded-md'>Add to Calendar</button>
                    </div>
                </div>
                <div className='w-full p-5 h-[200px] flex justify-between rounded-[8px] bg-[#F2F2F2] xl:h-[300px ] 2xl:h-[240px]'>
                    <div className='flex flex-col gap-3 '>
                       <div className='flex gap-2'>
                       <h1 className='sm:text-xl xl:text-2xl '>10 OCT 2024</h1>
                       <h1 className='sm:text-xl xl:text-2xl '> ----- </h1>
                       <h1 className='sm:text-xl  xl:text-2xl'>15 OCT 2024</h1>
                       </div>
                       <div className='flex gap-2 2xl:mb-[20px]'>
                        <h1 className='sm:text-2xl xl:text-3xl'>Event</h1>
                        <h1 className='sm:text-2xl text-[#8AA823] xl:text-3xl'>Name:</h1>
                       </div>
                       <p className='sm:text-[16px] font-[400]'>Short Description</p>
                    </div>
                    <div className=''>
                        <button className='bg-[#E53E30] text-white sm:text-[18px] rounded-full px-10 py-1'>Expired</button>
                    </div>
                </div>
                
       </div>


        </div>

    )
}

export default MediaEvents
