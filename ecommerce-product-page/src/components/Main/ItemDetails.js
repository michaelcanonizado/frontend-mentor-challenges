import React, { useState } from 'react';

const itemDetails = {
	name: 'Fall Limited Edition Sneakers',
	price: {
		salePrice: '125',
		orgPrice: '250',
	},
	description:
		"These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole. They'll withstand everything the weather can offer.",
	images: {
		jpgs: [
			'image-product-1.jpg',
			'image-product-2.jpg',
			'image-product-3.jpg',
			'image-product-4.jpg',
		],
		thumbnails: [
			'image-product-1-thumbnail.jpg',
			'image-product-2-thumbnail.jpg',
			'image-product-3-thumbnail.jpg',
			'image-product-4-thumbnail.jpg',
		],
	},
};

export default function ItemDetails({ className }) {
	const [itemQty, setItemQty] = useState(0);
	const [displayedImage, setDisplayedImage] = useState([
		'http://localhost:3000/image-product-1.jpg',
		'http://localhost:3000/image-product-1-thumbnail.jpg',
	]);

	const imageSliderHandler = (event) => {
		setDisplayedImage([
			event.target.src.replace('-thumbnail', ''),
			event.target.src,
		]);
	};

	const incrementItemhandler = () => {
		setItemQty((currQty) => {
			return currQty + 1;
		});
		console.log(itemQty);
	};
	const decrementItemhandler = () => {
		if (itemQty > 0) {
			setItemQty((currQty) => {
				return currQty - 1;
			});
		}
	};

	return (
		<div className={`grid grid-cols-2 gap-20 mt-20 ${className}`}>
			<div className="flex flex-col gap-5 overflow-hidden">
				<div className="rounded-xl overflow-hidden">
					<img src={displayedImage[0]} alt="" />
				</div>
				<div className="grid grid-cols-4 gap-5">
					{itemDetails.images.thumbnails.map((thumbnail) => {
						return (
							<>
								<div
									className={`rounded-xl border-box overflow-hidden hover:cursor-pointer relative ${
										displayedImage[1].includes(thumbnail)
											? 'border-[3px] border-primary-200'
											: ''
									}`}
								>
									{displayedImage[1].includes(thumbnail) ? (
										<img
											className="opacity-30"
											src={thumbnail}
											alt=""
										/>
									) : (
										<img
											className="hover:opacity-70 transition-opacity ease-linear"
											src={thumbnail}
											alt=""
											onClick={imageSliderHandler}
										/>
									)}
								</div>
							</>
						);
					})}
				</div>
			</div>
			<div className="my-auto">
				<div className="mb-2">
					<span className="text-primary-200 text-sm font-bold tracking-wider">
						SNEAKER COMPANY
					</span>
				</div>
				<div className="mb-10">
					<h1 className="text-4xl font-bold">{itemDetails.name}</h1>
				</div>
				<div className="mb-5">
					<p className="text-neutral-400">{itemDetails.description}</p>
				</div>
				<div className="mb-5">
					<div className="flex items-center">
						<span className="text-2xl font-semibold mr-2">
							${parseInt(itemDetails.price.salePrice).toFixed(2)}
						</span>
						<div className="bg-primary-100  h-[25px] w-[40px] rounded-md flex items-center justify-center">
							<span className="text-primary-200 font-bold text-sm">
								{((parseInt(itemDetails.price.orgPrice) -
									parseInt(itemDetails.price.salePrice)) /
									parseInt(itemDetails.price.orgPrice)) *
									100}
								%
							</span>
						</div>
					</div>
					<div className="">
						<span className="text-sm text-neutral-400 line-through">
							${parseInt(itemDetails.price.orgPrice).toFixed(2)}
						</span>
					</div>
				</div>
				<div className=" h-[50px] flex gap-5">
					<div className="bg-neutral-200 flex items-center rounded-xl">
						<div
							className="w-[50px]  hover:cursor-pointer h-full flex justify-center"
							onClick={decrementItemhandler}
						>
							<div className="w-[20px] h-full flex justify-center items-center">
								<img src="icon-minus.svg" alt="remove one item" />
							</div>
						</div>
						<div className="w-[50px] text-center">
							<span className="font-bold">{itemQty}</span>
						</div>
						<div
							className="w-[50px] hover:cursor-pointer h-full flex justify-center"
							onClick={incrementItemhandler}
						>
							<div className="w-[20px] h-full flex justify-center items-center">
								<img src="icon-plus.svg" alt="add one item" />
							</div>
						</div>
					</div>
					<div className="">
						<button className="h-[50px] w-[250px] bg-primary-200 text-neutral-100 flex justify-center items-center rounded-xl hover:cursor-pointer hover:translate-y-[-2px] transition-transform ease-out">
							<svg
								className="fill-neutral-100"
								width="22"
								height="20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
									fill-rule="nonzero"
								/>
							</svg>
							<span className="ml-3 font-semibold">Add to cart</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
