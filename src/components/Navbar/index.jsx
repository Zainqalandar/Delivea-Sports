'use client';
import React from 'react';
import AcccountInfo from './account-info';
import MyCart from './my-cart';
import DeliveaLogo from './delivea-logo';
import ListItemsLg from './list-items-lg';
import ListItemsSm from './list-items-sm';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(true);
	return (
		<nav className="bg-[rgb(82 82 88)] dark:bg-gray-800 antialiased">
			<div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-8">
						<DeliveaLogo />
						{/* For Large Devices */}
						<ListItemsLg />
					</div>
					<div className="flex relative items-center lg:space-x-2">
						<MyCart />
						<AcccountInfo />
						<button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
							type="button"
							data-collapse-toggle="ecommerce-navbar-menu-1"
							aria-controls="ecommerce-navbar-menu-1"
							aria-expanded="false"
							className="inline-flex lg:hidden items-center justify-center hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 p-2 text-gray-900 dark:text-white"
						>
							<span className="sr-only">Open Menu</span>
							<svg
								className="w-5 h-5"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								width={24}
								height={24}
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeWidth={2}
									d="M5 7h14M5 12h14M5 17h14"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div
					id="ecommerce-navbar-menu-1"
					className={`bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 ${isMenuOpen && "hidden"} px-4 mt-4`}
				>
					<ListItemsSm />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
