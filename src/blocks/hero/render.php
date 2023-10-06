<?php
/**
 * The Hero Section
 * 
 * @package KingdomOne
 */

var_dump($attributes);
$color = $attributes['backgroundColor'];
 $has_background_image = $attributes['hasBackgroundImage'];
 $color_direction = $attributes['colorDirection'];
 $background_image = $attributes['backgroundImage'];
?>
<section class="hero d-flex align-items-center" id="hero">
	<div class='<?php echo "hero__background color-{$color_direction}";?>'>
		<?php if ( $has_background_image ) {
			echo "<div class='hero__background--color' style='background-color:var(--wp--preset--color--{$color})'></div><div class='hero__background--lower' style='background-image:url({$background_image})'></div>";
		} else {
			echo '<div class="hero__background--lower" style="background-color:var(--wp--preset--color--primary-dark);"></div>';
		}
		if ($has_background_image) {
			echo '<div class="hero__background--upper"></div>';
		};
		?>
	</div>
	<div class="hero__content"><?php return $block; ?></div>
</section>