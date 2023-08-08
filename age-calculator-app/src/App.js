import React from 'react';

import classes from './App.module.css';

import Form from './components/Form/Form';
import Display from './components/Display/Display';

function App() {
	return (
		<div className={classes.app}>
			<Form />
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="46"
				height="44"
				viewBox="0 0 46 44"
			>
				<g fill="none" stroke="#fff" stroke-width="2">
					<path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44" />
				</g>
			</svg>
			<Display />
		</div>
	);
}

export default App;
