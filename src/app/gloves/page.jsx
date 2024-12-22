import Gallery from '@/components/gloves';
import React from 'react';

const Gloves = () => {
	const shirtsData = [
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
	];
	return (
		<>
			<Gallery cardsData={shirtsData} />
		</>
	);
};

export default Gloves;
