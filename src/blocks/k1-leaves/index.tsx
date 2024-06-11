import React from '@wordpress/element';
import block from './block.json';
import './style.scss';
import { getLeaves } from '../../assets/leaves/leaves';
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	SelectControl,
	ToggleControl,
	RangeControl,
	Icon,
} from '@wordpress/components';

registerBlockType( block.name, {
	title: block.title,
	edit: ( { attributes, setAttributes } ) => {
		const { number, color, direction, size } = attributes;

		const blockProps = useBlockProps( {
			className: 'k1-leaves',
			style: {
				aspectRatio: 1,
				width: 'auto',
				height: 'auto',
				color: color,
				transform: 'right' === direction ? `scaleX(-1)` : `scaleX(1)`,
			},
		} );
		return (
			<>
				<InspectorControls>
					<PanelBody title="Icon" initialOpen={ true }>
						<PanelRow>
							<SelectControl
								label="Number of leaves"
								value={ number }
								options={ [
									{ label: '2', value: '2' },
									{ label: '3', value: '3' },
									{ label: '4', value: '4' },
								] }
								onChange={ ( number ) =>
									setAttributes( { number } )
								}
							/>
						</PanelRow>
						<PanelRow>
							<ToggleControl
								label="Direction"
								help={ 'Flip the leaves' }
								checked={ 'right' === direction }
								onChange={ ( direction ) =>
									setAttributes( {
										direction: direction ? 'right' : 'left',
									} )
								}
							/>
						</PanelRow>
						<PanelRow>
							<div style={ { width: '100%' } }>
								<RangeControl
									step={ 5 }
									allowReset={ true }
									isShiftStepEnabled={ true }
									marks={ [
										{ value: 50, label: '50px' },
										{ value: 100, label: '100px' },
										{ value: 150, label: '150px' },
										{ value: 200, label: '200px' },
									] }
									label="Icon Size"
									value={ size }
									onChange={ ( size ) =>
										setAttributes( { size } )
									}
									min={ 30 }
									max={ 250 }
								/>
							</div>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
				<div { ...blockProps }>
					<Icon icon={ getLeaves( number ) } size={ size } />
				</div>
			</>
		);
	},
	save: ( { attributes: { number, color, direction, size } } ) => {
		const blockProps = useBlockProps.save( {
			className: 'k1-leaves',
			style: {
				aspectRatio: 1,
				width: 'auto',
				height: 'auto',
				color,
				transform: 'right' === direction ? `scaleX(-1)` : `scaleX(1)`,
			},
		} );
		return (
			<div { ...blockProps }>
				<Icon icon={ getLeaves( number ) } size={ size } />
			</div>
		);
	},
} );
