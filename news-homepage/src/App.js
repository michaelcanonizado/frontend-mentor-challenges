import './App.css';

import Navbar from './components/Header/Navbar/Navbar';
import Post from './components/Main/Post/Post';
import OtherPosts from './components/Main/OtherPosts/OtherPosts';
import InternalLinks from './components/Main/InternalLinks/InternalLinks';

const mainPost = {
	title: 'The Bright Future of Web 3.0?',
	description:
		'We dive into the next evolution of the wed that claims to put the power of the platforms back into the hands of the people. But is it really a fulfilling promise?',
	image: { desktop: 'image-web-3-desktop.jpg', mobile: 'image-web-3-mobile.jpg' },
	url: 'localhost:3000',
};

const internalLinks = [
	{
		title: 'Hydrogen VS Electric Cars',
		description: 'Will hydrogen-fueled cars catch up to EVs?',
	},
	{
		title: 'The Downside of AI Artistry',
		description:
			'What are the possible adverse effects of on-demand AI image generation?',
	},
	{
		title: 'Is VC Funding Drying Up?',
		description:
			'Private Funding by VC firms is down 50% YOY. We take a look at what that means.',
	},
];

const otherPosts = [
	{
		title: 'Reviving Retro PCs',
		description: 'What happens when old PCs are given modern upgrades?',
		image: 'image-retro-pcs.jpg',
	},
	{
		title: 'Top 10 Laptops of 2022',
		description: 'Our best picks for various needs and budgets.',
		image: 'image-top-laptops.jpg',
	},
	{
		title: 'The Growth of Gaming',
		description: 'How the pandemic has sparked fresh opportunitie.',
		image: 'image-gaming-growth.jpg',
	},
];

export default function App() {
	return (
		<div className=" font-serif bg-offWhite mb-[50px]">
			<header className="bg-white fixed inset-x-0">
				<Navbar className="m-auto w-[90%] md:w-[70%]" />
			</header>
			<main className="grid gap-5 grid-cols-none lg:grid-cols-3 m-auto w-[90%] md:w-[70%]">
				<Post className="lg:col-span-2" data={mainPost} />
				<InternalLinks className="" data={internalLinks} />
				<OtherPosts className=" lg:col-span-3" data={otherPosts} />
			</main>
		</div>
	);
}
