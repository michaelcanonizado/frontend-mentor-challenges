import { KeyType } from '../enums/KeyType';

export const getKeyType = (text: string): string | undefined => {
	const operators = ['-', '+', '/', '*'];

	text = text.trim().toLowerCase();

	if (text.length > 1) {
		console.log('THIS IS A SPECIAL KEY');
		return KeyType.func;
	} else if (text === '=') {
		console.log('THIS IS A SPECIAL KEY');
		return KeyType.eql;
	} else if (
		text.length === 1 &&
		(typeof parseInt(text) === 'number' || operators.includes(text))
	) {
		return KeyType.base;
	}
};
