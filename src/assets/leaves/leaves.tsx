import React from '@wordpress/element';
import { leaves2, leaves3, leaves4 } from './leaf-svgs';

function getLeaves( leaves: '2' | '3' | '4' ) {
	const leafMap = {
		'2': leaves2,
		'3': leaves3,
		'4': leaves4,
	};
	return leafMap[ leaves ];
}

export default function Leaves( {
	leaves,
	color = 'white',
	direction = 'left',
}: {
	leaves: '2' | '3' | '4';
	color?: string;
	direction?: 'left' | 'right';
} ) {
	const styling = {
		color: color,
		scaleX: 1,
	};
	if ( 'right' === direction ) {
		styling.scaleX = -1;
	}
	return (
		<div
			className="k1-leaves"
			id={ `leaves-${ leaves }` }
			style={ styling }
		>
			{ getLeaves( leaves ) }
		</div>
	);
}
