import React from '@wordpress/element';
import { leaves2, leaves3, leaves4 } from './leaf-svgs';

function getLeaves( leaves: string ) {
	switch ( leaves ) {
		case '2':
			return leaves2;
		case '3':
			return leaves3;
		case '4':
			return leaves4;
	}
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
			className="k1-leaves__container"
			id={ `leaves-${ leaves }` }
			style={ styling }
		>
			{ getLeaves( leaves ) }
		</div>
	);
}
