import { registerBlockType } from '@wordpress/blocks';
import EditComponent from './Edit';
import block from './block.json';
import './main.scss';

registerBlockType( block.name, {
	title: block.title,
	edit: EditComponent,
} );
