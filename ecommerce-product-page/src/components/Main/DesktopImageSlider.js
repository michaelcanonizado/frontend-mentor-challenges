import React, { useState } from 'react';

export default function DesktopImageSlider({
	className,
	currImage,
	images,
	imageSlider,
}) {
	const imageSliderHandler = (event) => {
		imageSlider(event);
	};

	return (
		<div className={`flex-col gap-5 overflow-hidden ${className}`}>
			<div className="rounded-xl overflow-hidden">
				<img src={currImage.jpg} alt="" />
			</div>
			<div className="grid grid-cols-4 gap-5">
				{images.thumbnails.map((thumbnail, index) => {
					return (
						<>
							<div
								className={`rounded-xl border-box overflow-hidden hover:cursor-pointer relative ${
									currImage.thumbnail.includes(thumbnail)
										? 'border-[3px] border-primary-200'
										: ''
								}`}
								key={index}
							>
								{currImage.thumbnail.includes(thumbnail) ? (
									<img
										className="opacity-30"
										src={thumbnail}
										alt=""
										id={index}
									/>
								) : (
									<img
										className="hover:opacity-70 transition-opacity ease-linear"
										src={thumbnail}
										alt=""
										onClick={imageSliderHandler}
										id={index}
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
