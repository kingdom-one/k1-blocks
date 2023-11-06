import React from '@wordpress/element';
import * as icon from './icon-set';

function getIcon( iconName ) {
	switch ( iconName ) {
		case 'academy':
			return icon.academy;
		case 'finance':
			return icon.finance;
		case 'hr':
			return icon.hr;
		case 'justice':
			return icon.justice;
		case 'marcom':
			return icon.marcom;
		case 'spark':
			return icon.sparkMono;
		case 'staffing':
			return icon.staffing;
		case 'strategy':
			return icon.strategy;
		case 'webDev':
			return icon.webDev;
	}
}

export default function K1Icon( {
	icon,
	color,
}: {
	icon:
		| 'academy'
		| 'finance'
		| 'hr'
		| 'justice'
		| 'marcom'
		| 'spark'
		| 'staffing'
		| 'strategy'
		| 'webDev';
	color: 'white';
} ) {
	return (
		<div
			className="k1-icon__container"
			id={ `k1-icon-${ icon }` }
			style={ { color: color } }
		>
			{ getIcon( icon ) }
		</div>
	);
}
