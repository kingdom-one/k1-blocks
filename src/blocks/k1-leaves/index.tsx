import React from '@wordpress/element';
import block from './block.json';
import './style.scss';
import Leaves from '../../assets/leaves/leaves';
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl } from '@wordpress/components';

registerBlockType( block.name, {
	title: block.title,
	edit: ( { attributes, setAttributes } ) => {
		const { number, color, size, direction } = attributes;

		const blockProps = useBlockProps( { class: 'container' } );

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
									setAttributes( { number: number } )
								}
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
				<div { ...blockProps }>
					<Leaves
						leaves={ number }
						color={ color }
						direction={ direction }
					/>
				</div>
			</>
		);
	},
	save: ( { attributes } ) => {
		const { number, color, size, direction } = attributes;
		const blockProps = useBlockProps( { class: 'container' } );
		return (
			<div { ...blockProps }>
				<Leaves
					leaves={ number }
					color={ color }
					direction={ direction }
				/>
			</div>
		);
	},
} );
