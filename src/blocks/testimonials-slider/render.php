<?php
/**
 * Testimonials Swiper
 * Powered By Testimonials CPT
 *
 * @package KingdomOne
 * @subpackage K1_Blocks
 */

$swiper_slides = new WP_Query(
	array(
		'post_type' => 'testimonial',
	)
);
if ( ! $swiper_slides->have_posts() ) {
	return;
}
?>

<aside class="testimonials text-center py-5">
	<div class="container-fluid">
		<div class="row">
			<div class="swiper" id="testimonials-swiper">
				<div class="swiper-wrapper">
					<?php while ( $swiper_slides->have_posts() ) : ?>
						<?php $swiper_slides->the_post(); ?>
					<div class="swiper-slide">
						<?php the_post_thumbnail(); ?>
						<p class="quote">"<?php the_field( 'quote' ); ?>"</p>
						<div class="quote__attribution">
							<?php the_title( '<span class="subheadline quote__attribution--name">', '</span>' ); ?>
							<span class="subheadline quote__attribution--role">
								<?php the_field( 'position' ); ?>
							</span>
						</div>
					</div>
					<?php endwhile; ?>
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
<?php wp_reset_postdata(); ?>