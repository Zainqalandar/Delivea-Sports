import React from 'react';
import Image from 'next/image';
import './OurServices.css'; // Import the CSS file

const services = [
    {
        src: '/delivea-photos/i1.jpg',
        alt: 'wheat flour grinding',
        title: 'Boxing and MMA Gear Manufacturing',
        description: 'We specialize in manufacturing and exporting high-quality boxing and MMA gear worldwide. Your custom logos and designs are always welcome. Contact us today to create gear tailored to your brand. Call & WhatsApp: +92 344 6377486, Sialkot, Pakistan.',
    },
    {
        src: '/delivea-photos/i2.jpg',
        alt: 'Coffee',
        title: 'Gram Flour Grinding',
        description: 'Our gram flour is perfect for a variety of uses, including baking, cooking, and making snacks. It is also a good source of protein and fiber. Our gram flour grinding service is a convenient and affordable way to get the freshest gram flour possible.',
    },
    {
        src: '/delivea-photos/i3.jpg',
        alt: 'Coffee',
        title: 'Jowar Flour Grinding',
        description: 'Our jowar grinding service is a convenient and affordable way to get fresh, high-quality jowar flour. We use state-of-the-art equipment to grind jowar into a fine powder, which is perfect for making roti, bread, and other dishes.',
        details: 'Our jowar flour is also a good source of protein and fiber, making it a healthy choice for your family.',
    },
    {
        src: '/delivea-photos/i4.jpg',
        alt: 'Coffee',
        title: 'Chilli pounding',
        description: 'We specialize in the production of high-quality chili powder. Our chili powder is made from the finest, freshest chilies, and we use traditional pounding methods to ensure that our chili powder retains its full flavor and aroma.',
        details: 'We offer a variety of chili powder products, including mild, medium, and hot. We also offer custom blends to meet the specific needs of our customers.',
    },
    {
        src: '/delivea-photos/i5.jpg',
        alt: 'Coffee',
        title: 'Flavoured Spaghetti',
        description: 'Bappa Flour Mill offers a variety of flavored spaghetti dishes that are sure to tantalize your taste buds. We use only the freshest ingredients. Our flavors include: Mango, spinach.',
        special: true,
    },
    {
        src: '/delivea-photos/i6.jpg',
        alt: 'papad',
        title: 'Rice Papad',
        description: 'Our company produces high-quality rice papad that is made with the finest ingredients. We use traditional methods to make our papad, which gives it a unique flavor and texture. Our papad is also gluten-free and vegan.',
        details: 'We offer a variety of rice papad flavors, including plain, salted, spicy, and flavored. We also offer a variety of sizes and shapes to choose from. Our papad is available in bulk or in individual packages.',
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