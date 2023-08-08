import React, { useState } from 'react';

export default function Navbar({ className }) {
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);

	const onClickToggleNavbarMenuHandler = () => {
		setIsNavbarOpen((bool) => !bool);
		console.log('clicked');
	};

	return (
		<navbar className={`flex justify-between items-center h-20 ${className}`}>
			<div>
				<img src="logo.svg" alt="Logo"></img>
			</div>

			<div
				className="h-[55%] flex items-center hover:cursor-pointer z-40"
				onClick={onClickToggleNavbarMenuHandler}
			>
				<img
					className="md:hidden hover:cursor-pointer"
					src="icon-menu.svg"
					alt="Navbar Menu"
				></img>
			</div>

			<div
				className={`h-screen w-screen fixed inset-0 ${
					isNavbarOpen ? 'opacity-50 bg-slate-950' : 'opacity-0'
				} transition-all duration-300`}
			></div>

			<div
				data-visible={isNavbarOpen ? 'true' : 'false'}
				className={`flex flex-col justify-between fixed  top-0 right-0 h-screen w-[70%] p-10  md:static md:h-fit md:w-fit md:p-0 z-50 bg-white translate-x-[100%] md:translate-x-0  data-[visible=true]:translate-x-0 hover:ease-out hover:duration-300`}
			>
				<div className="flex place-content-end mb-20 md:hidden ">
					<img
						onClick={onClickToggleNavbarMenuHandler}
						className="hover:cursor-pointer"
						src="icon-menu-close.svg"
						alt="Close Menu"
					></img>
				</div>
				<ul className="flex flex-col gap-6  flex-grow text-xl md:flex-row md:text-base md:gap-10">
					<li>
						<a href="/">Home</a>
					</li>
					<li>
						<a href="/">New</a>
					</li>
					<li>
						<a href="/">Popular</a>
					</li>
					<li>
						<a href="/">Trending</a>
					</li>
					<li>
						<a href="/">Categories</a>
					</li>
				</ul>
			</div>

			{/* <div>
				<ul className="hidden md:flex gap-8 ">
					<li>Home</li>
					<li>New</li>
					<li>Popular</li>
					<li>Trending</li>
					<li>Categories</li>
				</ul>
				<div>
					<img
						className="md:hidden hover:cursor-pointer"
						src="icon-menu.svg"
						alt="Navbar Menu"
					></img>
				</div>
			</div> */}
		</navbar>
	);
}
