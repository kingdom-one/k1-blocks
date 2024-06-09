<?php
/**
 * Text Callouts
 *
 * @package KingdomOne
 */

$style = isset( $attributes['align'] ) ? "style='text-align:{$attributes['align']}'" : '';
?>
<aside class="text-callout">
	<div class="container">
		<div class="row">
			<div class="col">
				<?php echo "<h2 {$style}>{$attributes['headline']}</h2>"; ?>
			</div>
		</div>
	</div>
</aside>