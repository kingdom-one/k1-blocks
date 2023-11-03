import React from '@wordpress/element';
import { registerBlockType } from '@wordpress/blocks';
import PlaceholderBlock from '../PlaceholderBlock';
import block from './block.json';
import './style.scss';

registerBlockType( block.name, {
	title: block.title,
	edit: () => (
		<PlaceholderBlock
			title="'Trusted By' Slider"
			message='Edit the slides with the "Clients" tab in the WordPress Dashboard.'
		/>
	),
} );
