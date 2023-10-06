import React from '@wordpress/element';
import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';
import { getTheLeaves } from './Edit';

export default function SaveComponent( { attributes } ) {
	const blockProps = useBlockProps.save( {
		className: 'hero d-flex flex-column justify-content-center',
	} );
	const {
		hasBackgroundImage,
		backgroundImage,
		backgroundColor,
		colorDirection,
		leaves,
		headline,
		subheadline,
		headlineColor,
		subheadlineColor,
		pageTitle,
	} = attributes;
	return (
		<section { ...blockProps }>
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
			<div className="hero__content position-relative z-3">
				<div className="container d-flex flex-column align-items-stretch">
					<div className="row">
						<div className="col-1 align-self-start h-auto position-relative d-none d-md-block">
							{ getTheLeaves( leaves ) }
						</div>
						<div className="position-relative d-flex flex-column col-11">
							<RichText.Content
								value={ headline ?? pageTitle }
								className="hero__content--headline headline mb-5 display-1"
								tagName="h1"
								style={ {
									color: headlineColor,
								} }
							/>
							<RichText.Content
								className="hero__content--subheadline subheadline"
								tagName="span"
								value={ subheadline }
								style={ {
									color: subheadlineColor,
									fontFamily:
										'var(--wp--preset--font-family--poppins)',
									fontSize: 24,
								} }
							/>
						</div>
					</div>
				</div>
				<div className="container my-5">
					<div className="row position-relative z-3">
						<div className="col-1"></div>
						<div className="col-lg-11">
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
