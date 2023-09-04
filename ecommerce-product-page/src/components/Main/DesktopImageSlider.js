import React, { useState } from 'react';
import { itemDetails } from '../../data';

export default function DesktopImageSlider({ className }) {
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

	return (
		<div className={`flex-col gap-5 overflow-hidden ${className}`}>
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
	);
}
