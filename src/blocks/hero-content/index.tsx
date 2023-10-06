import { registerBlockType } from '@wordpress/blocks';
import block from './block.json';
import './main.scss';
import save from './Save';
import edit from './Edit';

registerBlockType( block.name, {
	title: block.title,
	save,
	edit,
} );
