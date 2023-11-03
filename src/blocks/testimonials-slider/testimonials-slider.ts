import { newSlider } from '../../assets/swipers/swiper';

/** Call function to init slider  */
function testimonialsSlider() {
	const sliderEl = document.getElementById( 'testimonials-swiper' );
	if ( ! sliderEl ) {
		throw new Error( "couldn't find swiper!" );
	}
	newSlider( sliderEl, {
		pagination: {
			el: '.swiper-testimonials-pagination',
		},
		navigation: {
			nextEl: '.swiper-testimonials-button-next',
			prevEl: '.swiper-testimonials-button-prev',
		},
	} );
}
try {
	testimonialsSlider();
} catch ( err ) {
	console.warn( err );
}
