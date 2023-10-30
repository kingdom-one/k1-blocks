import React from '@wordpress/element';
const style = {
	margin: '2rem auto',
	padding: '2rem',
	textAlign: 'center',
	fontSize: '2rem',
	backgroundColor: 'white',
	fontFamily: `var(--font-body)`,
	border: `4px solid var(--color-primary--dark)`,
	color: `var(--color-primary--dark)`,
	fontWeight: 700,
};

export default function PlaceholderBlock( {
	title,
	message,
}: {
	title: string;
	message?: string;
} ) {
	return (
		<div className="k1-placeholder-block" style={ style }>
			This is the { title }. <br /> { message }
		</div>
	);
}
