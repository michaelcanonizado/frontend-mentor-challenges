import MainNavbar from './components/Header/MainNavbar';
import ItemDetails from './components/Main/ItemDetails';

export default function App() {
	return (
		<div className="h-screen">
			<header className="">
				<MainNavbar className="max-w-[1440px] w-[90%] m-auto" />
			</header>
			<main className=" ">
				<ItemDetails className="max-w-[1440px] w-[90%] m-auto" />
			</main>
		</div>
	);
}
