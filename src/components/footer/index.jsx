import React from 'react';

const Footer = () => {
	return (
		<>
			<div className="w-full h-full">
				{/* Footer  */}
				<footer className="w-full h-fit bg-black text-white relative bottom-0">
					<div className="w-full mx-auto sm:px-10 px-4 pb-10">
						<div className="grid lg:grid-cols-3 grid-cols-1 gap-4 justify-items-start pt-12">
							{/* col 1 */}
							<div className="mt-4">
								<div className="flex-1 flex justify-between items-center">
									<img
										className="sm:w-[10rem] xs:w-[7rem] z-10"
										src="https://techakim.com/sam/tg/7268/li/imgs/samlogo2.png"
										alt="Logo"
									/>
								</div>
								<p className="mt-4">
									A passionate developer, contributed 36
									Tailwind components to TailwindFlex, earning
									second-best contributor status over seven
									months.
								</p>
								{/* Socials */}
								<div className="flex gap-2 items-center text-2xl text-white mt-6">
									<div className="flex items-center justify-center p-3 border rounded-full hover:bg-blue-500">
										<ion-icon name="logo-facebook" />
									</div>
									<div className="flex items-center justify-center p-3 border rounded-full hover:bg-pink-500">
										<ion-icon name="logo-instagram" />
									</div>
									<div className="flex items-center justify-center p-3 border rounded-full hover:bg-green-500">
										<ion-icon name="logo-whatsapp" />
									</div>
									<div className="flex items-center justify-center p-3 border rounded-full hover:bg-gray-900">
										<ion-icon name="logo-tiktok" />
									</div>
								</div>
							</div>
							{/* col - 2 */}
							<div className="mt-4">
								<h2 className="text-white text-3xl font-semibold mb-8">
									Latest News and Blogs
								</h2>
								{/* 1 */}
								<div className="w-full flex flex-col mt-6">
									<div className="w-full flex gap-4">
										<img
											className="lg:w-[8rem] lg:h-[5rem] md:w-[6rem] md:h-[4rem] xs:w-[8rem] xs:h-[5rem] w-[6rem] h-[3rem] rounded-sm xs:outline xs:outline-[4px]"
											src="/new-arrival/1.png"
											alt="Gallery Image"
										/>
										<div className="flex flex-col items-start">
											<h3 className="xs:text-lg text-sm font-semibold">
												AI-Powered Chips Revolutionize
												Cloud Computing
											</h3>
											<p className="text-sm text-gray-500">
												Nov 17, 2024
											</p>
										</div>
									</div>
								</div>
								{/* 2 */}
								<div className="w-full flex flex-col mt-6">
									<div className="w-full flex justify-start gap-4">
										<img
											className="lg:w-[8rem] lg:h-[5rem] md:w-[6rem] md:h-[4rem] xs:w-[8rem] xs:h-[5rem] w-[6rem] h-[3rem] rounded-sm xs:outline xs:outline-[4px]"
											src="/new-arrival/2.png"
											alt="Gallery Image"
										/>
										{/* <img class="lg:w-[8rem] lg:h-[5rem] md:w-[6rem] md:h-[4rem] xs:w-[8rem] xs:h-[5rem] w-[6rem] h-[3rem] rounded-sm xs:outline xs:outline-[4px]" src="https://images.unsplash.com/photo-1536408745983-0f03be6e8a00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHx0ZXNsYSUyMHNvbGFyJTIwcm9vZnxlbnwwfDB8fHwxNzMxODI5MDA0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Gallery Image" /> */}
										<div className="flex flex-col items-start">
											<h3 className="xs:text-lg text-sm font-semibold">
												Tesla Unveils Solar Roofs 3.0:
												Efficiency Boost of 20%
											</h3>
											<p className="text-sm text-gray-500">
												Nov 17, 2024
											</p>
										</div>
									</div>
								</div>
								{/* 3 */}
								<div className="w-full flex flex-col mt-6">
									<div className="flex justify-start gap-4">
										<img
											className="lg:w-[8rem] lg:h-[5rem] md:w-[6rem] md:h-[4rem] xs:w-[8rem] xs:h-[5rem] w-[6rem] h-[3rem] rounded-sm xs:outline xs:outline-[4px]"
											src="/new-arrival/3.png"
											alt="Gallery Image"
										/>
										{/* <img class="lg:w-[8rem] lg:h-[5rem] md:w-[6rem] md:h-[4rem] xs:w-[8rem] xs:h-[5rem] w-[6rem] h-[3rem] rounded-sm xs:outline xs:outline-[4px]" src="https://images.unsplash.com/photo-1684487747720-1ba29cda82f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxvcGVuJTIwYWl8ZW58MHwwfHx8MTczMTgyOTA4M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Gallery Image" /> */}
										<div className="flex flex-col gap-2 items-start">
											<h3 className="xs:text-lg text-sm font-semibold">
												OpenAI Releases GPT-5 with
												Enhanced Creativity Features
											</h3>
											<p className="text-sm text-gray-500">
												Nov 17, 2024
											</p>
										</div>
									</div>
								</div>
							</div>
							{/* col - 4 */}
							<div className="w-full mt-4 lg:pl-6">
								<h4 className="text-white text-3xl font-semibold mb-6">
									Newsletter
								</h4>
								<p className="text-gray-300 mb-7">
									We making custom boxing gear & with custom
									logos. Give us your dream gloves idea and we
									will make for you.
								</p>
								<div className="w-full flex justify-center items-center rounded bg-gray-700">
									<input
										type="text"
										className="w-full h-full pl-4 text-gray-200 bg-gray-700 lg:text-left placeholder:text-gray-400 focus:outline-none focus:border-gray-500"
										placeholder="Email"
									/>
									<button
										type="submit"
										className="h-full py-3 xs:px-6 px-2 bg-blue-400 transition-all duration-500 shadow-md rounded-r text-sm text-white font-semibold w-fit hover:bg-fontOrange"
									>
										Subscribe
									</button>
								</div>
							</div>
						</div>
						<hr className="bg-gray mt-14" />
						<div className="w-full flex gap-2 flex-col items-center justify-center py-4">
							<div>
								Copyright © 2024 Sammy-TG All Right Reserved
							</div>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
};

export default Footer;
