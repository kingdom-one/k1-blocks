<?php
/**
 * Plugin Name:       Kingdom One Blocks
 * Description:       Handle the basics with this plugin.
 * Version:           1.1
 * Requires at least: 6.3
 * Requires PHP:      8.2
 * Author:            KJ Roelke
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       kingdom_one
 *
 * @package KingdomOne
 */

if ( ! defined( 'ABSPATH' ) ) {
	echo 'Rude.';
	die;
}

define( 'PLUGIN_PATH', plugin_dir_path( __FILE__ ) );

/** Call the class */
require PLUGIN_PATH . '/inc/class-plugin-loader.php';

$theme_plugin = new Plugin_Loader();