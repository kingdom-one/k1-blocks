import { registerBlockType } from '@wordpress/blocks';
import EditComponent from './Edit';
import SaveComponent from './Save';
import block from './block.json';
import './style.scss';

registerBlockType( block.name, {
	title: block.title,
	edit: EditComponent,
	save: SaveComponent,
} );
