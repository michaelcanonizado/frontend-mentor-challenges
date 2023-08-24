import React, { useState } from 'react';

const navLinks = [
	{ name: 'Collection', url: '/' },
	{ name: 'Men', url: '/' },
	{ name: 'Women', url: '/' },
	{ name: 'About', url: '/' },
	{ name: 'Contact', url: '/' },
];

export default function MainNavbar({ className }) {
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);

	const navbarOpenHandler = () => {
		setIsNavbarOpen((bool) => !bool);
	};

	return (
		<nav
			className={`flex justify-between h-20 border-b box-border ${className}`}
		>
			<div className="flex items-center gap-5 md:gap-10">
				<div className="block w-[25px] md:hidden">
					<img
						className="hover:cursor-pointer w-full"
						onClick={navbarOpenHandler}
						src="icon-menu.svg"
						alt="menu icon"
					/>
				</div>

				<div className="h-[20px] hover:cursor-pointer">
					<img className="h-full" src="logo.svg" alt="Sneakers" />
				</div>

				<ul
					data-visible={isNavbarOpen ? 'true' : 'false'}
					className="
					transition-transform md:transition-none
					ease-linear
					duration-200

					data-[visible=true]:translate-x-[0] 
					md:data-[visible=false]:translate-x-0

					data-[visible=true]:z-50

					translate-x-[-100%]
					data-[visible=true]:fixed
					data-[visible=false]:opacity-0
					data-[visible=true]:inset-y-0 
					data-[visible=true]:left-0 
					data-[visible=true]:right-[30%] 
					md:static 
					flex-col 
					md:flex-row 
					data-[visible=true]:px-10  
					data-[visible=true]:py-7  
					md:p-0

					md:data-[visible=false]:opacity-100
					md:data-[visible=true]:static
					md:data-[visible=true]:p-0
					
					
					flex
					gap-5 
					md:gap-7
					md:h-full

					text-base
					bg-neutral-100
					box-border"
				>
					<li
						className="hover:cursor-pointer static md:hidden w-[25px] mb-20"
						onClick={navbarOpenHandler}
					>
						<img
							className="w-full"
							src="icon-close.svg"
							alt="menu icon"
						/>
					</li>

					{navLinks.map((link) => {
						return (
							<li
								className="
								box-border

								md:flex md:items-center
								
								md:border-b-4
								md:border-t-4
								md:border-transparent
								
								text-neutral-400
								hover:text-black hover:font-medium
								md:hover:border-b-4
								md:hover:border-b-primary-200
							
								md:transition-colors"
							>
								<a href={link.url}>{link.name}</a>
							</li>
						);
					})}
				</ul>
			</div>

			<div
				data-visible={isNavbarOpen ? 'true' : 'false'}
				className="
					transition-transform md:transition-none
					ease-linear
					duration-300

					fixed
					inset-0 
					data-[visible=true]:opacity-60 data-[visible=false]:opacity-0
					data-[visible=false]:hidden
					md:data-[visible=true]:hidden

					bg-neutral-500"
			></div>

			<div className="flex items-center gap-7">
				<div className="w-[25px] hover:cursor-pointer">
					<img className="w-full" src="icon-cart.svg" alt="Cart" />
				</div>
				<div className="w-[45px]  hover:cursor-pointer">
					<img src="image-avatar.png" alt="Profile" />
				</div>
			</div>
		</nav>
	);
}

// className="
// 					transition-transform md:transition-none

// 					data-[visible=false]:translate-x-[-100%]
// 					md:data-[visible=false]:translate-x-0

// 					fixed
// 					inset-y-0
// 					left-0
// 					right-[30%]
// 					md:static
// 					flex-col
// 					md:flex-row
// 					p-10
// 					md:p-0

// 					flex
// 					gap-5
// 					md:gap-10
// 					text-base
// 					bg-red-300"
