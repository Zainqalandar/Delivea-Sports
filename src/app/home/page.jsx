import AboutUs from '@/components/about-us';
import Footer from '@/components/footer';
import HeroSection from '@/components/hero-section';
// import MultipleItems from '@/components/new-products';
import OurLocation from '@/components/our-location';
import OurServices from '@/components/our-services/page';
import WhyUs from '@/components/why-us';
import React from 'react';

const DelvieaSports = () => {
	return (
		<>

			
            <HeroSection />
            {/* <MultipleItems /> */}
			<OurServices />
			<AboutUs />
			<WhyUs />
			<OurLocation />
			<Footer />
		</>
	);
};

export default DelvieaSports;
