import React from '@wordpress/element';
import { registerBlockType } from '@wordpress/blocks';
import PlaceholderBlock from '../PlaceholderBlock';
import block from './block.json';
import './main.scss';

registerBlockType( block.name, {
	title: block.title,
	edit: () => <PlaceholderBlock title="Testimonials Slider" />,
} );
