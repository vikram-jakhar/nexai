import React from 'react'
import ComanBtn from './ComanBtn'
import Ai_img from '../assets/img/Ai_Img.webp'

const What_NexAi = () => {
    return (
        <>
            <div className='1340px mx-auto px-3 mt-[24px] sm:mt-[160px] mb-[24px] sm:mb-[160px]'>
                <div className='bg-[url(../src/assets/img/bg_imgWhat_NexAi.gif)] bg-cover bg-center bg-no-repeat  border border-solid border-[#FCFCFC] rounded-[24px] overflow-hidden max-w-[1340px] mx-auto min-h-[810px] justify-center flex items-center relative'>
                    <span className='w-[228px] h-[228px] bg-[#02CDCF]  rounded-[50%] blur-[150px] bottom-[-9%] absolute'></span>
                    <div className='max-w-[1121px]   px-3'>
                        <div className='grid lg:grid-cols-2 gap-5 lg:gap-[89px]  justify-center items-center '>
                            <div className="col-span-1 lg:mt-0 mt-6">
                                <h3 className='text-[40px] recharge text-[#02CDCF] font-bold leading-[50.4px]'>What is NexAi?</h3>
                                <p className='text-[16px] pt-[16px] text-[#B7B8BA] font-poppins font-normal max-w-[564px]'>Beyond its convenience, Nexai revolutionizes the way you interact with your home environment. It enhances productivity, efficiency, and overall well-being. From managing your schedules to transforming the way you experience smart living, Nexai opens up a world of possibilities.</p>
                                <p className='text-[16px] pt-[8px] text-[#B7B8BA] font-poppins font-normal max-w-[564px]'>Nexai's software can be installed on all your smart devices, including smartphones, computers, smart TVs, and kitchen appliances. It acts as a centralized control hub, allowing you to manage and interact with all your devices seamlessly. Whether it's adjusting the temperature, turning on appliances, or even accessing files on your home computer from anywhere, Nexai empowers you with effortless control.</p>
                                <div className='mt-[40px]'>
                                    <ComanBtn text='Learn More' />
                                </div>
                            </div>
                            <div className="col-span-1 lg:mb-0 mb-6 flex justify-center">
                                <div>
                                    <div className='relative z-[1]  '>
                                        <img src={Ai_img} alt="Ai_img" className='md:w-[468px] mix-blend-color-dodge  h w-full md:h-[463px] ' />
                                        <span className='w-[468px] h-[463px] animate-pulse z-[-1] blur-[400px] rounded-[500px] bg-[#02CDCF] absolute top-[20%]'></span>
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

export default What_NexAi