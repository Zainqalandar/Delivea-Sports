import AboutUs from '@/components/about-us';
import Banner from '@/components/Banner';
import CenterBanner from '@/components/center-banner';
import Footer from '@/components/footer';
// import HeroSection from '@/components/hero-section';
import Navbar from '@/components/Navbar';
// import MultipleItems from '@/components/new-products';
import OurLocation from '@/components/our-location';
import OurServices from '@/components/our-services/page';
import WhyUs from '@/components/why-us';
import React from 'react';

const DelvieaSports = () => {
	return (
		<>
			<Banner />
            <Navbar />
            {/* <HeroSection />
            <MultipleItems /> */}
			<CenterBanner />
			<OurServices />
			<AboutUs />
			<WhyUs />
			<OurLocation />
			<Footer />
		</>
	);
};

export default DelvieaSports;
