import React, { useState, useEffect } from '@wordpress/element';
import {
	RichText,
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
} from '@wordpress/components';

export default function EditComponent( { attributes, setAttributes } ) {
	const {
		hasBackgroundImage,
		backgroundImage,
		backgroundColor,
		colorDirection,
		opacity,
	} = attributes;

	const blockProps = useBlockProps( {
		className: 'color-container my-5 py-5',
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
					<PanelRow>
						Overlay Color
						<RangeControl
							label={ 'Opacity' }
							value={ opacity }
							onChange={ ( opacity ) =>
								setAttributes( { opacity } )
							}
							min={ 0 }
							max={ 100 }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<section { ...blockProps }>
				<div
					className={ `color-container__background clip-color-${ colorDirection }` }
				>
					<div className="color-container__background--color" />
					{ hasBackgroundImage ? (
						<>
							<div
								className="color-container__background--lower"
								style={ {
									backgroundImage: `url(${ backgroundImage })`,
								} }
							/>
							<div className="color-container__background--upper" />
						</>
					) : (
						<div className="color-container__background--lower" />
					) }
				</div>

				<InnerBlocks />
			</section>
		</>
	);
}
