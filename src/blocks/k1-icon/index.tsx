import React from '@wordpress/element';
import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	SelectControl,
	RangeControl,
	Icon,
} from '@wordpress/components';
import { getIcon } from '../../assets/icon-set/getIcon';
import block from './block.json';
import './style.scss';

registerBlockType( block.name, {
	title: block.title,
	edit: ( { attributes, setAttributes } ) => {
		const { icon, size } = attributes;

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
										setAttributes( { icon } )
									}
								/>
							</div>
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
				<figure { ...blockProps }>
					<Icon
						size={ size }
						icon={ getIcon( icon ) }
						className={ `k1-icon__container k1-icon__${ icon }` }
					/>
				</figure>
			</>
		);
	},
	save: ( { attributes } ) => {
		const { icon, size } = attributes;

		const blockProps = useBlockProps.save( {
			className: 'k1-icon__background',
		} );
		return (
			<figure { ...blockProps }>
				<Icon
					size={ size }
					icon={ getIcon( icon ) }
					className={ `k1-icon__container k1-icon__${ icon }` }
				/>
			</figure>
		);
	},
} );
