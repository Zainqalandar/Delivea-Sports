'use client';
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: "10px" }}
            onClick={onClick}
        >
            <i className="fas fa-chevron-right"></i>
        </div>
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "10px" }}
            onClick={onClick}
        >
            <i className="fas fa-chevron-left"></i>
        </div>
    );
};

const images = [
    { src: "/new-arrival/a1.png", alt: "Placeholder 1" },
    { src: "/new-arrival/a2.jpg", alt: "Placeholder 2" },
    { src: "/new-arrival/a3.jpg", alt: "Placeholder 3" },
    { src: "/new-arrival/a4.jpg", alt: "Placeholder 4" },
    { src: "/new-arrival/a5.jpg", alt: "Placeholder 5" },
    { src: "/new-arrival/a6.jpg", alt: "Placeholder 6" },
    { src: "/new-arrival/a7.jpg", alt: "Placeholder 7" },
    { src: "/new-arrival/a8.jpg", alt: "Placeholder 8" },
    { src: "/new-arrival/a9.jpg", alt: "Placeholder 9" },
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
        {
            breakpoint: 768, // screen width at which the settings below will apply
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                nextArrow: <NextArrow />,
                prevArrow: <PrevArrow />
            }
        }
    ]
};

const MultipleItems = () => (
    <div className="slider-container p-4">
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index} className="p-2">
                    <img className="w-full h-auto rounded-lg shadow-lg" src={image.src} alt={image.alt} />
                </div>
            ))}
        </Slider>
    </div>
);

export default MultipleItems;