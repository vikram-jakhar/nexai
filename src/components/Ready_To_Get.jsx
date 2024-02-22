import React from 'react'
import ComanBtn from './ComanBtn'
import LeftE from '../assets/img/LeftEllipse.webp'

const Ready_To_Get = () => {
    return (
        <>
            <div className='relative overflow-x-clip'>
                <span className={`   absolute w-[262px] top-[220px] right-[-191px] h-[262px]  blur-[200px] bg-[#02CDCF] rounded-[50%]`}>
                </span>
                <span className={`   absolute w-[262px] top-[20px] left-[-171px] h-[262px]  blur-[150px] bg-[#02CDCF] rounded-[50%]`}>
                </span>
                <span className=" absolute  right-[-143px] top-[-50px] ">
                    <img src={LeftE} alt="LeftE" className=" opacity-[0.5]  w-[229px] h-[226.71px] rounded-[132px]" />
                </span>
                <div className='max-w-[1140px] mx-auto px-3 flex max-md:flex-col  justify-between items-center md:py-[100px]'>
                    <div>
                        <h2 className='sm:text-[40px] text-[28px] max-md:text-center text-[#02CDCF] recharge sm:leading-[52px] max-w-[517px] font-bold'>
                            <span className='text-white'>Ready to get started</span> Talk to us Today
                        </h2>
                    </div>
                    <div className='max-md:mt-[23px]'>
                        <ComanBtn text='Get Started' />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Ready_To_Get