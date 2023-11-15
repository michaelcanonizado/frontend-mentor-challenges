import React, { FC, ReactElement } from 'react';
import { IClassName } from '../Interfaces/IClassName';

export const Display: FC<IClassName> = (props): ReactElement => {
	const { className } = props;
	return <div className={` ${className}`}>Display</div>;
};
