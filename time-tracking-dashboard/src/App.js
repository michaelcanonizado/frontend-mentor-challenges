import Card from './components/Card/Card';
import Sidebar from './components/Sidebar/Sidebar';

const user = {
	firstName: 'Jeremy',
	lastName: 'Robinson',
	img: 'image-jeremy.png',
};

const activites = [
	{
		title: 'Work',
		currentDuration: '32',
		previousDuration: '36',
		colorTheme: 'bg-primary-orange',
		icon: 'icon-work.svg',
	},
	{
		title: 'Play',
		currentDuration: '10',
		previousDuration: '8',
		colorTheme: 'bg-primary-blue',
		icon: 'icon-play.svg',
	},
	{
		title: 'Study',
		currentDuration: '4',
		previousDuration: '7',
		colorTheme: 'bg-primary-red',
		icon: 'icon-study.svg',
	},
	{
		title: 'Exercise',
		currentDuration: '4',
		previousDuration: '5',
		colorTheme: 'bg-primary-green',
		icon: 'icon-exercise.svg',
	},
	{
		title: 'Social',
		currentDuration: '5',
		previousDuration: '10',
		colorTheme: 'bg-primary-violet',
		icon: 'icon-social.svg',
	},
	{
		title: 'Self Care',
		currentDuration: '2',
		previousDuration: '2',
		colorTheme: 'bg-primary-yellow',
		icon: 'icon-self-care.svg',
	},
];

function App() {
	return (
		<div className="bg-neutral-400 text-white font-sans grid place-items-center min-h-screen pt-[50px] pb-[50px]">
			<main className="grid grid-cols-1 grid-rows-auto md:grid-cols-4 md:grid-rows-2 gap-7 md:gap-5 lg:gap-7 w-[85%] md:w-[95%] lg:w-[80%] max-w-[1280px] m-auto">
				<Sidebar className=" row-span-1 md:row-span-2" user={user}></Sidebar>

				{activites.map((activity) => {
					return (
						<Card
							className={activity.colorTheme}
							title={activity.title}
							currentDuration={activity.currentDuration}
							previousDuration={activity.previousDuration}
							icon={activity.icon}
						/>
					);
				})}
			</main>
		</div>
	);
}

export default App;
