import React from 'react'
import { ClockPlus, ClockSetting } from './Icon'

const Unique = () => {
    return (
        <>
            <div className='max-w-[1340px] mx-auto px-3 mt-[24px] sm:mt-[160px] overflow-hidden'>
                <div className='bg-[url(../src/assets/img/unickBg.webp)] bg-cover bg-center bg-no-repeat  border border-solid border-[#B7B7B7] rounded-[24px] overflow-hidden  relative'>
                    <div className='max-w-[1160px] mx-auto px-3 mix-blend-screen '>
                        <h2 className='text-[40px] mt-[23px] sm:mt-[80px] text-white recharge font-bold leading-[50.4px] text-center '>Unique features</h2>
                        <p className=' font-poppins font-normal text-[16px] leading-[25.6px] text-center text-[#B7B7B7] max-w-[397px] m-auto pt-[16px]'>ability to engage in natural, fluent conversations in over 15 languages,</p>
                        <div className=' h-[496px] overflow-y-scroll scrollmy mt-[23px] sm:mt-[80px] '>
                            <div className="grid md:grid-cols-2 sm:gap-3  ">
                                <div className="col-span-1">
                                    <div className='bg-white px-3 flex flex-col justify-center items-center sm:items-start  rounded-[21px] sm:w-[364px] sm:h-[400px] sm:ps-[24px] pt-2 sm:pt-[30px]'>
                                        <ClockSetting />
                                        <h4 className='text-[20px] pt-[30px] text-[#0B0A0A] recharge font-bold max-w-[304px]'>Remote Access and File Management</h4>
                                        <p className='text-[16px] max-sm:mb-[16px] pt-[10px] text-[#545555] font-poppins font-normal max-w-[316px] leading-[25.4px]'> Imagine you're at work, and you realize you forgot to bring an important file stored on your desktop computer at home. No worries! Simply open the Nexai app on your phone, initiate a call with Nexai, and request access to your computer. </p>
                                    </div>
                                    <div className='bg-white px-3 flex flex-col justify-center items-center sm:items-start  rounded-[21px] mt-[18px] lg:mt-[144px] sm:w-[364px] sm:h-[400px] sm:ps-[24px] pt-2 sm:pt-[30px]'>
                                        <ClockSetting />
                                        <h4 className='text-[20px] pt-[30px] text-[#0B0A0A] recharge font-bold max-w-[304px]'>Remote Access and File Management</h4>
                                        <p className='text-[16px] max-sm:pb-[16px] pt-[10px] text-[#545555] font-poppins font-normal max-w-[316px] leading-[25.4px]'> Imagine you're at work, and you realize you forgot to bring an important file stored on your desktop computer at home. No worries! Simply open the Nexai app on your phone, initiate a call with Nexai, and request access to your computer. </p>
                                    </div>

                                </div>
                                <div className="col-span-1 flex justify-end flex-col sm:items-end">
                                    <div className='bg-white px-3 flex flex-col justify-center items-center sm:items-start  rounded-[21px] mt-[18px] lg:mt-[260px] sm:w-[364px] sm:h-[400px] sm:ps-[24px] pt-2 sm:pt-[30px]'>
                                        <ClockPlus />
                                        <h4 className='text-[20px] pt-[30px] text-[#0B0A0A] recharge font-bold max-w-[304px]'>Real-time Home Monitoring</h4>
                                        <p className='text-[15px] max-sm:mb-[16px] pt-[10px] text-[#545555] font-poppins font-normal max-w-[316px] leading-[25px]'> While you're out with your family, you may wonder if you remembered to turn off the stove. Thanks to Nexai, this is no longer a concern. Using the Nexai app, you can initiate a video call with Nexai and activate the mini drone stationed in your home.  </p>
                                    </div>
                                    <div className='bg-white px-3 flex flex-col justify-center items-center sm:items-start  rounded-[21px] mt-[18px]  lg:mt-[144px] sm:w-[364px] sm:h-[400px] sm:ps-[24px] pt-2 sm:pt-[30px]'>
                                        <ClockPlus />
                                        <h4 className='text-[20px] pt-[30px] text-[#0B0A0A] recharge font-bold max-w-[304px]'>Real-time Home Monitoring</h4>
                                        <p className='text-[15px] max-sm:mb-[16px] pt-[10px] text-[#545555] font-poppins font-normal max-w-[316px] leading-[25px]'> While you're out with your family, you may wonder if you remembered to turn off the stove. Thanks to Nexai, this is no longer a concern. Using the Nexai app, you can initiate a video call with Nexai and activate the mini drone stationed in your home.  </p>
                                    </div>


                                </div>

                            </div>

                        </div>


                    </div>

                </div>

            </div>

        </>
    )
}

export default Unique