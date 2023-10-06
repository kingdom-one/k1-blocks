import React from '@wordpress/element';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
export default function SaveComponent( { attributes } ) {
	const blockProps = useBlockProps.save();
	const {
		hasBackgroundImage,
		backgroundImage,
		backgroundColor,
		colorDirection,
	} = attributes;
	return (
		<section { ...blockProps }>
			<div className="hero__background">
				<div className={ `hero__background color-${ colorDirection }` }>
					<div
						className="hero__background--color"
						style={ {
							backgroundColor: `var(--wp--preset--color-${ backgroundColor })`,
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
			</div>
			<InnerBlocks.Content />
		</section>
	);
}
