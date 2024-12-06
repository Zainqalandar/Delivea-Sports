import React from 'react';

const Card = ({ imgSrc, isNew, readTime, title, description }) => (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="relative">
            <img className="w-full h-48 object-cover" src={imgSrc} />
            {isNew && (
                <div className="absolute top-0 right-0 bg-indigo-500 text-white font-bold px-2 py-1 m-2 rounded-md">
                    New
                </div>
            )}
            <div className="absolute bottom-0 right-0 bg-gray-800 text-white px-2 py-1 m-2 rounded-md text-xs">
                {readTime}
            </div>
        </div>
        <div className="p-4">
            <div className="text-lg font-medium text-gray-800 mb-2">{title}</div>
            <p className="text-gray-500 text-sm">{description}</p>
        </div>
    </div>
);

const GlovesBox = () => {
    const cardsData = [
        {
            imgSrc: 'https://via.placeholder.com/600x360',
            isNew: true,
            readTime: '3 min read',
            title: 'Exploring New Horizons',
            description:
                'Discover how exploring new horizons can shape your perspective and broaden your understanding of the world around you.',
        },
        {
            imgSrc: 'https://via.placeholder.com/600x360',
            isNew: false,
            readTime: '5 min read',
            title: 'The Art of Minimalism',
            description:
                'Learn how adopting a minimalist lifestyle can simplify your life and bring more clarity and focus to your daily routines.',
        },
        {
            imgSrc: 'https://via.placeholder.com/600x360',
            isNew: true,
            readTime: '2 min read',
            title: 'Quick Productivity Hacks',
            description:
                'Boost your productivity instantly with these quick and effective hacks designed for busy individuals.',
        },
        {
            imgSrc: 'https://via.placeholder.com/600x360',
            isNew: false,
            readTime: '4 min read',
            title: 'The Future of Technology',
            description:
                'Dive into the emerging trends and innovations shaping the future of technology in various industries.',
        },
        {
            imgSrc: 'https://via.placeholder.com/600x360',
            isNew: true,
            readTime: '6 min read',
            title: 'Healthy Living Tips',
            description:
                'Simple and actionable tips to help you maintain a healthy and balanced lifestyle every day.',
        },
        {
            imgSrc: 'https://via.placeholder.com/600x360',
            isNew: false,
            readTime: '3 min read',
            title: 'Travel on a Budget',
            description:
                'Uncover the secrets to traveling the world without breaking the bank and creating unforgettable memories.',
        },
        {
            imgSrc: 'https://via.placeholder.com/600x360',
            isNew: true,
            readTime: '7 min read',
            title: 'Mastering Public Speaking',
            description:
                'Transform your fear of public speaking into confidence with these practical and proven strategies.',
        },
        {
            imgSrc: 'https://via.placeholder.com/600x360',
            isNew: false,
            readTime: '5 min read',
            title: 'The Rise of E-commerce',
            description:
                'Explore how e-commerce is revolutionizing the retail industry and changing the way consumers shop.',
        },
        {
            imgSrc: 'https://via.placeholder.com/600x360',
            isNew: true,
            readTime: '4 min read',
            title: 'Sustainable Living Ideas',
            description:
                'Incorporate sustainable practices into your daily routine to make a positive impact on the planet.',
        },
        {
            imgSrc: 'https://via.placeholder.com/600x360',
            isNew: false,
            readTime: '3 min read',
            title: 'Time Management Strategies',
            description:
                'Effective strategies to manage your time better and achieve more without feeling overwhelmed.',
        }
    ];
    

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10 md:px-20">
            {cardsData.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    );
};

export default GlovesBox;