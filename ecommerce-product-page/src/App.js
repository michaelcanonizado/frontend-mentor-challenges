import MainNavbar from './components/Header/MainNavbar';
import ItemDetails from './components/Main/ItemDetails';

export default function App() {
	return (
		<div className="h-screen">
			<header className="sticky top-0 bg-neutral-100">
				<MainNavbar className="max-w-[1366px] w-[80%] m-auto" />
			</header>
			<main className="pb-20">
				<ItemDetails className="max-w-[1080px] md:w-[80%] md:mx-auto" />
			</main>
		</div>
	);
}
