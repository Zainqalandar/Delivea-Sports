import React from 'react';
import Image from 'next/image';
import './AboutUs.css'; // Import the CSS file

const AboutUs = () => {
    return (
        <>
            {/* about us */}
            <section className="bg-gray-100" id="aboutus">
                <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                        <div className="max-w-lg about-us-text">
                            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                                About Us
                            </h2>
                            <p className="mt-4 text-gray-600 text-lg">
                                Welcome to Delivea Sports, your trusted partner
                                in premium custom boxing gear and sportswear. We
                                specialize in crafting high-quality products
                                tailored to your unique needs and designs. From
                                professional boxing gloves with custom logos to
                                complete sports uniforms, we transform your
                                dream ideas into reality. Our expertise lies in
                                delivering durable leather products, stylish
                                boxing apparel, and bespoke uniforms that
                                combine functionality with exceptional
                                craftsmanship. At Delivea Sports, we pride
                                ourselves on offering comprehensive solutions to
                                meet all your requirements. Whether you need
                                custom cuts and sewing, personalized branding,
                                or specialized printing, we ensure precision and
                                quality at every step. Our advanced printing
                                techniques, including embroidery, screen
                                printing, DTF, DGT, puff printing, and puff
                                embroidery, bring your designs to life with
                                vibrant detail. We also provide packaging and
                                labeling services to enhance your brand&apos;s
                                presentation. We look forward to serving you!
                            </p>
                        </div>
                        <div className="mt-12 md:mt-0 about-us-image">
                            <Image
                                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                                alt="About Us Image"
                                width={500}
                                height={500}
                                className="object-cover rounded-lg shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;