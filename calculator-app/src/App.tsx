import React, { FC, ReactElement } from 'react';
import { Header } from './components/Header/Header';
import { Display } from './components/Display/Display';
import { Keypad } from './components/Keypad/Keypad';

export const App: FC = (): ReactElement => {
	return (
		<div className="h-screen grid place-items-center bg-bkg-main">
			<main className="w-1/3">
				<Header className="" />
				<Display className="" />
				<Keypad className="" />
			</main>
		</div>
	);
};
