<?php
/**
 * Plugin Name:       Kingdom One Blocks
 * Description:       Handle the basics with this plugin.
 * Version:           2.0.0
 * Requires at least: 6.3
 * Tested up to:      6.5.3
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

$plugin_loader = new Plugin_Loader();

register_activation_hook( __FILE__, array( $plugin_loader, 'activate' ) );
register_deactivation_hook( __FILE__, array( $plugin_loader, 'deactivate' ) );