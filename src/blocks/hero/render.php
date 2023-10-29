<?php
/**
 * The Hero Section
 * 
 * @package KingdomOne
 */

$color = $attributes['backgroundColor'];
$has_background_image = $attributes['hasBackgroundImage'];
$color_direction = $attributes['colorDirection'];
$background_image = $attributes['backgroundImage'];
$leaves = $attributes['leaves'];
$headline = isset($attributes['headline']) ? $attributes['headline'] : $attributes['pageTitle'];
$headline_color = $attributes['headlineColor'];
$subheadline = empty($attributes['subheadline']) ? '' : $attributes['subheadline'];
$subheadline_color = $attributes['subheadlineColor'];
?>
<section class="hero" id="hero">
	<div class='<?php echo "hero__background color-{$color_direction}";?>'>
		<?php
		if ( $has_background_image ) {
			echo "<div class='hero__background--color' style='background-color:{$color}'></div><div class='hero__background--lower' style='background-image:url({$background_image})'></div><div class='hero__background--upper'></div>";
		} else {
			echo "<div class='hero__background--color' style='background-color:{$color}'></div>";
		}
		?>
	</div>
	<div class="hero__content position-relative z-3">
		<div class="container d-flex flex-column align-items-stretch">
			<div class="row">
				<div class="col-1 align-self-start h-auto position-relative d-none d-md-block">
					<?php k1_get_svg_asset( "leaves-{$leaves}" );?>
				</div>
				<div class="col-11 position-relative d-flex flex-column">
					<h1 class="hero__content--eadline mb-5 display-1" style="color:<?php echo $headline_color;?>"><?php echo $headline;?></h1>
					<span class="hero__content--subheadline subheadline" style="color:<?php echo $subheadline_color;?>"><?php echo $subheadline;?></span>
				</div>
			</div>
		</div>
		<div class="container my-5">
			<div class="row position-relative z-3">
				<div class="col-1"></div>
				<div class="col-lg-11">
					<?php echo $content; ?>
				</div>
			</div>
		</div>
	</div>
	<?php if ($attributes['bottomBar']) : ?>
	<aside class="top-talent-groups z-3">
		<div class="container">
			<div class="row justify-content-center">
				<?php
				foreach ( $attributes['icons'] as $icon ) {
					$markup = "<div class='icon d-flex flex-column text-white align-items-center text-center col-12 col-lg-3 my-5 my-lg-0'>";
					$markup .= get_the_k1_icon($icon['value'],$attributes['iconColor']);
					$markup .= "<span class='mt-5 fs-5 icon__label'>{$icon['label']}</span></div>";
					echo $markup;
					
				}
				?>
			</div>
		</div>
	</aside>
	<?php endif;?>
</section>