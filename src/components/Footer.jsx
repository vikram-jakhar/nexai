import React from 'react'
import { FaceBook, Teligram, Twitter } from './Icon'

const Footer = () => {
    return (
        <>
            <div className='bg-[url(../src/assets/img/footerBgimg.webp)] bg-cover bg-center bg-no-repeat px-3' id='tokens'>
                <div className='max-w-[1140px] mx-auto '>
                    <div className='grid max-[822px]:grid-cols-2 grid-cols-3 lg:grid-cols-4  lg:flex !justify-between '>
                        <div className='  col-span-2 min-h-[286px] lg:mb-[114px] flex flex-col lg:mt-[31px] justify-center   lg:justify-end'>
                            <p className='recharge text-[16px] max-w-[356px] text-[#B4B4B4] font-bold leading-[25.6px]'>Nullam viverra natoque amet et sed scelerisque viverra fringilla platea. Ullamcorper.</p>
                            <div className='flex gap-[12px] mt-[20px]'>
                                <span className="className">
                                    <a href="https://www.facebook.com/" target='_blank'>
                                        <FaceBook />
                                    </a>
                                </span>
                                <span className="w-[38px] h-[38px] rounded-[50px] flex justify-center items-center border-[2.5px] border-[#02CDCF] bg-transparent border-solid">
                                    <a href="https://www.twitter.com/" target='_blank'>
                                        <Twitter />
                                    </a>
                                </span>
                                <span className="w-[38px] h-[38px] rounded-[50px] flex justify-center items-center border-[2.5px] border-[#02CDCF] bg-transparent border-solid">
                                    <a href="https://web.telegram.org/a/" target='_blank'>
                                        <Teligram />
                                    </a>
                                </span>

                            </div>
                        </div>
                        <div className=' max-[822px]:col-span-2 flex max-[822px]:justify-between max-[442px]:gap-[14px] max-[442px]:flex-col gap-[125px] justify-end max-[822px]:mt-0 mt-[145px] mb-[30px] '>
                            <div className='col-span-1 flex justify-end flex-col'>
                                <ul className='max-w-[125px]'>
                                    <li className='recharge text-[18px] fony-bold leading-[21.6px] text-center text-white'>Quick links</li>
                                    <li className='recharge text-[16px] pt-[20px] fony-bold leading-[19.2px]  text-[#B6B8B8] hover:text-[white] transition duration-300 '><a className='relative after:absolute after:bg-white after:h-[2px] duration-500 after:hover:w-full after:bottom-[-4px] after:rounded-[23px] after:left-0 after:w-0 after:hover:duration-300 after:duration-300' href="#homepage">Home</a></li>
                                    <li className='recharge text-[16px] pt-[20px] fony-bold leading-[19.2px]  text-[#B6B8B8] hover:text-[white] transition duration-300 '><a className='relative after:absolute after:bg-white after:h-[2px] duration-500 after:hover:w-full after:bottom-[-4px] after:rounded-[23px] after:left-0 after:w-0 after:hover:duration-300 after:duration-300' href="#homepage">Features</a></li>
                                    <li className='recharge text-[16px] pt-[20px] fony-bold leading-[19.2px]  text-[#B6B8B8] hover:text-[white] transition duration-300 '><a className='relative after:absolute after:bg-white after:h-[2px] duration-500 after:hover:w-full after:bottom-[-4px] after:rounded-[23px] after:left-0 after:w-0 after:hover:duration-300 after:duration-300' href="#homepage">Marketplace</a></li>
                                    <li className='recharge text-[16px] pt-[20px] fony-bold leading-[19.2px]  text-[#B6B8B8] hover:text-[white] transition duration-300 '><a className='relative after:absolute after:bg-white after:h-[2px] duration-500 after:hover:w-full after:bottom-[-4px] after:rounded-[23px] after:left-0 after:w-0 after:hover:duration-300 after:duration-300' href="#homepage">Tokens</a></li>
                                    <li className='recharge text-[16px] pt-[20px] fony-bold leading-[19.2px]  text-[#B6B8B8] hover:text-[white] transition duration-300 '><a className='relative after:absolute after:bg-white after:h-[2px] duration-500 after:hover:w-full after:bottom-[-4px] after:rounded-[23px] after:left-0 after:w-0 after:hover:duration-300 after:duration-300' href="#homepage">NexChat</a></li>
                                    <li className='recharge text-[16px] pt-[20px] fony-bold leading-[19.2px]  text-[#B6B8B8] hover:text-[white] transition duration-300 '><a className='relative after:absolute after:bg-white after:h-[2px] duration-500 after:hover:w-full after:bottom-[-4px] after:rounded-[23px] after:left-0 after:w-0 after:hover:duration-300 after:duration-300' href="#homepage">About</a></li>
                                </ul>
                            </div>
                            <div className='col-span-1 '>
                                <ul className='max-w-[145px] max-[442px]:mt-[20px]'>
                                    <li className='recharge text-[18px] fony-bold leading-[21.6px] text-center text-white'>Information's</li>
                                    <li className='recharge text-[16px] pt-[20px] fony-bold leading-[19.2px]  text-[#B6B8B8] hover:text-[white] transition duration-300 '><a className='relative after:absolute after:bg-white after:h-[2px] duration-500 after:hover:w-full after:bottom-[-4px] after:rounded-[23px] after:left-0 after:w-0 after:hover:duration-300 after:duration-300' href="#homepage">Contact</a></li>
                                    <li className='recharge text-[16px] pt-[20px] fony-bold leading-[19.2px]  text-[#B6B8B8] hover:text-[white] transition duration-300 '><a className='relative after:absolute after:bg-white after:h-[2px] duration-500 after:hover:w-full after:bottom-[-4px] after:rounded-[23px] after:left-0 after:w-0 after:hover:duration-300 after:duration-300' href="#homepage">Phone</a></li>
                                    <li className='recharge text-[16px] pt-[20px] fony-bold leading-[19.2px]  text-[#B6B8B8] hover:text-[white] transition duration-300 '><a className='relative after:absolute after:bg-white after:h-[2px] duration-500 after:hover:w-full after:bottom-[-4px] after:rounded-[23px] after:left-0 after:w-0 after:hover:duration-300 after:duration-300' href="#homepage">terms</a></li>
                                    <li className='recharge text-[16px] pt-[20px] fony-bold leading-[19.2px] hover:text-[white] transition duration-300 text-[#B6B8B8]'><a className='relative after:absolute after:bg-white after:h-[2px] duration-500 after:hover:w-full after:bottom-[-4px] after:rounded-[23px] after:left-0 after:w-0 after:hover:duration-300 after:duration-300' href="#homepage">Privacy</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className='border-t-2 border-solid border-[#B6B8B8]'>
                        <p className='recharge text-[16px] leading-[19.2px] py-[20px] font-bold text-[#B6B8B8] text-center'>@Copyright.nexai</p>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Footer