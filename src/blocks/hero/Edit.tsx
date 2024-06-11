import React, { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import {
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
				<div className="hero__content">
					<InnerBlocks />
				</div>
			</section>
		</>
	);
}
