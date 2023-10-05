import { registerBlockType } from '@wordpress/blocks';
import edit from './Edit';
import block from './block.json';
import save from './Save';
import './main.scss';

registerBlockType( block.name, {
	title: block.title,
	edit: edit,
	save: save,
} );
