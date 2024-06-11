import React from '@wordpress/element';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function SaveComponent( { attributes } ) {
	const {
		colorDirection,
		hasBackgroundImage,
		backgroundImage,
		backgroundColor,
		opacity,
	} = attributes;
	const blockProps = useBlockProps.save( {
		className: 'color-container',
		style: { position: 'relative' },
	} );
	return (
		<section { ...blockProps }>
			<div
				className={ `color-container__background clip-color-${ colorDirection }` }
			>
				<div
					className="color-container__background--color"
					style={ { backgroundColor } }
				/>
				{ hasBackgroundImage ? (
					<>
						<div
							className="color-container__background--lower"
							style={ {
								backgroundImage: `url(${ backgroundImage })`,
								backgroundPosition: 'center',
								backgroundSize: 'cover',
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
				className="color-container__content position-relative container"
				style={ { zIndex: 5 } }
			>
				<InnerBlocks.Content />
			</div>
		</section>
	);
}
