import React from '@wordpress/element';
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	SelectControl,
	ToggleControl,
	FlexItem,
	RangeControl,
} from '@wordpress/components';

export default function EditComponent( { attributes, setAttributes } ) {
	const {
		backgroundColor,
		colorDirection,
		opacity,
		style: { background },
		hasOverlay,
	} = attributes;

	const blockProps = useBlockProps( {
		className: 'color-container',
		style: { position: 'relative', background: 'none!important' },
	} );

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
					{ background?.backgroundImage && (
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
				<div
					className={ `color-container__background clip-color-${ colorDirection }` }
				>
					<div
						className="color-container__background--color"
						style={ {
							backgroundColor: `var(--wp--preset--color--${ backgroundColor })`,
						} }
					/>
					{ background?.backgroundImage ? (
						<>
							<div
								className="color-container__background--lower"
								style={ {
									backgroundImage: `url(${ background?.backgroundImage.url })`,
									backgroundPosition:
										background.backgroundPosition ||
										'center',
									backgroundSize:
										background.backgroundSize || 'cover',
								} }
							/>
							{ hasOverlay && (
								<div
									className="color-container__background--upper"
									style={ {
										backgroundColor: `rgba(0,0,0,${
											opacity / 100
										})`,
									} }
								/>
							) }
						</>
					) : (
						<div className="color-container__background--lower" />
					) }
				</div>
				<div
					className="color-container__content"
					style={ { zIndex: 5, position: 'relative' } }
				>
					<InnerBlocks />
				</div>
			</section>
		</>
	);
}
