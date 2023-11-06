import React from '@wordpress/element';
import { registerBlockType } from '@wordpress/blocks';
import block from './block.json';
import './style.scss';
import EditComponent from './Edit';

registerBlockType( block.name, {
	title: block.title,
	edit: EditComponent,
} );
