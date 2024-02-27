import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const AndMore = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };
    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        rtl: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };
    const settings3 = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },

            {
                breakpoint: 600,
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
            <div className='sm:mt-[100px]  max-w-[1920px] mx-auto lg:mt-[160px] px-3' id="about">
                <h2 className='text-[28px] sm:text-[40px] text-[#02CDCF] recharge font-bold sm:leading-[50.4px] text-center'>
                    NexAi does all this. And more.
                </h2>
                <p className=' text-[16px] mt-[16px] text-[#B4B4B4] font-poppins font-normal leading-[25.6px] text-center m-auto max-w-[992px] mb-[12px] sm:mb-[70px]'>Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</p>
                <Slider {...settings}>
                    <div className=" px-3 py-3">
                        <div className="px-[43px] h-[220px] shadow-[0px_4px_20px_0px_rgba(2,205,207,0.16)] max-w-full flex items-center justify-center bg-[#090909] rounded-[16px]">
                            <p className=" font-bold text-[24px] leading-[38px] recharge text-white text-center">
                                NexAi, Turn on light
                            </p>
                        </div>
                    </div>
                    <div className=" px-3 py-3">
                        <div className="px-[43px] h-[220px] shadow-[0px_4px_20px_0px_rgba(2,205,207,0.16)] max-w-full flex items-center justify-center bg-[#090909] rounded-[16px]">
                            <p className=" font-bold text-[24px] leading-[38px] recharge text-white text-center">
                                NexAi, set alarm of 5:00 am{" "}
                            </p>
                        </div>
                    </div>
                    <div className=" px-3 py-3">
                        <div className="px-[43px] h-[220px] shadow-[0px_4px_20px_0px_rgba(2,205,207,0.16)] max-w-full flex items-center justify-center bg-[#090909] rounded-[16px]">
                            <p className=" font-bold text-[24px] leading-[38px] recharge text-white text-center">
                                NexAi, measure this table
                            </p>
                        </div>
                    </div>
                    <div className=" px-3 py-3">
                        <div className="px-[43px] h-[220px] shadow-[0px_4px_20px_0px_rgba(2,205,207,0.16)] max-w-full flex items-center justify-center bg-[#090909] rounded-[16px]">
                            <p className=" font-bold text-[24px] leading-[38px] recharge text-white text-center">
                                NexAi, Turn on music
                            </p>
                        </div>
                    </div>
                </Slider>
                <Slider {...settings2}>
                    <div className=" px-3 py-3">
                        <div className="px-[43px] h-[220px] shadow-[0px_4px_20px_0px_rgba(2,205,207,0.16)] max-w-full flex items-center justify-center bg-[#090909] rounded-[16px]">
                            <p className=" font-bold text-[24px] leading-[38px] recharge text-white text-center">
                                NexAi, Turn on light
                            </p>
                        </div>
                    </div>
                    <div className=" px-3 py-3">
                        <div className="px-[43px] h-[220px] shadow-[0px_4px_20px_0px_rgba(2,205,207,0.16)] max-w-full flex items-center justify-center bg-[#090909] rounded-[16px]">
                            <p className=" font-bold text-[24px] leading-[38px] recharge text-white text-center">
                                NexAi, set alarm of 5:00 am{" "}
                            </p>
                        </div>
                    </div>
                    <div className=" px-3 py-3">
                        <div className="px-[43px] h-[220px] shadow-[0px_4px_20px_0px_rgba(2,205,207,0.16)] max-w-full flex items-center justify-center bg-[#090909] rounded-[16px]">
                            <p className=" font-bold text-[24px] leading-[38px] recharge text-white text-center">
                                NexAi, measure this table
                            </p>
                        </div>
                    </div>
                    <div className=" px-3 py-3">
                        <div className="px-[43px] h-[220px] shadow-[0px_4px_20px_0px_rgba(2,205,207,0.16)] max-w-full flex items-center justify-center bg-[#090909] rounded-[16px]">
                            <p className=" font-bold text-[24px] leading-[38px] recharge text-white text-center">
                                NexAi, Turn on music
                            </p>
                        </div>
                    </div>
                </Slider>
                <Slider {...settings3}>
                    <div className=" px-3 py-3">
                        <div className="px-[43px] h-[220px] shadow-[0px_4px_20px_0px_rgba(2,205,207,0.16)] max-w-full flex items-center justify-center bg-[#090909] rounded-[16px]">
                            <p className=" font-bold text-[24px] leading-[38px] recharge text-white text-center">
                                NexAi, Turn on light
                            </p>
                        </div>
                    </div>
                    <div className=" px-3 py-3">
                        <div className="px-[43px] h-[220px] shadow-[0px_4px_20px_0px_rgba(2,205,207,0.16)] max-w-full flex items-center justify-center bg-[#090909] rounded-[16px]">
                            <p className=" font-bold text-[24px] leading-[38px] recharge text-white text-center">
                                NexAi, set alarm of 5:00 am{" "}
                            </p>
                        </div>
                    </div>
                    <div className=" px-3 py-3">
                        <div className="px-[43px] h-[220px] shadow-[0px_4px_20px_0px_rgba(2,205,207,0.16)] max-w-full flex items-center justify-center bg-[#090909] rounded-[16px]">
                            <p className=" font-bold text-[24px] leading-[38px] recharge text-white text-center">
                                NexAi, measure this table
                            </p>
                        </div>
                    </div>
                    <div className=" px-3 py-3">
                        <div className="px-[43px] h-[220px] shadow-[0px_4px_20px_0px_rgba(2,205,207,0.16)] max-w-full flex items-center justify-center bg-[#090909] rounded-[16px]">
                            <p className=" font-bold text-[24px] leading-[38px] recharge text-white text-center">
                                NexAi, Turn on music
                            </p>
                        </div>
                    </div>
                </Slider>

            </div>
        </>
    )
}


export default AndMore