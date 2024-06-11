import React from '@wordpress/element';
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, SelectControl } from '@wordpress/components';
import { getIcon } from '../../assets/icon-set/getIcon';
import block from './block.json';
import './style.scss';

registerBlockType( block.name, {
	title: block.title,
	edit: ( { attributes, setAttributes } ) => {
		const { icon } = attributes;

		const blockProps = useBlockProps( {
			className: 'k1-icon__background',
		} );

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
										{
											label: 'staffing',
											value: 'staffing',
										},
										{
											label: 'strategy',
											value: 'strategy',
										},
										{ label: 'webDev', value: 'webDev' },
									] }
									onChange={ ( icon ) =>
										setAttributes( { icon: icon } )
									}
								/>
							</div>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
				<figure { ...blockProps }>
					<div className={ `k1-icon__container k1-icon__${ icon }` }>
						{ getIcon( icon ) }
					</div>
				</figure>
			</>
		);
	},
	save: ( { attributes } ) => {
		const { icon } = attributes;

		const blockProps = useBlockProps.save( {
			className: 'k1-icon__background',
		} );
		return (
			<figure { ...blockProps }>
				<div className={ `k1-icon__container k1-icon__${ icon }` }>
					{ getIcon( icon ) }
				</div>
			</figure>
		);
	},
} );
