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
		className: 'color-container',
		style: { position: 'relative' },
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
									min={ 15 }
									step={ 5 }
									isShiftStepEnabled={ true }
									marks={ [
										{ value: 15, label: '15%' },
										{ value: 35, label: '35%' },
										{ value: 50, label: '50%' },
										{ value: 75, label: '75%' },
										{ value: 100, label: '100%' },
									] }
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
					<InnerBlocks />
				</div>
			</section>
		</>
	);
}
