import React, { useState } from '@wordpress/element';
import { registerBlockType } from '@wordpress/blocks';
import {
	useBlockProps,
	InspectorControls,
	RichText,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	SelectControl,
	RangeControl,
	ToggleControl,
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
		const { icon, size, hasLink, linkText } = attributes;
		const [ linkEnabled, setLinkEnabled ] = useState( hasLink );

		const blockProps = useBlockProps( {
			className: 'k1-icon',
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
								<p>
									<i>
										Setting the text to a link will make the
										whole icon and text clickable.
									</i>
								</p>
								<ToggleControl
									label="Add Text"
									checked={ hasLink }
									onChange={ () => {
										setLinkEnabled( ! linkEnabled );
										setAttributes( {
											hasLink: ! linkEnabled,
										} );
									} }
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
										{ value: 50, label: '50' },
										{ value: 100, label: '100' },
										{ value: 150, label: '150' },
										{ value: 200, label: '200' },
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
						className={ `k1-icon__${ icon }` }
					/>
					{ hasLink && (
						<RichText
							tagName="span"
							value={ linkText }
							onChange={ ( linkText ) =>
								setAttributes( { linkText } )
							}
							allowedFormats={ [
								'core/bold',
								'core/italic',
								'core/link',
								'core/text-color',
								'core-underline',
							] }
						/>
					) }
				</figure>
			</>
		);
	},
	save: ( { attributes } ) => {
		const { icon, size, hasLink, linkText } = attributes;

		const blockProps = useBlockProps.save( {
			className: 'k1-icon',
		} );
		return (
			<figure { ...blockProps }>
				<Icon
					size={ size }
					icon={ getIcon( icon ) }
					className={ `k1-icon__${ icon }` }
				/>
				{ hasLink && (
					<RichText.Content value={ linkText } tagName="a" />
				) }
			</figure>
		);
	},
} );
