import React from '@wordpress/element';

export default function PlaceholderBlock( {
	title,
	message,
}: {
	title: string;
	message?: string;
} ) {
	return (
		<div className="k1-placeholder-block">
			This is the { title }. <br /> { message }
		</div>
	);
}
