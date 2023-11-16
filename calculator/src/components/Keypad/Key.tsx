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

			transition-transform
			box-border

			mt-1
			hover:mt-0
			hover:translate-y-[-1px]
			hover:border-b-[3px]
			
			hover:bg-keys-base-hover
			hover:border-keys-base-shadow
			bg-keys-base-bkg

			${className}`}
		>
			{text.toUpperCase().trim()}
		</div>
	);
};
