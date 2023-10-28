<?php
$swiper_slides = array(
	array(
		'image'       => k1_get_image_asset_url( 'tim', 'png', '', false ),
		'quote'       => 'Kingdom One brings a level a professionalism that we need and does so with Christ at the center.',
		'attribution' => 'Tim Kuhl',
		'role'        => 'Pastor, Some Church',
	),
	array(
		'image'       => k1_get_image_asset_url( 'tim', 'png', '', false ),
		'quote'       => 'Kingdom One brings a level a professionalism that we need and does so with Christ at the center.',
		'attribution' => 'Tim Kuhl',
		'role'        => 'Pastor, Some Church',
	),
	array(
		'image'       => k1_get_image_asset_url( 'tim', 'png', '', false ),
		'quote'       => 'Kingdom One brings a level a professionalism that we need and does so with Christ at the center.',
		'attribution' => 'Tim Kuhl',
		'role'        => 'Pastor, Some Church',
	),
	array(
		'image'       => k1_get_image_asset_url( 'tim', 'png', '', false ),
		'quote'       => 'Kingdom One brings a level a professionalism that we need and does so with Christ at the center.',
		'attribution' => 'Tim Kuhl',
		'role'        => 'Pastor, Some Church',
	),
);
?>

<aside class="testimonials text-center py-5">
	<div class="container-fluid">
		<div class="row">
			<div class="swiper" id="testimonials-swiper">
				<div class="swiper-wrapper">
					<?php foreach ( $swiper_slides as $slide ) : ?>
					<div class="swiper-slide">
						<img src="<?php echo $slide['image']; ?>">
						<p class="quote">"<?php echo $slide['quote']; ?>"</p>
						<div class="quote__attribution">
							<span class="subheadline quote__attribution--name">
								<?php echo $slide['attribution']; ?>
							</span>
							<span class="subheadline quote__attribution--role">
								<?php echo $slide['role']; ?>
							</span>
						</div>
					</div>
					<?php endforeach; ?>
				</div>
				<div class="swiper-button-prev swiper-testimonials-button-prev"></div>
				<div class="swiper-button-next swiper-testimonials-button-next"></div>
			</div>
		</div>
		<div class="row mt-5 pt-5">
			<div class="swiper-pagination swiper-testimonials-pagination"></div>
		</div>
	</div>
</aside>