import React from '@wordpress/element';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl } from '@wordpress/components';
import Leaves from '../../assets/leaves/leaves';

export default function EditComponent( { attributes, setAttributes } ) {
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
}
