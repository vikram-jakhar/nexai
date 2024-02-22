import React, { useState } from 'react'
import ComanBtn from './ComanBtn'
import bgimg from '../assets/img/bg-img.gif'

export const Header = () => {

    const [show, setShow] = useState(false)
    function MobView() {
        setShow(!show)
        if (show === false) {
            document.body.classList.add('max-lg:overflow-hidden')
        }
        else {
            document.body.classList.remove('max-lg:overflow-hidden')
        }
    }
    function closeNav() {
        setShow(false)
        document.body.classList.remove("max-lg:overflow-hidden")
    }
    return (
        <>

            <div className='max-w-[1380px] mx-auto relative z-[1]  '>

                <div className='pt-[1px] z-[1] relative bg-[url(./assets/img/header_img.webp)] bg-center bg-contain min-h-[466px] lg:min-h-[810px]  bg-no-repeat  max-sm:hidden '>
                    <span className=' z-[-1] absolute w-[262px] top-[120px] left-[-31px] h-[262px] opacity-[30%] blur-[100px] bg-[#02CDCF] rounded-[50%]'>
                    </span>
                    <div className=' max-w-[1120px] sm:mt-[60px] flex justify-center flex-col  px-3 mx-auto'>
                        <div className='max-w-[1400px] '>
                            <nav className='flex py-[10px] w-full  items-center justify-between '>
                                <span></span>
                                <div className='flex lg:gap-[246px] max-lg:w-full justify-between  items-center'>
                                    <ul className={`${show === true ? "left-0" : "left-[-100%]"} mobileview flex gap-[20px] items-center`}>
                                        <li ><a onClick={closeNav} className='text-white font-poppins text-[16px] leading-[24px] font-normal text-center relative after:absolute hover:text-[#02CDCF] transition  after:bg-[#02CDCF] after:h-[2px] duration-500 after:hover:w-full after:bottom-[-4px] after:rounded-[23px] after:left-0 after:w-0 after:hover:duration-300 after:duration-300' href="#">Home</a></li>
                                        <li ><a onClick={closeNav} className='text-white font-poppins text-[16px] leading-[24px] font-normal text-center relative after:absolute hover:text-[#02CDCF] transition  after:bg-[#02CDCF] after:h-[2px] duration-500 after:hover:w-full after:bottom-[-4px] after:rounded-[23px] after:left-0 after:w-0 after:hover:duration-300 after:duration-300' href="#">Marketplace</a></li>
                                        <li ><a onClick={closeNav} className='text-white font-poppins text-[16px] leading-[24px] font-normal text-center relative after:absolute hover:text-[#02CDCF] transition  after:bg-[#02CDCF] after:h-[2px] duration-500 after:hover:w-full after:bottom-[-4px] after:rounded-[23px] after:left-0 after:w-0 after:hover:duration-300 after:duration-300' href="#">About</a></li>
                                        <li ><a onClick={closeNav} className='text-white font-poppins text-[16px] leading-[24px] font-normal text-center relative after:absolute hover:text-[#02CDCF] transition  after:bg-[#02CDCF] after:h-[2px] duration-500 after:hover:w-full after:bottom-[-4px] after:rounded-[23px] after:left-0 after:w-0 after:hover:duration-300 after:duration-300' href="#">NexChat</a></li>
                                        <li ><a onClick={closeNav} className='text-white font-poppins text-[16px] leading-[24px] font-normal text-center relative after:absolute hover:text-[#02CDCF] transition  after:bg-[#02CDCF] after:h-[2px] duration-500 after:hover:w-full after:bottom-[-4px] after:rounded-[23px] after:left-0 after:w-0 after:hover:duration-300 after:duration-300' href="#">Tokens</a></li>
                                    </ul>
                                    <ul>
                                        <li><a href="#"><ComanBtn text='Sign Up' /></a></li>
                                    </ul>
                                    <label className=" lg:hidden" onClick={MobView}>
                                        {show ? (
                                            <div className="z-20 relative cursor-pointer  ">
                                                <span className="flex bg-[#02CDCF]    absolute -left-7 duration-500 top-1 rotate-45 h-[2px] w-6"></span>
                                                <span className="flex bg-[#02CDCF]  absolute -left-7 duration-500 -rotate-45 h-[2px] w-6 mt-1"></span>
                                            </div>
                                        ) : (
                                            <div className="z-20 relative cursor-pointer group">
                                                <span className="flex bg-[#02CDCF]   h-[2px] duration-500 w-6"></span>
                                                <span className="flex bg-[#02CDCF]   h-[2px] duration-500 w-6 mt-2"></span>
                                                <span className="flex bg-[#02CDCF]  h-[2px] duration-500 w-6 mt-2"></span>
                                            </div>
                                        )}
                                    </label>
                                </div>
                            </nav>
                        </div>
                        <div className=' max-md:justify-center  inline-flex flex-col mt-[96px] max-md:text-center max-md:m-auto   '>
                            <h1 className=' text-[60px]  max-md:mt-[70px]  text-white max-w-[577px]  recharge font-normal leading-none md:leading-[75.6px]'><span className='text-[#02CDCF] font-bold neuropolitical'>Nexai</span> is an advanced AI-powered home assistant</h1>
                            <p className=' flex  lg:justify-start px-3 pt-[16px] font-poppins text-[16px] text-[#B2B8B9] max-[544px]'>Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla odio.</p>
                            <div className=' inline-block flex-col  mt-[41px]'>
                                <ComanBtn text='Know More' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-3 hidden max-sm:block'>
                <div className='max-w-[1240px] px-3 '>
                    <nav className='flex py-[10px] sm:mt-[50px] w-full items-center justify-between '>
                        <span></span>
                        <div className='flex lg:gap-[246px] max-lg:w-full justify-between items-center'>
                            <ul className={`${show === true ? "left-0" : "left-[-100%]"} mobileview flex gap-[20px] items-center`}>
                                <li ><a onClick={closeNav} className='text-white font-poppins text-[16px] leading-[24px] font-normal text-center' href="#">Home</a></li>
                                <li ><a onClick={closeNav} className='text-white font-poppins text-[16px] leading-[24px] font-normal text-center' href="#">Marketplace</a></li>
                                <li ><a onClick={closeNav} className='text-white font-poppins text-[16px] leading-[24px] font-normal text-center' href="#">About</a></li>
                                <li ><a onClick={closeNav} className='text-white font-poppins text-[16px] leading-[24px] font-normal text-center' href="#">NexChat</a></li>
                                <li ><a onClick={closeNav} className='text-white font-poppins text-[16px] leading-[24px] font-normal text-center' href="#">Tokens</a></li>
                            </ul>
                            <ul>
                                <li><a href="#"><ComanBtn text='Sign Up' /></a></li>
                            </ul>
                            <label className=" lg:hidden" onClick={MobView}>
                                {show ? (
                                    <div className="z-20 relative cursor-pointer  ">
                                        <span className="flex bg-white    absolute -left-7 duration-500 top-1 rotate-45 h-[2px] w-6"></span>
                                        <span className="flex bg-white  absolute -left-7 duration-500 -rotate-45 h-[2px] w-6 mt-1"></span>
                                    </div>
                                ) : (
                                    <div className="z-20 relative cursor-pointer group">
                                        <span className="flex bg-white   h-[2px] duration-500 w-6"></span>
                                        <span className="flex bg-white   h-[2px] duration-500 w-6 mt-2"></span>
                                        <span className="flex bg-white  h-[2px] duration-500 w-6 mt-2"></span>
                                    </div>
                                )}
                            </label>
                        </div>
                    </nav>
                </div>
                <div className='md:ps-[120px] relative z-[1] inline-flex flex-col   '>
                    <h1 className=' mt-[23px] sm:mt-[104px] md:text-[60px] text-[34px] text-white max-w-[577px]  recharge font-normal leading-none md:leading-[75.6px]'><span className='text-[#02CDCF] font-bold neuropolitical'>Nexai</span> is an advanced AI-powered home assistant</h1>
                    <p className=' flex  lg:justify-start justify-center  pt-[16px] font-poppins text-[16px] text-[#B2B8B9] max-[544px]'>Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla odio.</p>
                    <div className=' flex flex-col lg:justify-start justify-center mt-[23px]'>
                        <div>
                            <ComanBtn text='Know More' />
                        </div>
                    </div>
                </div>
                <div className=' mt-5' >
                    <img src={bgimg} alt="bgimg" className=' rounded-[23px]' />
                </div>
            </div>


        </>
    )
}
