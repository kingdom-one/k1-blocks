import React from '@wordpress/element';
import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';

export default function SaveComponent( { attributes } ) {
	const blockProps = useBlockProps.save( {
		className: 'color-container my-5 py-5',
	} );
	const {
		hasBackgroundImage,
		backgroundImage,
		backgroundColor,
		colorDirection,
		opacity,
	} = attributes;
	return <section { ...blockProps }></section>;
}
