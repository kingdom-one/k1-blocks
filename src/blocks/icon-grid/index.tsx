import React from '@wordpress/element';
import { registerBlockType } from '@wordpress/blocks';
import block from './block.json';
import './main.scss';
import PlaceholderBlock from '../PlaceholderBlock';

registerBlockType( block.name, {
	title: block.title,
	edit: () => (
		<PlaceholderBlock title="Community, Tools and Knowledge Icon Grid" />
	),
} );
