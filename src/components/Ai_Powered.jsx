import React from 'react'
import Artboard from '../assets/img/Artboard.webp'
import ComanBtn from './ComanBtn'


const Ai_Powered = () => {
    return (
        <>
            <div className=' overflow-x-clip'>
                <div className=' max-w-[1181px] mx-auto mt-[23px] sm:mt-[80px] z-[1]  relative '>
                    <span className={` z-[-1]   absolute w-[262px] top-[190px] left-[31px] h-[262px]  blur-[180px] bg-[#02CDCF] rounded-[50%]`}>
                    </span>
                    <span className={` z-[-1] absolute w-[262px] top-[120px] right-[-171px] h-[262px]  blur-[150px] bg-[#02CDCF] rounded-[50%]`}>
                    </span>
                    <div className=' grid lg:grid-cols-2 sm:gap-[52px] px-3 justify-center items-center     '>
                        <div className="col-span-1">
                            <img src={Artboard} alt="Artboard" />
                        </div>
                        <div className="col-span-1 mt-[23px] sm:mt-[76px]">
                            <h2 className=' text-[40px] text-[#02CDCF] recharge font-bold leading-[50.4px]'>Ai-Powered Home Assistant</h2>
                            <p className='text-[16px] pt-[16px] font-normal font-poppins leading-[25.6px] text-[#B4B4B4] max-w-[517px]'>Nexai is an advanced AI-powered home assistant that brings the future to your fingertips. With its ability to engage in natural, fluent conversations in over 15 languages,</p>
                            <p className='text-[16px] pt-[6px] font-normal font-poppins leading-[25.6px] text-[#B4B4B4] max-w-[517px]'>Nexai offers an incredibly futuristic experience. It can take the initiative to ask about your day, schedule meetings, provide timely reminders</p>
                            <p className='text-[16px] pt-[6px] font-normal font-poppins leading-[25.6px] text-[#B4B4B4] max-w-[505px]'>assist with cooking by suggesting ingredients, track your fitness and nutrition goals, and even handle bill payments.,</p>
                            <div className='pt-[40px]'>
                                <ComanBtn text='Learn More' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Ai_Powered