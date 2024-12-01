import React from 'react';
import AcccountInfo from './account-info';
import MyCart from './my-cart';
import DeliveaLogo from './delivea-logo';
import ListItemsLg from './list-items-lg';
import ListItemsSm from './list-items-sm';

const Navbar = () => {
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
                    </div>
                </div>
                <div
                    id="ecommerce-navbar-menu-1"
                    className="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 hidden px-4 mt-4"
                >
                    <ListItemsSm />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
