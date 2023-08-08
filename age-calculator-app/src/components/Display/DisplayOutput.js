import React from 'react';

import classes from './DisplayOutput.module.css';

const DisplayOutput = (props) => {
	return (
		<section className={classes['display-output--container']}>
			<span className={classes['display-output__number']}>{props.number}</span>
			<p className={classes['display-output__label']}>{props.label}</p>
		</section>
	);
};

export default DisplayOutput;
