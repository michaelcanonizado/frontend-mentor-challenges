import React, { useState } from 'react';

import { useSelector } from 'react-redux';

const navLinks = [
	{ name: 'Collection', url: '/' },
	{ name: 'Men', url: '/' },
	{ name: 'Women', url: '/' },
	{ name: 'About', url: '/' },
	{ name: 'Contact', url: '/' },
];

// const cartDetails = {
// 	totalItems: 15,
// 	items: [
// 		{
// 			img: 'image-product-3-thumbnail.jpg',
// 			name: 'Limited Edition Sneakers',
// 			price: 150,
// 			qty: 2,
// 			totalPrice: 705,
// 		},
// 		{
// 			img: 'image-product-4-thumbnail.jpg',
// 			name: 'Fall Sneakers',
// 			price: 225,
// 			qty: 4,
// 			totalPrice: 937,
// 		},
// 		{
// 			img: 'image-product-1-thumbnail.jpg',
// 			name: 'Fall Limited Edition Sneakers',
// 			price: 125,
// 			qty: 3,
// 			totalPrice: 400,
// 		},
// 		{
// 			img: 'image-product-2-thumbnail.jpg',
// 			name: 'Fall Limited',
// 			price: 175,
// 			qty: 5,
// 			totalPrice: 375,
// 		},
// 		{
// 			img: 'image-product-3-thumbnail.jpg',
// 			name: 'Limited Edition Sneakers',
// 			price: 150,
// 			qty: 2,
// 			totalPrice: 705,
// 		},
// 		{
// 			img: 'image-product-4-thumbnail.jpg',
// 			name: 'Fall Sneakers',
// 			price: 225,
// 			qty: 4,
// 			totalPrice: 937,
// 		},
// 		{
// 			img: 'image-product-1-thumbnail.jpg',
// 			name: 'Fall Limited Edition Sneakers',
// 			price: 125,
// 			qty: 3,
// 			totalPrice: 400,
// 		},
// 		{
// 			img: 'image-product-2-thumbnail.jpg',
// 			name: 'Fall Limited',
// 			price: 175,
// 			qty: 5,
// 			totalPrice: 375,
// 		},
// 		{
// 			img: 'image-product-3-thumbnail.jpg',
// 			name: 'Limited Edition Sneakers',
// 			price: 150,
// 			qty: 2,
// 			totalPrice: 705,
// 		},
// 		{
// 			img: 'image-product-4-thumbnail.jpg',
// 			name: 'Fall Sneakers',
// 			price: 225,
// 			qty: 4,
// 			totalPrice: 937,
// 		},
// 	],
// };

export default function MainNavbar({ className }) {
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);

	const cartDetails = useSelector((state) => state.cart);

	const navbarOpenHandler = () => {
		setIsNavbarOpen((bool) => !bool);
	};

	const onDeleteCartItemHandler = () => {
		console.log('deleting item');
	};

	const onCheckoutHandler = () => {
		console.log('checking out');
	};

	return (
		<nav
			className={`flex justify-between h-20 border-b box-border  ${className}`}
		>
			<div className="flex items-center gap-5 md:gap-10 z-50">
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
								// md:border-t-4
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

					bg-neutral-500
					
					z-40"
			></div>

			<div className="flex items-center gap-7 ">
				<div className="w-[25px] relative ">
					<input
						className="bg-red-400 absolute inset-0 opacity-0 hover:cursor-pointer peer"
						type="checkbox"
					></input>
					<img
						className="w-full hover:cursor-pointer"
						src="icon-cart.svg"
						alt="Cart"
					/>
					<div className="bg-primary-200 rounded-full grid place-items-center h-[20px] min-w-[20px] w-fit px-[2px] absolute top-[-10px] right-[-10px]">
						<span className="text-neutral-100 text-xs">
							{cartDetails.totalItems}
						</span>
					</div>
					<div
						className="bg-neutral-100 rounded-xl transition-all duration-[400ms] ease-in-out shadow-xl 
						
						w-[250px] md:w-[305px]
		
						overflow-hidden max-h-0 peer-checked:max-h-[500px]				
					
						absolute top-[150%] left-[50%] translate-x-[-50%]"
					>
						<div className="px-4 py-3 border-b border-bottom">
							<span className="font-bold">Cart</span>
						</div>
						<div className="">
							<div className="px-4 pt-4 h-[250px] overflow-y-scroll">
								{cartDetails.items.map((item) => {
									return (
										<div className="flex justify-between items-center mb-4">
											<div className="flex items-center">
												<div className="w-[40px] rounded-md overflow-hidden mr-2">
													<img
														className=""
														src={item.img}
														alt="Fall Limited Edition Sneakers"
													/>
												</div>
												<div>
													<span className="text-neutral-400 text-sm">
														{item.name}
													</span>
													<div className="text-neutral-400 text-xs">
														<span className="mr-1">
															{`$${item.price} x ${item.qty}`}
														</span>
														<span className="text-neutral-600 font-extrabold text-[]">
															{`$${item.totalPrice}`}
														</span>
													</div>
												</div>
											</div>
											<div
												className="w-[12px] hover:cursor-pointer"
												onClick={onDeleteCartItemHandler}
											>
												<img
													className="w-full h-full"
													src="icon-delete.svg"
													alt="Delete Fall Limited Edition Sneakers"
												/>
											</div>
										</div>
									);
								})}
							</div>
							<div className="m-4">
								<button
									className=" text-sm w-full h-[50px] rounded-xl bg-primary-200 text-neutral-100 hover:opacity-70 transition-opacity"
									onClick={onCheckoutHandler}
								>
									Checkout
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="w-[45px]  hover:cursor-pointer">
					<img src="image-avatar.png" alt="Profile" />
				</div>
			</div>
		</nav>
	);
}
