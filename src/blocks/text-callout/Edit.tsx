import React from '@wordpress/element';
import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function EditComponent( { attributes, setAttributes } ) {
	const { headline, align } = attributes;
	const blockProps = useBlockProps( {
		class: 'text-callout',
	} );

	return (
		<aside { ...blockProps }>
			<RichText
				placeholder="Pop a nice, big, text callout in here."
				value={ headline }
				onChange={ ( headline ) => setAttributes( { headline } ) }
				className="headline"
				tagName="h2"
				style={ { textAlign: align } }
			/>
		</aside>
	);
}
