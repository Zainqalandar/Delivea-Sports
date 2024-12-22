import React from 'react';

const NavLists = () => {
	return (
		<ul className="lg:flex lg:flex-wrap lg:items-center lg:justify-center px-10 py-3 bg-[#333] min-h-[46px] gap-4 max-lg:space-y-4 max-lg:fixed max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-lg max-lg:overflow-auto z-50">
			<li className="mb-6 hidden max-lg:block">
				<a href="javascript:void(0)">
					<img
						src="https://readymadeui.com/readymadeui-white.svg"
						alt="logo"
						className="w-36"
					/>
				</a>
			</li>
			<li className="max-lg:border-b max-lg:py-3 px-3">
				<a
					href="javascript:void(0)"
					className="hover:text-yellow-300 text-yellow-300 text-[15px] font-medium block"
				>
					New
				</a>
			</li>
			<li className="max-lg:border-b max-lg:py-3 px-3">
				<a
					href="javascript:void(0)"
					className="hover:text-yellow-300 text-white text-[15px] font-medium block"
				>
					Brands
				</a>
			</li>
			<li className="max-lg:border-b max-lg:py-3 px-3">
				<a
					href="javascript:void(0)"
					className="hover:text-yellow-300 text-white text-[15px] font-medium block"
				>
					Makeup
				</a>
			</li>
			<li className="max-lg:border-b max-lg:py-3 px-3">
				<a
					href="javascript:void(0)"
					className="hover:text-yellow-300 text-white text-[15px] font-medium block"
				>
					Hair
				</a>
			</li>
			<li className="max-lg:border-b max-lg:py-3 px-3">
				<a
					href="javascript:void(0)"
					className="hover:text-yellow-300 text-white text-[15px] font-medium block"
				>
					Tools &amp; Brushes
				</a>
			</li>
			<li className="max-lg:border-b max-lg:py-3 px-3">
				<a
					href="javascript:void(0)"
					className="hover:text-yellow-300 text-white text-[15px] font-medium block"
				>
					Bath &amp; body
				</a>
			</li>
			<li className="max-lg:border-b max-lg:py-3 px-3">
				<a
					href="javascript:void(0)"
					className="hover:text-yellow-300 text-white text-[15px] font-medium block"
				>
					Clean Body
				</a>
			</li>
			<li className="max-lg:border-b max-lg:py-3 px-3">
				<a
					href="javascript:void(0)"
					className="hover:text-yellow-300 text-white text-[15px] font-medium block"
				>
					Gifts
				</a>
			</li>
			<li className="max-lg:border-b max-lg:py-3 px-3">
				<a
					href="javascript:void(0)"
					className="hover:text-yellow-300 text-white text-[15px] font-medium block"
				>
					Skincare
				</a>
			</li>
		</ul>
	);
};

export default NavLists;
