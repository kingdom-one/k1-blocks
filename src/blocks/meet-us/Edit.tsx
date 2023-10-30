import React, { useState, useEffect } from '@wordpress/element';
import {
	RichText,
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	SelectControl,
	Button,
	ButtonGroup,
	ColorPalette,
	ToggleControl,
} from '@wordpress/components';
import colors from '../../assets/colors.json';
import Leaves from '../../assets/leaves/leaves';

function getThePostId(): string | null {
	const url = new URL( window.location.href );
	return url.searchParams.get( 'post' );
}

export default function EditComponent( { attributes, setAttributes } ) {
	const {
		backgroundImage,
		backgroundColor,
		headlineColor,
		subheadlineColor,
	} = attributes;

	const blockProps = useBlockProps( {
		className: 'hero',
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title="Background" initialOpen={ true }>
					<PanelRow>
						<ColorPalette
							colors={ colors.palette }
							onChange={ ( val ) => {
								setAttributes( { backgroundColor: val } );
							} }
							clearable={ false }
							value={ backgroundColor }
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title="Headline Color" initialOpen={ false }>
					<PanelRow>
						<ColorPalette
							colors={ colors.palette }
							onChange={ ( val ) => {
								setAttributes( { headlineColor: val } );
							} }
							clearable={ false }
							value={ headlineColor }
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title="Subheadline Color" initialOpen={ false }>
					<PanelRow>
						<ColorPalette
							colors={ colors.palette }
							onChange={ ( val ) => {
								setAttributes( { subheadlineColor: val } );
							} }
							clearable={ false }
							value={ subheadlineColor }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
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
							<div className="col-1 align-self-start h-auto position-relative d-none d-md-block">
								<Leaves leaves={ leaves } />
							</div>
							<div className="position-relative d-flex flex-column col-11">
								<RichText
									placeholder="the hero headline..."
									value={ headline ?? pageTitle }
									onChange={ ( headline ) =>
										setAttributes( { headline } )
									}
									className="hero__content--headline headline mb-5 display-1"
									tagName="h1"
									allowedFormats={ [
										'custom/headline-color',
									] }
									style={ {
										color: headlineColor,
									} }
								/>
								<RichText
									placeholder="A snappy subheadline goes here. Or not. You can leave alone and nothing will appear on the frontend."
									className="hero__content--subheadline subheadline"
									tagName="span"
									value={ subheadline }
									onChange={ ( subheadline ) =>
										setAttributes( { subheadline } )
									}
									style={ {
										color: subheadlineColor,
										fontFamily:
											'var(--wp--preset--font-family--poppins)',
										fontSize: 24,
									} }
									allowedFormats={ [ 'core/paragraph' ] }
								/>
							</div>
						</div>
					</div>
					<div className="container my-5">
						<div className="row position-relative z-3">
							<div className="col-1"></div>
							<div className="col-lg-11">
								<InnerBlocks
									allowedBlocks={ [ 'core/buttons' ] }
									template={ [
										[
											'core/buttons',
											{},
											[
												[
													'core/button',
													{
														text: 'get started',
														href: '/get-started',
													},
												],
											],
										],
									] }
								/>
							</div>
						</div>
					</div>
				</div>
				<aside className="top-talent-groups z-3">
					<div className="container">
						<div className="row justify-content-center">
							{ icons.map( ( icon ) => {
								return (
									<div className="icon d-flex flex-column text-white align-items-center text-center col-12 col-lg-3 my-5 my-lg-0">
										<span className="mt-5 fs-5 icon__label">
											{ icon.title }
										</span>
									</div>
								);
							} ) }
						</div>
					</div>
				</aside>
			</section>
		</>
	);
}
