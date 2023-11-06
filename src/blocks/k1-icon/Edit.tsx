import React, { useState } from '@wordpress/element';
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
import colors from '../../assets/colors.json';
import Leaves from '../../assets/leaves/leaves';
import K1Icon from '../../assets/icon-set/k1Icons';

function getThePostId(): string | null {
	const url = new URL( window.location.href );
	return url.searchParams.get( 'post' );
}

export default function EditComponent( { attributes, setAttributes } ) {
	const {
		backgroundColor,
		headline,
		subheadline,
		headlineColor,
		subheadlineColor,
		icon,
		iconColor,
	} = attributes;

	const blockProps = useBlockProps( { class: 'container' } );

	return (
		<>
			<InspectorControls>
				<PanelBody title="Icon" initialOpen={ true }>
					<PanelRow>
						<div style={ { width: '100%' } }>
							<SelectControl
								label="K1 Icon"
								value={ icon }
								options={ [
									{ label: 'Academy', value: 'academy' },
									{ label: 'finance', value: 'finance' },
									{ label: 'hr', value: 'hr' },
									{ label: 'justice', value: 'justice' },
									{ label: 'marcom', value: 'marcom' },
									{ label: 'spark', value: 'spark' },
									{ label: 'staffing', value: 'staffing' },
									{ label: 'strategy', value: 'strategy' },
									{ label: 'webDev', value: 'webDev' },
								] }
								onChange={ ( icon ) =>
									setAttributes( { icon: icon } )
								}
							/>
						</div>
					</PanelRow>
					<PanelRow>
						<ColorPalette
							colors={ colors.palette }
							onChange={ ( val ) => {
								setAttributes( { iconColor: val } );
							} }
							clearable={ false }
							value={ iconColor }
						/>
					</PanelRow>
				</PanelBody>
				<PanelBody title="Background" initialOpen={ false }>
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
			<div { ...blockProps }>
				<div className="row justify-content-center">
					<div
						className="icon__background col-lg-3 d-flex justify-content-center align-items-center p-5"
						style={ {
							backgroundColor: backgroundColor,
							width: 250,
							height: 250,
							borderRadius: '50%',
						} }
					>
						<K1Icon icon={ icon } color={ iconColor } />
					</div>
					<div className="col-lg-8 d-flex flex-column justify-content-center">
						<RichText
							placeholder="Meet a team member"
							className="headline"
							tagName="h2"
							value={ headline }
							onChange={ ( headline ) =>
								setAttributes( { headline } )
							}
							style={ {
								color: headlineColor,
								fontFamily:
									'var(--wp--preset--font-family--poppins)',
								fontSize: 48,
							} }
							allowedFormats={ [ 'core/paragraph' ] }
						/>
						<RichText
							placeholder="Meet a team member"
							className="subheadline"
							tagName="p"
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
		</>
	);
}
