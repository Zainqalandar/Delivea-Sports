import React from 'react';

const Card = ({ imgSrc, isNew, title, description }) => (
    <div className="relative bg-white border rounded-lg shadow-md transform transition duration-500 hover:scale-105">
        {isNew && (
            <div className="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200 w-6 h-6 text-center">
                N
            </div>
        )}
        <div className="p-2 flex justify-center">
            <a href="#">
                <img className="rounded-md" src={imgSrc} loading="lazy" />
            </a>
        </div>
        <div className="px-4 pb-3">
            <div>
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight hover:text-violet-800 text-gray-900">
                        {title}
                    </h5>
                </a>
                <p className="antialiased text-gray-600 text-sm break-all">
                    {description}
                </p>
               
            </div>
        </div>
    </div>
);

const Gallery = ({cardsData}) => {

    return (
        <div className="h-full flex w-full justify-center items-center p-2">
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-5">
                {cardsData.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </div>
    );
};

export default Gallery;