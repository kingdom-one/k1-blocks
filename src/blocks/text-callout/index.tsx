import React from '@wordpress/element';
import { registerBlockType } from '@wordpress/blocks';
import block from './block.json';
import './style.scss';
import EditComponent from './Edit';
import { RichText, useBlockProps } from '@wordpress/block-editor';

registerBlockType( block.name, {
	title: block.title,
	edit: EditComponent,
	save: () => {
		const blockProps = useBlockProps.save();
		return (
			<div { ...blockProps }>
				<RichText.Content />
			</div>
		);
	},
} );
