import React from 'react';

import { useSelector } from 'react-redux';

import DisplayOutput from './DisplayOutput';

import classes from './Display.module.css';

const Display = () => {
	const age = useSelector((state) => state.age);

	const { years, months, days } = age.difference;

	return (
		<div className={classes.display}>
			<DisplayOutput label={'years'} number={years} />
			<DisplayOutput label={'months'} number={months} />
			<DisplayOutput label={'days'} number={days} />
		</div>
	);
};

export default Display;
