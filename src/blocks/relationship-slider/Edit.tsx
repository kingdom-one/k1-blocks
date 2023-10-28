import React, { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import {
	RichText,
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	Button,
	ButtonGroup,
	ColorPalette,
} from '@wordpress/components';
import colors from '../../assets/colors.json';

export default function EditComponent( { attributes, setAttributes } ) {
	const {
		hasBackgroundImage,
		backgroundImage,
		headline,
		subheadline,
		headlineColor,
		subheadlineColor,
	} = attributes;

	const blockProps = useBlockProps( {
		className: 'stakes bg-grey',
		style: { padding: 40 },
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
				<div className="stakes__background">
					{ hasBackgroundImage ? (
						<>
							<div
								className="stakes__background--image"
								style={ {
									backgroundImage: `url(${ backgroundImage })`,
								} }
							/>
							<div
								className="stakes__background--color"
								style={ { '--overlay': '.75' } }
							/>
						</>
					) : (
						<div className="stakes__background--color" />
					) }
				</div>
				<div className="stakes__content">
					<span>Slider Section Headline:</span>
					<RichText
						placeholder="The Slider Section headline"
						value={ headline }
						onChange={ ( headline ) =>
							setAttributes( { headline } )
						}
						className="headline"
						tagName="h2"
						allowedFormats={ [ 'custom/headline-color' ] }
						style={ {
							color: headlineColor,
						} }
					/>
					<span>Slider Section Subheadline:</span>
					<RichText
						placeholder="write something nice..."
						value={ subheadline }
						onChange={ ( subheadline ) =>
							setAttributes( { subheadline } )
						}
						className="subheadline"
						tagName="p"
						allowedFormats={ [ 'core/paragraph' ] }
						style={ {
							color: subheadlineColor,
							fontSize: 18,
						} }
					/>
				</div>
			</section>
		</>
	);
}
