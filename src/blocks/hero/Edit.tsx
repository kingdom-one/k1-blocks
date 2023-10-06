import React, { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import {
	InnerBlocks,
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	SelectControl,
	Button,
	ButtonGroup,
} from '@wordpress/components';

export default function EditComponent( { attributes, setAttributes } ) {
	const {
		hasBackgroundImage,
		backgroundImage,
		backgroundColor,
		colorDirection,
		leaves,
	} = attributes;

	const blockProps = useBlockProps( {
		className: 'hero d-flex flex-column justify-content-center',
		id: 'hero',
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
	}, [ imgID ] );

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
										<Button
											variant="secondary"
											onClick={ clearBackgroundImage }
										>
											Clear Background Image
										</Button>
									</ButtonGroup>
								) }
							/>
						</MediaUploadCheck>
					</PanelRow>
					<PanelRow>
						<p>Set the Background Color with the Styles Pane.</p>
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
				<PanelBody title="Leaves">
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
				<InnerBlocks
					allowedBlocks={ [ 'k1-block-theme/hero-content' ] }
				/>
			</section>
		</>
	);
}
