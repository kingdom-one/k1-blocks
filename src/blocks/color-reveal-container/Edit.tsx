import React, { useState, useEffect } from '@wordpress/element';
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
	InnerBlocks,
} from '@wordpress/block-editor';
import apiFetch from '@wordpress/api-fetch';
import {
	PanelBody,
	PanelRow,
	SelectControl,
	Button,
	ButtonGroup,
	RangeControl,
	ColorPalette,
} from '@wordpress/components';

import colors from '../../assets/colors.json';

export default function EditComponent( { attributes, setAttributes } ) {
	const {
		hasBackgroundImage,
		backgroundImage,
		backgroundColor,
		colorDirection,
		opacity,
	} = attributes;

	const blockProps = useBlockProps( {
		className: 'color-container my-5 py-5 position-relative',
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
				<PanelBody title="Background Color" initialOpen={ true }>
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
								{
									label: 'Left Top',
									value: 'left-top',
								},
								{
									label: 'Right Top',
									value: 'right-top',
								},
								{
									label: 'Zig Zag Left',
									value: 'zig-zag-left',
								},
								{
									label: 'Zig Zag Right',
									value: 'zig-zag-right',
								},
								{
									label: 'Right Bottom',
									value: 'right-bottom',
								},
								{
									label: 'Left Bottom',
									value: 'left-bottom',
								},
							] }
							onChange={ ( colorDirection ) =>
								setAttributes( { colorDirection } )
							}
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title="Background Image" initialOpen={ true }>
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
					{ hasBackgroundImage && (
						<PanelRow>
							<div style={ { width: '100%' } }>
								<RangeControl
									label={ 'Opacity' }
									value={ opacity }
									onChange={ ( opacity ) =>
										setAttributes( { opacity } )
									}
									min={ 0 }
									max={ 100 }
								/>
							</div>
						</PanelRow>
					) }
				</PanelBody>
			</InspectorControls>
			<section { ...blockProps }>
				<div
					className={ `color-container__background clip-color-${ colorDirection }` }
				>
					<div
						className="color-container__background--color"
						style={ { backgroundColor: backgroundColor } }
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
					className="color-container__content position-relative"
					style={ { zIndex: 5 } }
				>
					<InnerBlocks />
				</div>
			</section>
		</>
	);
}
