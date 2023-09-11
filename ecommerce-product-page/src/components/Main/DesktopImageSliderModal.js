import React, { useState } from 'react';

export default function DesktopImageSliderModal({
	currImage,
	images,
	prevImage,
	nextImage,
}) {
	console.log(currImage);

	const prevImageHandler = () => {
		prevImage();
	};
	const nextImageHandler = () => {
		nextImage();
	};

	return (
		<>
			<div className="bg-black absolute inset-0 opacity-60"></div>
			<div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
				<div className=""></div>
				<div className="w-[500px] rounded-xl">
					<div className="overflow-hidden rounded-xl">
						<div
							className={`flex transition-transform duration-[500ms] ease-in-out translate-x-[${currImage.translateXValue}]`}
						>
							{images.jpgs.map((imgLink) => {
								return <img src={imgLink} alt={imgLink} />;
							})}
						</div>
					</div>
					<div className="absolute inset-0 ">
						<div
							className="bg-white aspect-square h-[40px] w-[40px] rounded-full

                            flex items-center justify-center
                            pr-[4px]
                            
                            hover:cursor-pointer
                        
                            absolute
                            top-[50%]
                            translate-y-[-50%]

                            left-0
                            translate-x-[-50%]"
							onClick={prevImageHandler}
						>
							<img
								className="w-[10px]"
								src="icon-previous.svg"
								alt="previous"
							/>
						</div>
						<div
							className="bg-white aspect-square h-[40px] w-[40px] rounded-full

                            flex items-center justify-center
                            pl-[3px]
                            
                            hover:cursor-pointer
                        
                            absolute
                            top-[50%]
                            translate-y-[-50%]
                            
                            right-0
                            translate-x-[50%]"
							onClick={nextImageHandler}
						>
							<img
								className="w-[10px]"
								src="icon-next.svg"
								alt="next"
							/>
						</div>
					</div>
				</div>
				<div className=""></div>
			</div>
		</>
	);
}
