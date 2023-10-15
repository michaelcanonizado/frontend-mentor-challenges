import React from 'react';

import Keys from './keys';

export default function Keypad({ className }) {
	return (
		<div
			className={`bg-bkg-keypad grid grid-cols-4 grid-rows-5 gap-4 ${className}`}
		>
			<Keys type="base" value="1" />
			<Keys type="base" value="2" />
			<Keys type="base" value="3" />
			<Keys type="func" value="DEL" />
			<Keys type="base" value="4" />
			<Keys type="base" value="5" />
			<Keys type="base" value="6" />
			<Keys type="base" value="+" />
			<Keys type="base" value="1" />
			<Keys type="base" value="2" />
			<Keys type="base" value="3" />
			<Keys type="base" value="-" />
			<Keys type="base" value="." />
			<Keys type="base" value="0" />
			<Keys type="base" value="/" />
			<Keys type="base" value="x" />
			<Keys className="col-span-2" type="func" value="RESET" />
			<Keys className="col-span-2" type="eql" value="=" />
		</div>
	);
}
