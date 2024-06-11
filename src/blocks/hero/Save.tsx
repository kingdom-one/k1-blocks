import React from '@wordpress/element';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function SaveComponent( { attributes } ) {
	const {
		colorDirection,
		backgroundColor,
		hasBackgroundImage,
		backgroundImage,
	} = attributes;

	const blockProps = useBlockProps.save( {
		className: `hero`,
	} );

	return (
		<section { ...blockProps }>
			<div className={ `hero__background color-${ colorDirection }` }>
				<div
					className="hero__background--color"
					style={ {
						backgroundColor: `${ backgroundColor }`,
					} }
				/>
				{ hasBackgroundImage && (
					<>
						<div
							className="hero__background--lower"
							style={ {
								backgroundImage: `url(${ backgroundImage })`,
							} }
						/>
						<div className="hero__background--upper"></div>
					</>
				) }
			</div>
			<div className="hero__content">
				<InnerBlocks.Content />
			</div>
		</section>
	);
}
