import { newSlider } from '../../assets/swipers/swiper';

/** Call function to init slider  */
export function testimonialsSlider( el?: HTMLElement ) {
	const sliderEl = document.getElementById( 'testimonials-swiper' );
	if ( ! el && ! sliderEl ) {
		throw new Error( "couldn't find swiper!" );
	}

	newSlider( el ?? sliderEl, {
		pagination: {
			el: '.swiper-testimonials-pagination',
		},
		navigation: {
			nextEl: '.swiper-testimonials-button-next',
			prevEl: '.swiper-testimonials-button-prev',
		},
	} );
}
