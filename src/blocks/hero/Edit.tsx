import React, { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
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
	ToggleControl,
} from '@wordpress/components';

import { iconSetSelectOptions } from '../../assets/icon-set/iconSetSelectOptions';
import colors from '../../assets/colors.json';
import Leaves from '../../assets/leaves/leaves';
import K1Icon from '../../assets/icon-set/k1Icons';
import './editor.scss';

import { WP_REST_API_Attachment, WP_REST_API_Page } from 'wp-types';

function getThePostId(): string | null {
	const url = new URL( window.location.href );
	return url.searchParams.get( 'post' );
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
		bottomBar,
		icons,
		iconColor,
	} = attributes;

	const blockProps = useBlockProps( {
		className: 'hero',
	} );

	const [ imgID, setImgID ] = useState< number | undefined >( undefined );

	useEffect( () => {
		async function getImg() {
			if ( ! imgID ) return;
			const response = await apiFetch< WP_REST_API_Attachment >( {
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
			const response = await apiFetch< WP_REST_API_Page >( {
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

	function setIcon( icon: string, index: number ) {
		const newIcons = [ ...icons ];
		const newIcon = iconSetSelectOptions.find(
			( iconSet ) => iconSet.value === icon
		);
		if ( newIcon ) {
			newIcons[ index ] = newIcon;
			setAttributes( { icons: newIcons } );
		}
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
						<ColorPalette
							colors={ colors.palette }
							onChange={ ( val ) => {
								setAttributes( { backgroundColor: val } );
							} }
							clearable={ false }
							value={ backgroundColor }
						/>
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
				<PanelBody title="Bottom Icon Bar" initialOpen={ false }>
					<PanelRow>
						<ToggleControl
							label="Display Bottom Icon Bar"
							checked={ bottomBar }
							onChange={ ( bottomBar ) => {
								setAttributes( { bottomBar } );
							} }
						/>
					</PanelRow>
					{ bottomBar && (
						<PanelRow>
							<ColorPalette
								colors={ colors.palette }
								onChange={ ( iconColor ) => {
									setAttributes( { iconColor } );
								} }
								clearable={ false }
								value={ iconColor }
							/>
						</PanelRow>
					) }
					{ bottomBar &&
						icons.map( ( option, index: number ) => {
							return (
								<PanelRow key={ option.value }>
									<SelectControl
										label={ `Icon ${ index + 1 }` }
										value={ option.value ?? null }
										options={ [
											{
												value: null,
												label: 'Select an Icon',
											},
											...iconSetSelectOptions,
										] }
										onChange={ ( icon: string ) =>
											setIcon( icon, index )
										}
									/>
								</PanelRow>
							);
						} ) }
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
							<div className="col-2 align-self-start h-auto position-relative d-none d-md-block">
								<Leaves leaves={ leaves } />
							</div>
							<div className="position-relative d-flex flex-column col-10">
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
							<div className="col-2"></div>
							<div className="col-md-10">
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
														variant: 'link',
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
											{ K1Icon( icon.value, iconColor ) }
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
		</>
	);
}
