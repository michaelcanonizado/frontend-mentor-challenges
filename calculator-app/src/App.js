import Header from './components/Header';
import Display from './components/Display';
import Keypad from './components/Keypad';

function App() {
	return (
		<main className="bg-bkg-main text-text-1 h-screen grid place-items-center">
			<div className="w-[300px] flex flex-col gap-5">
				<Header className="rounded-md" />
				<Display className="rounded-md p-5" />
				<Keypad className="rounded-md p-5" />
			</div>
		</main>
	);
}

export default App;
