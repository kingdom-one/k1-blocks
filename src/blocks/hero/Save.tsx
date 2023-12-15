import React from '@wordpress/element';
import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';
import Leaves from '../../assets/leaves/leaves';
import K1Icon from '../../assets/icon-set/k1Icons';

export default function SaveComponent( { attributes } ) {
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
		bottomBar,
		icons,
		iconColor,
	} = attributes;

	const blockProps = useBlockProps.save( { className: 'hero' } );
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
			<div className="hero__content position-relative z-3">
				<div className="container d-flex flex-column align-items-stretch">
					<div className="row">
						<div className="col-2 align-self-start h-auto position-relative d-none d-md-block">
							<Leaves leaves={ leaves } />
						</div>
						<div className="position-relative d-flex flex-column col-10">
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
						<div className="col-2"></div>
						<div className="col-md-10">
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			</div>
			{ bottomBar && (
				<aside className="top-talent-groups z-3">
					<div className="container">
						<div className="top-talent-groups__grid">
							{ icons.map( ( icon ) => {
								return (
									<div
										className="top-talent-groups__icon"
										style={ { color: iconColor } }
									>
										{ K1Icon( icon.value, 'white' ) }
										<span className="mt-5 fs-5 icon__label">
											{ icon.label }
										</span>
									</div>
								);
							} ) }
						</div>
					</div>
				</aside>
			) }
		</section>
	);
}
