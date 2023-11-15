import React, { FC, ReactElement } from 'react';
import { IClassName } from '../Interfaces/IClassName';

export const Header: FC<IClassName> = (props): ReactElement => {
	const { className } = props;
	return <div className={` ${className}`}>Header</div>;
};
