import React, { useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	ToggleControl,
	FlexItem,
	RangeControl,
} from '@wordpress/components';

export default function EditComponent( { attributes, setAttributes } ) {
	const {
		backgroundColor,
		colorDirection,
		hasOverlay,
		opacity,
		style: { background },
	} = attributes;

	const blockProps = useBlockProps( {
		className: 'hero',
		style: {
			background: 'none !important',
		},
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title="Background" initialOpen={ true }>
					<PanelRow>
						<ToggleControl
							label="Color Direction"
							help={ 'Flip the direction of the color' }
							checked={ 'left' === colorDirection }
							onChange={ ( colorDirection ) =>
								setAttributes( {
									colorDirection:
										true === colorDirection
											? 'left'
											: 'right',
								} )
							}
						/>
					</PanelRow>
					{ background.backgroundImage && (
						<>
							<PanelRow>
								<ToggleControl
									label="Image Overlay"
									checked={ hasOverlay }
									onChange={ ( hasOverlay ) =>
										setAttributes( { hasOverlay } )
									}
								/>
							</PanelRow>
							{ hasOverlay && (
								<PanelRow>
									<FlexItem style={ { flexGrow: 1 } }>
										<RangeControl
											label="Overlay Opacity"
											value={ opacity }
											onChange={ ( opacity ) =>
												setAttributes( { opacity } )
											}
											min={ 0 }
											max={ 100 }
											step={ 1 }
										/>
									</FlexItem>
								</PanelRow>
							) }
						</>
					) }
				</PanelBody>
			</InspectorControls>
			<section { ...blockProps }>
				<div className={ `hero-background color-${ colorDirection }` }>
					<div
						className="hero-background--color"
						style={ {
							backgroundColor: `var(--wp--preset--color--${ backgroundColor })`,
						} }
					/>
					{ background.backgroundImage && (
						<>
							<div
								className="hero-background--lower"
								style={ {
									backgroundImage: `url(${ background.backgroundImage.url })`,
									backgroundPosition:
										background.backgroundPosition ||
										'center',
									backgroundSize:
										background.backgroundSize || 'cover',
								} }
							/>
							{ hasOverlay && (
								<div
									className="hero-background--upper"
									style={ {
										backgroundColor: `rgba(0,0,0,${
											opacity / 100
										})`,
									} }
								></div>
							) }
						</>
					) }
				</div>
				<div className="hero-content">
					<InnerBlocks />
				</div>
			</section>
		</>
	);
}
