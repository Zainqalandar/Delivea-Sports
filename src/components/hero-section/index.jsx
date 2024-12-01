'use client';
import React from 'react';
import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000, // 2 seconds
    };

    return (
        <div className="slider-container relative w-full">
            <Slider {...settings}>
                <div className="relative h-56 md:h-96">
                    <img
                        src="/banner-images/t5.jpg"
                        className="absolute block w-full h-full object-cover"
                        alt="Slide 1"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-2">
                        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                                Better Data
                            </span>{' '}
                            Scalable AI.
                        </h1>
                    </div>
                </div>
                <div className="relative h-56 md:h-96">
                    <img
                        src="/banner-images/t1.jpg"
                        className="absolute block w-full h-full object-cover"
                        alt="Slide 2"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-2">
                    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Get back to growth with <span class="text-blue-600 dark:text-blue-500">the world's #1</span> CRM.</h1>
                    </div>
                </div>
                <div className="relative h-56 md:h-96">
                    <img
                        src="/banner-images/t2.jpg"
                        className="absolute block w-full h-full object-cover"
                        alt="Slide 3"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white p-2">
                    <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Regain <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">control</mark> over your days</h1>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default HeroSection;