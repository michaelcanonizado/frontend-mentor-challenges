import { KeyType } from '../enums/KeyType';

export const getKeyType = (text: string) => {
	const operators = ['-', '+', '/', '*'];

	text = text.trim().toLowerCase();

	if (text.length > 1) {
		console.log('THIS IS A SPECIAL KEY');
		return KeyType.func;
	}

	if (text === '=') {
		console.log('THIS IS A SPECIAL KEY');
		return KeyType.eql;
	}

	if (
		text.length === 1 &&
		(typeof parseInt(text) === 'number' || operators.includes(text))
	) {
		return KeyType.base;
	}
};
