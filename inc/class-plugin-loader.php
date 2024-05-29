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
		$this->load_helpers();
		add_action( 'init', array( $this, 'register_blocks' ) );
		add_filter( 'block_categories_all', array( $this, 'k1_block_category' ) );
	}

    /** Activate the plugin */
	public function activate() {
		flush_rewrite_rules();
	}

    /** Deactivate the plugin */
	public function deactivate() {
		flush_rewrite_rules();
	}

	/** Loads Utilities */
	private function load_helpers() {
		$files = array( 'icon-set', 'leaf-icons' );
		foreach ( $files as $file ) {
			require_once trailingslashit( __DIR__ ) . 'k1-' . $file . '.php';
		}
	}

	/** Register the blocks */
	public function register_blocks() {
		$blocks = array(
			'hero',
			'color-reveal-container',
			'relationship-slider',
			'icon-grid',
			'testimonials-slider',
			'text-callout',
			'brands-slider',
			'k1-icon',
		);

		foreach ( $blocks as $block ) {
			register_block_type(
				PLUGIN_PATH . "build/blocks/{$block}"
			);
		}
	}

	/** Creates new "K1 Blocks" block category and sets its position to be 3rd in the list
	 *
	 * @param array $categories the array of block categories
	 * @return array the updated categories array
	 */
	public function k1_block_category( array $categories ): array {
		$k1_category = array(
			'k1' => array(
				'slug'  => 'k1-blocks',
				'title' => 'Blocks for K1 Site',
			),
		);

		$position   = 0;
		$categories = array_slice( $categories, 0, $position, true ) + $k1_category + array_slice( $categories, $position, null, true );
		$categories = array_values( $categories );
		return $categories;
	}
}