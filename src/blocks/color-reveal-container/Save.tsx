import React from '@wordpress/element';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function SaveComponent() {
	const blockProps = useBlockProps.save( {
		className: 'color-container my-5 py-5',
	} );
	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
		</div>
	);
}
