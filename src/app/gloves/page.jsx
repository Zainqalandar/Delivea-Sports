import Gallery from '@/components/gloves';
import React from 'react';

const Gloves = () => {
	const glovesData = [
		{
			imgSrc: '/fighting-gloves/1.png',
			isNew: true,
			title: 'Adventure Awaits',
			description:
				'Gear up for your next adventure with this bold and inspiring design that captures the spirit of exploration.',
		},
		{
			imgSrc: '/fighting-gloves/2.png',
			isNew: false,
			title: 'Elegance Redefined',
			description:
				'A sleek and modern design for those who embrace simplicity and sophistication in every detail.',
		},
		{
			imgSrc: '/fighting-gloves/3.png',
			isNew: true,
			title: 'Work Hard, Dream Big',
			description:
				'Motivate yourself and others with this empowering logo that celebrates ambition and hard work.',
		},
		{
			imgSrc: '/fighting-gloves/4.png',
			isNew: false,
			title: 'Innovation Unleashed',
			description:
				'Showcase your passion for technology and creativity with a design that symbolizes innovation and growth.',
		},
		{
			imgSrc: '/fighting-gloves/5.png',
			isNew: true,
			title: 'Wellness Warrior',
			description:
				'Embrace a healthy lifestyle with this uplifting design that reminds you to prioritize self-care and wellness.',
		},
		{
			imgSrc: '/fighting-gloves/6.png',
			isNew: false,
			title: 'Wanderlust Vibes',
			description:
				'Express your love for travel and exploration with a design that captures the essence of adventure on a budget.',
		},
		{
			imgSrc: '/fighting-gloves/7.png',
			isNew: true,
			title: 'Speak with Confidence',
			description:
				'Unleash your inner speaker with a powerful logo that represents confidence and clarity in every word.',
		},
		{
			imgSrc: '/fighting-gloves/8.png',
			isNew: false,
			title: 'E-commerce Revolution',
			description:
				'Wear the future of retail with a dynamic design that highlights the impact of e-commerce on the world.',
		},
		{
			imgSrc: '/fighting-gloves/9.png',
			isNew: true,
			title: 'Eco-Friendly Living',
			description:
				'Promote sustainability with this thoughtful design that encourages mindful and green living choices.',
		},
		{
			imgSrc: '/fighting-gloves/10.png',
			isNew: false,
			title: 'Maximize Every Moment',
			description:
				'Stay on top of your game with a design that inspires effective time management and productivity.',
		},
		{
			imgSrc: '/fighting-gloves/11.png',
			isNew: false,
			title: 'Maximize Every Moment',
			description:
				'Stay on top of your game with a design that inspires effective time management and productivity.',
		},
	];
	return (
		<>
			<Gallery cardsData={glovesData} />
		</>
	);
};

export default Gloves;
