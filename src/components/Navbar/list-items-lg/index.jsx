import React from 'react';

const menuItems = [
	{ title: 'Home', href: '#' },
	{ title: 'Best Sellers', href: '#' },
	{ title: 'Gift Ideas', href: '#' },
	{ title: "Today's Deals", href: '#' },
	{ title: 'Sell', href: '#' },
];

const ListItemsLg = () => {
	return (
		<ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
			{menuItems.map((item, index) => (
				<li key={index} className="shrink-0">
					<a
						href={item.href}
						title={item.title}
						className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
					>
						{item.title}
					</a>
				</li>
			))}
		</ul>
	);
};

export default ListItemsLg;
