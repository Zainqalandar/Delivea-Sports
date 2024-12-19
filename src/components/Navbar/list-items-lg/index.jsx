import React from 'react';
import Link from 'next/link';
import menuItems from '@/config/menuItems';



const ListItemsLg = () => {
	return (
		<ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
			{menuItems.map((item, index) => (
				<li key={index} className="shrink-0">
					<Link
						href={item.href}
						title={item.title}
						className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
					>
						{item.title}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default ListItemsLg;
