import React, { FC, ReactElement } from 'react';
import { IClassName } from '../Interfaces/IClassName';
import { getKeyType } from './helpers/getKeyType';

interface IKey extends IClassName {
	text: string;
}

export const Key: FC<IKey> = (props): ReactElement => {
	const { text, className } = props;

	const keyType: string | undefined = getKeyType(text);

	return (
		<div
			className={`grid place-items-center rounded-md text-2xl font-semibold hover:cursor-pointer
			hover:border-b-2
			hover:bg-keys-${keyType}-hover 
			bg-keys-${keyType}-bkg 
			border-keys-${keyType}-shadow 
			${className}`}
		>
			{text.toUpperCase().trim()}
		</div>
	);
};
