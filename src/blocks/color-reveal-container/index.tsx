import { registerBlockType } from '@wordpress/blocks';
import EditComponent from './Edit';
import block from './block.json';
import './main.scss';
import SaveComponent from './Save';
import { k1Logo } from '../../assets/BlockIcon';

registerBlockType( block.name, {
	title: block.title,
	icon: k1Logo,
	edit: EditComponent,
	save: SaveComponent,
} );
