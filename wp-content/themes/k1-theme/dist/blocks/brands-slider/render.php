<?php
/**
 * Testimonials Swiper
 * Powered By Testimonials CPT
 *
 * @package KingdomOne
 */

$query = new WP_Query(
	array(
		'post_type' => 'clients',
	)
);
if ( ! $query->have_posts() ) {
	return;
}
?>

<aside class="brands py-5 my-5">
	<div class="brands__background clip-color-left">
		<div class="brands__background--color"></div>
		<div class="brands__background--lower"></div>
		<div class="brands__background--upper"></div>
	</div>
	<div class="container-fluid position-relative z-2 py-5">
		<div class="container">
			<row class="my-5 justify-content-center text-white">
				<div class="col-lg-10 text-lg-center">
					<h2 class="text-white">Trusted By</h2>
					<p>We have had the privlege of partnering with so many amazing ministries. Below is some of the recent work that we have had the opportunity to be a part of.</p>
				</div>
			</row>
		</div>
		<div class="row mt-5">
			<div class="swiper" id="brands-swiper">
				<div class="swiper-wrapper">
					<?php
					while ( $query->have_posts() ) {
						$query->the_post();
						if ( get_field( 'show_in_slider' ) ) {
							echo "<div class='swiper-slide p-5 text-white d-flex flex-column align-items-stretch'>";
							$post_thumbnail_id = get_post_thumbnail_id();
							$url               = get_the_post_thumbnail_url();
							$alt               = empty( get_post_meta( $post_thumbnail_id, '_wp_attachment_image_alt', true ) ) ? get_the_title() . ' logo' : get_post_meta( $post_thumbnail_id, '_wp_attachment_image_alt', true );
							$srcset            = wp_get_attachment_image_srcset( $post_thumbnail_id );
							echo "<img class='swiper-slide__logo object-fit-contain' src='{$url}' alt='{$alt}' srcset='{$srcset}'>";
							echo '</div>';
						}
					}
					?>
				</div>
				<div class="swiper-button-prev swiper-brands-button-prev"></div>
				<div class="swiper-button-next swiper-brands-button-next"></div>
			</div>
		</div>
		<div class="row mt-5 pt-5">
			<div class="swiper-pagination swiper-brands-pagination"></div>
		</div>
	</div>
</aside>