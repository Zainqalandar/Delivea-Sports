import React from 'react';

const CenterBanner = () => {
    return (
        <div className="relative w-full h-72 md:h-96 lg:h-128 bg-gray-200 flex items-center justify-center">
            <img
                src="/banner-images/t3.jpg"
                alt="Banner"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white p-4">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Welcome to Our Website
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl">
                        We provide the best services to help you grow your business.
                    </p>
                    <button className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CenterBanner;