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

const GlovesBox = () => {
    const cardsData = [
        {
            imgSrc: '/t-shirts/1.png',
            isNew: true,
            title: 'Exploring New Horizons',
            description:
                'Discover how exploring new horizons can shape your perspective and broaden your understanding of the world around you.',
        },
        {
            imgSrc: '/t-shirts/2.png',
            isNew: false,
            title: 'The Art of Minimalism',
            description:
                'Learn how adopting a minimalist lifestyle can simplify your life and bring more clarity and focus to your daily routines.',
        },
        {
            imgSrc: '/t-shirts/3.png',
            isNew: true,
            title: 'Quick Productivity Hacks',
            description:
                'Boost your productivity instantly with these quick and effective hacks designed for busy individuals.',
        },
        {
            imgSrc: '/t-shirts/4.png',
            isNew: false,
            title: 'The Future of Technology',
            description:
                'Dive into the emerging trends and innovations shaping the future of technology in various industries.',
        },
        {
            imgSrc: '/t-shirts/5.png',
            isNew: true,
            title: 'Healthy Living Tips',
            description:
                'Simple and actionable tips to help you maintain a healthy and balanced lifestyle every day.',
        },
        {
            imgSrc: '/t-shirts/6.png',
            isNew: false,
            title: 'Travel on a Budget',
            description:
                'Uncover the secrets to traveling the world without breaking the bank and creating unforgettable memories.',
        },
        {
            imgSrc: '/t-shirts/7.png',
            isNew: true,
            title: 'Mastering Public Speaking',
            description:
                'Transform your fear of public speaking into confidence with these practical and proven strategies.',
        },
        {
            imgSrc: '/t-shirts/8.png',
            isNew: false,
            title: 'The Rise of E-commerce',
            description:
                'Explore how e-commerce is revolutionizing the retail industry and changing the way consumers shop.',
        },
        {
            imgSrc: '/t-shirts/9.png',
            isNew: true,
            title: 'Sustainable Living Ideas',
            description:
                'Incorporate sustainable practices into your daily routine to make a positive impact on the planet.',
        },
        {
            imgSrc: '/t-shirts/10.png',
            isNew: false,
            title: 'Time Management Strategies',
            description:
                'Effective strategies to manage your time better and achieve more without feeling overwhelmed.',
        }
    ];

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

export default GlovesBox;