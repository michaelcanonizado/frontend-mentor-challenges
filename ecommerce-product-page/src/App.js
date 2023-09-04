import MainNavbar from './components/Header/MainNavbar';
import ItemDetails from './components/Main/ItemDetails';

export default function App() {
	return (
		<div className="h-screen">
			<header className="">
				<MainNavbar className="max-w-[1366px] w-[90%] m-auto" />
			</header>
			<main className="pb-20">
				<ItemDetails className="max-w-[1080px] md:w-[90%] md:mx-auto" />
			</main>
		</div>
	);
}
