import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ageActions } from './../../redux/slice/ageSlice';

import FormInput from './FormInput';

import classes from './Form.module.css';

const Form = () => {
	const dispatch = useDispatch();

	const onDayChangeHandler = (event) => {
		dispatch(ageActions.updateDay({ day: parseInt(event.target.value) }));
	};

	const onMonthChangeHandler = (event) => {
		dispatch(ageActions.updateMonth({ month: parseInt(event.target.value) }));
	};

	const onYearChangeHandler = (event) => {
		dispatch(ageActions.updateYear({ year: parseInt(event.target.value) }));
	};

	return (
		<form className={classes['form']}>
			<FormInput
				onChangeInput={onDayChangeHandler}
				type={'Day'}
				placeholder={'DD'}
			/>
			<FormInput
				onChangeInput={onMonthChangeHandler}
				type={'Month'}
				placeholder={'MM'}
			/>
			<FormInput
				onChangeInput={onYearChangeHandler}
				type={'Year'}
				placeholder={'YYYY'}
			/>
		</form>
	);
};

export default Form;
