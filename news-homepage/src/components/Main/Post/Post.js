import React from 'react';

export default function Post({ className, data }) {
	return (
		<section className={`${className}`}>
			<div className="mb-5 h-fit">
				<img
					className="h-full"
					src={data.image.desktop}
					srcset={`${data.image.mobile} 768w, ${data.image.desktop} 769w`}
					alt={data.description}
				></img>
			</div>
			<div className="grid grid-cols-none md:grid-cols-2 gap-3 md:gap-5 2xl:gap-0 3xl:gap-10">
				<div className="w-[100%] sm:w-[80%] mb:w-full">
					<h1 className="text-5xl md:text-[2.8rem] lg:text-[2.5rem] xl:text-5xl 3xl:text-6xl font-extrabold leading-[1.1]">
						{data.title}
					</h1>
				</div>
				<div>
					<div className="mb-5 2xl:mb-10">
						<p className="text-base font-normal">{data.description}</p>
					</div>
					<div className=" w-1/2 md:w-full xl:w-1/2 h-[45px]  bg-softRed text-offWhite">
						<a
							className="w-full h-full hover:cursor-pointer grid place-items-center"
							href={data.url}
						>
							READ MORE
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
