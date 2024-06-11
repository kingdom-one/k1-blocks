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
} from '@wordpress/components';

registerBlockType( block.name, {
	title: block.title,
	edit: ( { attributes, setAttributes } ) => {
		const { number, color, direction } = attributes;

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
					</PanelBody>
				</InspectorControls>
				<div { ...blockProps }>{ getLeaves( number ) }</div>
			</>
		);
	},
	save: ( { attributes } ) => {
		const { number, color, direction } = attributes;
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
		return <div { ...blockProps }>{ getLeaves( number ) }</div>;
	},
} );
