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
import { k1Logo } from '../../assets/BlockIcon';

registerBlockType( block.name, {
	title: block.title,
	icon: k1Logo,
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
										{ label: 'Finance', value: 'finance' },
										{ label: 'HR', value: 'hr' },
										{ label: 'Justice', value: 'justice' },
										{ label: 'Marcom', value: 'marcom' },
										{ label: 'Spark', value: 'spark' },
										{
											label: 'Staffing',
											value: 'staffing',
										},
										{
											label: 'Strategy',
											value: 'strategy',
										},
										{ label: 'Web Dev', value: 'webDev' },
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
