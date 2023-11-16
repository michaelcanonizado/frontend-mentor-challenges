import React, { FC, ReactElement } from 'react';
import { Key } from './Key';
import { IClassName } from '../Interfaces/IClassName';

export const Keypad: FC<IClassName> = (props): ReactElement => {
	const { className } = props;
	return (
		<div
			className={`bg-bkg-keypad grid grid-cols-4 grid-rows-5 gap-2 p-3 ${className}`}
		>
			<Key text="7" />
			<Key text="8" />
			<Key text="9" />
			<Key text="del" className="text-lg" />
			<Key text="4" />
			<Key text="5" />
			<Key text="6" />
			<Key text="+" />
			<Key text="1" />
			<Key text="2" />
			<Key text="3" />
			<Key text="-" />
			<Key text="." />
			<Key text="0" />
			<Key text="/" />
			<Key text="*" />
			<Key text="reset" className="col-span-2 text-lg" />
			<Key text="=" className="col-span-2 font-bold" />
		</div>
	);
};
