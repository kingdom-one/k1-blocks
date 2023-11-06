<?php
/**
 * Color Container
 * A container that outputs the color reveals in the background.
 *
 * @package KingdomOne
 */

$has_bg_image = $attributes['hasBackgroundImage'];
if ( $has_bg_image ) {
	$bg_image = $attributes['backgroundImage'];
	$opacity  = $attributes['opacity'] / 100;
}
$bg_color        = $attributes['backgroundColor'];
$color_direction = 'clip-color-' . $attributes['colorDirection'];
?>

<div class="color-container py-5 position-relative">
	<div class="color-container__background <?php echo $color_direction; ?>">
		<div class="color-container__background--color" style="background-color:<?php echo $bg_color; ?>"></div>
		<?php if ( $has_bg_image ) : ?>
		<div class="color-container__background--lower" style="background-image:url(<?php echo $bg_image; ?>);background-position:center;background-size:cover;"></div>
		<div class="color-container__background--upper" style="background-color:rgba(0,0,0,<?php echo $opacity; ?>);"></div>
		<?php else : ?>
		<div class="color-container__background--lower"></div>
		<?php endif; ?>
	</div>
	<div class="color-container__content container"><?php echo $content; ?></div>
</div>