import React from 'react';
import Image from 'next/image';
import './OurServices.css'; // Import the CSS file

const services = [
    {
        src: '/fighting-gloves/3.png',
        alt: 'wheat flour grinding',
        title: 'Boxing and MMA Gear Manufacturing',
        description: 'We specialize in manufacturing and exporting high-quality boxing and MMA gear worldwide. Your custom logos and designs are always welcome. Contact us today to create gear tailored to your brand. Call & WhatsApp: +923007153684, Sialkot, Pakistan.',
    },
    {
        src: '/fighting-gloves/2.png',
        alt: 'Coffee',
        title: 'Boxing and MMA Gear Manufacturing',
        description: 'We specialize in manufacturing and exporting high-quality boxing and MMA gear worldwide. Your custom logos and designs are always welcome. Contact us today to create gear tailored to your brand. Call & WhatsApp: +923007153684, Sialkot, Pakistan.',
    },
    {
        src: '/fighting-gloves/4.png',
        alt: 'Coffee',
        title: 'Boxing and MMA Gear Manufacturing',
        description: 'We specialize in manufacturing and exporting high-quality boxing and MMA gear worldwide. Your custom logos and designs are always welcome. Contact us today to create gear tailored to your brand. Call & WhatsApp: +923007153684, Sialkot, Pakistan.',
        // details: 'Our jowar flour is also a good source of protein and fiber, making it a healthy choice for your family.',
    },
    {
        src: '/delivea_hoodies/1.png',
        alt: 'Coffee',
        title: 'Hoodies Manufacturing',
        description: 'We specialize in manufacturing and exporting high-quality boxing and MMA gear worldwide. Your custom logos and designs are always welcome. Contact us today to create gear tailored to your brand. Call & WhatsApp: +923007153684, Sialkot, Pakistan.',
        // details: 'We offer a variety of chili powder products, including mild, medium, and hot. We also offer custom blends to meet the specific needs of our customers.',
    },
    {
        src: '/delivea_hoodies/9.png',
        alt: 'Coffee',
        title: 'Hoodies Manufacturing',
        description: 'We specialize in manufacturing and exporting high-quality boxing and MMA gear worldwide. Your custom logos and designs are always welcome. Contact us today to create gear tailored to your brand. Call & WhatsApp: +923007153684, Sialkot, Pakistan.',
        special: true,
    },
    {
        src: '/delivea_hoodies/3.png',
        alt: 'papad',
        title: 'Hoodies Manufacturing',
        description: 'We specialize in manufacturing and exporting high-quality boxing and MMA gear worldwide. Your custom logos and designs are always welcome. Contact us today to create gear tailored to your brand. Call & WhatsApp: +923007153684, Sialkot, Pakistan.',
        // details: 'We offer a variety of rice papad flavors, including plain, salted, spicy, and flavored. We also offer a variety of sizes and shapes to choose from. Our papad is available in bulk or in individual packages.',
    },
];

const OurServices = () => {
    return (
        <section className="py-10" id="services">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                    Our Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-lg shadow-md overflow-hidden service-card ${service.special ? 'bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5' : ''}`}
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            {service.special && (
                                <div className="text-center text-white font-medium">
                                    Special product
                                </div>
                            )}
                            <Image
                                src={service.src}
                                alt={service.alt}
                                width={service.special ? 600 : 500}
                                height={256}
                                className={`w-full h-64 object-cover ${service.special ? 'rounded-t-lg' : ''}`}
                            />
                            <div className={`p-6 text-center ${service.special ? 'bg-white rounded-b-lg md:min-h-full' : ''}`}>
                                <h3 className="text-xl font-medium text-gray-800 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-gray-700 text-base">
                                    {service.description}
                                </p>
                                {service.details && (
                                    <details>
                                        <summary>Read More</summary>
                                        <p>{service.details}</p>
                                    </details>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;