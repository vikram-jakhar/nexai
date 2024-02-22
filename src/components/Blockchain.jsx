import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import RightE from '../assets/img/RightEllipse.webp'
import LeftE from '../assets/img/LeftEllipse.webp'


const Blockchain = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3.3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1380,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };
    return (
        <>
            <div className='mt-[34px] sm:mt-[100px] lg:mt-[160px] max-w-[1920px] mx-auto px-3 relative z-[1] overflow-x-clip'>
                <span className=" absolute right-[-143px] top-[-123px] ">
                    <img src={RightE} alt="RightE" className=" opacity-[0.5]  w-[229px] h-[226.71px] rounded-[132px]" />
                </span>
                <span className={`   z-[-1] absolute w-[262px] top-[12px] right-[-131px] h-[262px]  blur-[200px] bg-[#02CDCF] rounded-[50%]`}>
                </span>
                <span className={`   z-[-1] absolute w-[262px] bottom-[-145px] right-[-131px] h-[262px]  blur-[200px] bg-[#02CDCF] rounded-[50%]`}>
                </span>
                <span className={`   z-[-1] absolute w-[262px] top-[120px] left-[-91px] h-[262px]  blur-[200px] bg-[#02CDCF] rounded-[50%]`}>
                </span>
                <span className=" absolute z-[-1] left-[-143px] bottom-[-143px] ">
                    <img src={LeftE} alt="LeftE" className=" opacity-[0.5] w-[229px] h-[226.71px] rounded-[132px]" />
                </span>
                <h2 className='text-[28px] sm:text-[40px] text-[#02CDCF] recharge font-bold leading-[30px] sm:leading-[50.4px] text-center'>
                    Blockchain & AI technology
                </h2>
                <p className=' text-[16px] mt-[16px] text-[#B4B4B4] font-poppins font-normal text-center m-auto max-w-[997px]'>Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</p>
                <p className='text-[20px] mt-[6px] md:mt-[96px] text-white leading-[20px] sm:leading-[32px] text-center m-auto max-w-[684px] recharge font-bold'>By building the software on blockchain, Nexai provides the following advantages</p>
                <div
                    data-aos="zoom-in"
                    className=" sm:pb-[100px] pb-3 mx-auto lg:mx-0 lg:ms-auto min-[1440px]:max-w-[1440px] max-w-[1264px] pt-[12px] sm:pt-[60px]"
                >
                    <Slider {...settings}>
                        <div className=" !flex justify-center">

                            <div className=" bg-[url(../src/assets//img/sliderbgimg.webp)] bg-no-repeat bg-center flex flex-col items-center justify-center max-w-full w-[350px] h-[365px]">
                                <div className=" w-[58px] h-[58px] flex flex-col items-center justify-center rounded-full text-white   circle-shadow text-center">
                                    <p className=" font-bold recharge text-[32px] leading-[51px]">
                                        1
                                    </p>
                                </div>
                                <div>
                                    <p className="font-bold pt-[30px] recharge text-[20px] leading-[32px] text-[#fff] text-center max-w-[212px] mx-auto">
                                        Security and Privacy
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className=" !flex justify-center min-[700px]:pt-[50px]">
                            <div className=" bg-[url(../src/assets//img/sliderbgimg.webp)] bg-no-repeat bg-center flex flex-col items-center justify-center max-w-full w-[350px] h-[365px]">
                                <div className=" w-[58px] h-[58px] flex flex-col items-center justify-center rounded-full text-white  circle-shadow text-center">
                                    <p className=" font-bold recharge text-[32px] leading-[51px]">
                                        2
                                    </p>
                                </div>
                                <div>
                                    <p className="font-bold recharge pt-[30px] text-[20px] leading-[32px] text-[#fff] text-center max-w-[212px] mx-auto">
                                        Transparent and Reliable Data Management
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" !flex justify-center">
                            <div className=" bg-[url(../src/assets//img/sliderbgimg.webp)] bg-no-repeat bg-center flex flex-col items-center justify-center max-w-full w-[350px] h-[365px]">
                                <div className=" w-[58px] h-[58px] flex flex-col items-center justify-center rounded-full text-white  circle-shadow text-center">
                                    <p className=" font-bold recharge text-[32px] leading-[51px]">
                                        3
                                    </p>
                                </div>
                                <div>
                                    <p className="font-bold recharge pt-[30px] text-[20px] leading-[32px] text-[#fff] text-center max-w-[212px] mx-auto">
                                        Self-learning and Personalization
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="!flex justify-center min-[700px]:pt-[50px]">
                            <div className=" bg-[url(../src/assets//img/sliderbgimg.webp)] bg-no-repeat bg-center flex flex-col items-center justify-center max-w-full w-[350px] h-[365px]">
                                <div className=" w-[58px] h-[58px] flex flex-col items-center justify-center rounded-full text-white  circle-shadow text-center">
                                    <p className=" font-bold recharge text-[32px] leading-[51px]">
                                        4
                                    </p>
                                </div>
                                <div>
                                    <p className="font-bold recharge text-[20px] leading-[32px] text-[#fff] text-center max-w-[212px] mx-auto pt-[30px]">
                                        Automated and Transparent Transactions
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

        </>
    )
}

export default Blockchain