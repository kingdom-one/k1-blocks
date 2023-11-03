import React from '@wordpress/element';
import { registerBlockType } from '@wordpress/blocks';
import PlaceholderBlock from '../PlaceholderBlock';
import block from './block.json';
import './style.scss';

registerBlockType( block.name, {
	title: block.title,
	edit: () => (
		<PlaceholderBlock
			title="Testimonials Slider"
			message='Edit the slides with the "Testimonials" tab in the WordPress Dashboard.'
		/>
	),
} );
