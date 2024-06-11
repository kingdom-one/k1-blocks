import React from '@wordpress/element';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function SaveComponent( { attributes } ) {
	const {
		backgroundColor,
		colorDirection,
		style: { background },
		opacity,
	} = attributes;
	const blockProps = useBlockProps.save( {
		className: 'color-container',
		style: { position: 'relative', background: 'none!important' },
	} );
	return (
		<section { ...blockProps }>
			<div
				className={ `color-container__background clip-color-${ colorDirection }` }
			>
				<div
					className="color-container__background--color"
					style={ {
						backgroundColor: `var(--wp--preset--color--${ backgroundColor })`,
					} }
				/>
				{ background.backgroundImage ? (
					<>
						<div
							className="color-container__background--lower"
							style={ {
								backgroundImage: `url(${ background.backgroundImage.url })`,
								backgroundPosition:
									background.backgroundPosition || 'center',
								backgroundSize:
									background.backgroundSize || 'cover',
							} }
						/>
						<div
							className="color-container__background--upper"
							style={ {
								backgroundColor: `rgba(0,0,0,${
									opacity / 100
								})`,
							} }
						/>
					</>
				) : (
					<div className="color-container__background--lower" />
				) }
			</div>
			<div
				className="color-container__content"
				style={ { zIndex: 5, position: 'relative' } }
			>
				<InnerBlocks.Content />
			</div>
		</section>
	);
}
