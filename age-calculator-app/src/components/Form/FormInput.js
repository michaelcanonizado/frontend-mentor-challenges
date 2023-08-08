import React, { useState } from 'react';

import classes from './FormInput.module.css';

const FormInput = (props) => {
	const [isErr, setIsErr] = useState(true);

	const errorHandler = (event) => {
		if (props.type.toLowerCase() === 'day') {
		}
		if (props.type.toLowerCase() === 'month') {
		}
		if (props.type.toLowerCase() === 'year') {
		}
	};

	return (
		<div className={classes['form-control']}>
			<label className={classes['form-label']}>{props.type}</label>
			<input
				onChange={(event) => {
					props.onChangeInput(event);
					errorHandler();
				}}
				className={classes['form-input']}
				placeholder={props.placeholder}
			/>
			{isErr ? (
				<p className={classes['form-error']}>This field is required</p>
			) : (
				''
			)}
		</div>
	);
};

export default FormInput;
