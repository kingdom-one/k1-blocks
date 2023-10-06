import React, { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import { leaves2, leaves3, leaves4 } from '../../assets/leaf-svgs';
import {
	RichText,
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	InnerBlocks,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	SelectControl,
	Button,
	ButtonGroup,
	ColorPalette,
} from '@wordpress/components';
import colors from '../../assets/colors.json';

function getThePostId(): string | null {
	const url = new URL( window.location.href );
	return url.searchParams.get( 'post' );
}

export function getTheLeaves( leaves: string ) {
	switch ( leaves ) {
		case '2':
			return leaves2;
		case '3':
			return leaves3;
		case '4':
			return leaves4;
	}
}

export default function EditComponent( { attributes, setAttributes } ) {
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

	const blockProps = useBlockProps( {
		className: 'hero d-flex flex-column justify-content-center',
	} );
	const [ imgID, setImgID ] = useState< number | undefined >( undefined );
	useEffect( () => {
		async function getImg() {
			if ( ! imgID ) return;
			const response = await apiFetch( {
				path: `wp/v2/media/${ imgID }`,
				method: 'GET',
			} );
			if ( response ) {
				setAttributes( {
					backgroundImage:
						response.media_details.sizes.full.source_url,
				} );
			}
		}
		getImg();
	}, [ imgID, setAttributes ] );

	useEffect( () => {
		async function setPostTitle() {
			const postId = getThePostId();
			const response = await apiFetch( {
				method: 'GET',
				path: `wp/v2/pages/${ postId }?_fields[]=title`,
			} );
			setAttributes( { pageTitle: response?.title.rendered } );
		}
		setPostTitle();
	}, [ setAttributes ] );

	function clearBackgroundImage() {
		setAttributes( {
			backgroundImage: '',
			hasBackgroundImage: false,
		} );
		setImgID( undefined );
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title="Background" initialOpen={ true }>
					<PanelRow>
						<MediaUploadCheck>
							<MediaUpload
								allowedTypes={ [ 'image' ] }
								onSelect={ ( img ) => {
									setAttributes( {
										hasBackgroundImage: true,
									} );
									setImgID( img.id );
								} }
								value={ backgroundImage }
								render={ ( { open } ) => (
									<ButtonGroup>
										<Button
											variant="primary"
											onClick={ open }
										>
											Choose Background Image
										</Button>
										{ hasBackgroundImage && (
											<Button
												variant="secondary"
												onClick={ clearBackgroundImage }
											>
												Clear Background Image
											</Button>
										) }
									</ButtonGroup>
								) }
							/>
						</MediaUploadCheck>
					</PanelRow>
					<PanelRow>
						<p style={ { marginTop: 20 } }>
							Set the Background Color with the Styles Pane.
						</p>
					</PanelRow>
					<PanelRow>
						<SelectControl
							label="Color Direction"
							value={ colorDirection }
							options={ [
								{
									label: 'Left',
									value: 'left',
								},
								{
									label: 'Right',
									value: 'right',
								},
							] }
							onChange={ ( colorDirection ) =>
								setAttributes( { colorDirection } )
							}
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
				<PanelBody title="Leaves" initialOpen={ false }>
					<PanelRow>
						<SelectControl
							label="Leaves Icon"
							value={ leaves }
							options={ [
								{
									label: '2',
									value: '2',
								},
								{
									label: '3',
									value: '3',
								},
								{
									label: '4',
									value: '4',
								},
							] }
							onChange={ ( numLeaves ) =>
								setAttributes( { leaves: numLeaves } )
							}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
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
			</section>
		</>
	);
}
