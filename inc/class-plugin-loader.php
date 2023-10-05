<?php
/**
 * Plugin Loader
 *
 * @package KingdomOne
 */

/** Init Plugin */
class Plugin_Loader {
	/** Load the Blocks */
	public function __construct() {
		add_action( 'init', array( $this, 'register_blocks' ) );
	}

	/** Register the blocks */
	public function register_blocks() {
		$blocks = array(
			'hero',
			'hero-content',
		);

		foreach ( $blocks as $block ) {
			register_block_type(
				PLUGIN_PATH . "build/blocks/{$block}"
			);
		}
	}
}
