import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slice/cartSlice.js';

import { itemDetails } from '../../data.js';

import DesktopImageSlider from './DesktopImageSlider.js';
import DesktopImageSliderModal from './DesktopImageSliderModal.js';
import MobileImageSlider from './MobileImageSlider.js';

export default function ItemDetails({ className }) {
	const dispatch = useDispatch();

	const images = itemDetails.images;

	const [itemQty, setItemQty] = useState(1);
	const [currImage, setCurrImage] = useState({
		index: 0,
		jpg: images.jpgs[0],
		thumbnail: images.thumbnails[0],
		translateXValue: '0%',
	});
	const [isModalSliderOpen, setIsModalSliderOpen] = useState(false);

	//
	//
	// MAIN SLIDER HANDLERS

	const imageSliderHandler = (event) => {
		setCurrImage({
			index: event.target.id,
			jpg: event.target.src.replace('-thumbnail', ''),
			thumbnail: event.target.src,
			translateXValue: `-${event.target.id * 100}%`,
		});
	};

	//
	//
	// MODAL SLIDER HANDLERS

	const prevImageHandler = () => {
		setCurrImage((currImage) => {
			if (currImage.index === 0) {
				return {
					index: images.jpgs.length - 1,
					jpg: images.jpgs[images.jpgs.length - 1],
					thumbnail: images.thumbnails[images.jpgs.length - 1],
					translateXValue: `-${(images.jpgs.length - 1) * 100}%`,
				};
			}
			return {
				index: currImage.index - 1,
				jpg: images.jpgs[currImage.index - 1],
				thumbnail: images.thumbnails[currImage.index - 1],
				translateXValue: `-${(currImage.index - 1) * 100}%`,
			};
		});
	};
	const nextImageHandler = () => {
		setCurrImage((currImage) => {
			if (currImage.index === images.jpgs.length - 1) {
				return {
					index: 0,
					jpg: images.jpgs[0],
					thumbnail: images.thumbnails[0],
					translateXValue: '0%',
				};
			}
			return {
				index: currImage.index + 1,
				jpg: images.jpgs[currImage.index + 1],
				thumbnail: images.thumbnails[currImage.index + 1],
				translateXValue: `-${(currImage.index + 1) * 100}%`,
			};
		});
	};

	const toggleModalSliderHandler = () => {
		setIsModalSliderOpen((bool) => !bool);
	};

	//
	//
	// CART HANDLERS

	const incrementItemhandler = () => {
		setItemQty((currQty) => {
			return currQty + 1;
		});
	};

	const decrementItemhandler = () => {
		if (itemQty > 1) {
			setItemQty((currQty) => {
				return currQty - 1;
			});
		}
	};

	const addToCartHandler = () => {
		dispatch(cartActions.addItem({ item: itemDetails, qty: itemQty }));
	};

	return (
		<div
			className={`grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:gap-20 md:mt-20 w-full ${className}`}
		>
			<DesktopImageSlider
				className="hidden md:flex"
				currImage={currImage}
				images={images}
				imageSlider={imageSliderHandler}
				toggleModalSlider={toggleModalSliderHandler}
			/>
			{isModalSliderOpen && (
				<DesktopImageSliderModal
					currImage={currImage}
					images={images}
					prevImage={prevImageHandler}
					nextImage={nextImageHandler}
					imageSlider={imageSliderHandler}
					toggleModalSlider={toggleModalSliderHandler}
				/>
			)}

			<MobileImageSlider className="flex md:hidden" />

			<div className="my-auto mt-10 mx-10 md:mx-0   w-fit sm:w-[70%] md:w-fit">
				<div className="mb-2">
					<span className="text-primary-200 text-sm font-bold tracking-wider">
						SNEAKER COMPANY
					</span>
				</div>
				<div className="mb-10 lg:w-[80%]">
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
					<div className="w-full">
						<button
							className="h-[50px] max-w-[250px] w-full bg-primary-200 text-neutral-100 flex justify-center items-center rounded-xl hover:cursor-pointer hover:translate-y-[-2px] transition-transform ease-out"
							onClick={addToCartHandler}
						>
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
							<span className="ml-3 font-semibold md:text-sm lg:text-base">
								Add to cart
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
