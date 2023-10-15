import React from 'react';

export default function keys({ type, value, className }) {
	let classCase;

	if (type === 'base') {
		classCase =
			'bg-keys-base-1 border-keys-base-2 hover:bg-keys-base-3 text-2xl text-text-2 font-extrabold';
	}

	if (type === 'func') {
		classCase =
			'bg-keys-func-1 border-keys-func-2 hover:bg-keys-func-3 text-lg font-medium';
	}

	if (type === 'eql') {
		classCase =
			'bg-keys-eql-1 border-keys-eql-2 text-2xl hover:bg-keys-eql-3 font-medium';
	}

	return (
		<div
			className={`
             px-2 pt-1 
            rounded-md border-b-4
            grid place-items-center
            transition-colors hover:cursor-pointer ${classCase} ${className}`}
		>
			{value}
		</div>
	);
}
