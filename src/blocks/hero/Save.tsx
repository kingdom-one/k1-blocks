import React from '@wordpress/element';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function SaveComponent( { attributes } ) {
	const {
		colorDirection,
		backgroundColor,
		style: { background },
		opacity,
		hasOverlay,
	} = attributes;

	const blockProps = useBlockProps.save( {
		className: 'hero',
		style: {
			background: 'none !important',
		},
	} );

	return (
		<section { ...blockProps }>
			<div className={ `hero-background color-${ colorDirection }` }>
				<div
					className="hero-background--color"
					style={ {
						backgroundColor: `var(--wp--preset--color--${ backgroundColor })`,
					} }
				/>
				{ background.backgroundImage && (
					<>
						<div
							className="hero-background--lower"
							style={ {
								backgroundImage: `url(${ background.backgroundImage.url })`,
								backgroundPosition:
									background.backgroundPosition || 'center',
								backgroundSize:
									background.backgroundSize || 'cover',
							} }
						/>
						{ hasOverlay && (
							<div
								className="hero-background--upper"
								style={ {
									backgroundColor: `rgba(0,0,0,${
										opacity / 100
									})`,
								} }
							></div>
						) }
					</>
				) }
			</div>
			<div className="hero-content">
				<InnerBlocks.Content />
			</div>
		</section>
	);
}
