import { newSlider } from '../../assets/swipers/swiper';

/** Call function to init slider  */
function testimonialsSlider() {
	const slider = document.getElementById( 'testimonials-swiper' );
	if ( ! slider ) {
		throw new Error( "couldn't find swiper!" );
	}
	newSlider( slider, {
		pagination: {
			el: '.swiper-testimonials-pagination',
		},
		navigation: {
			nextEl: '.swiper-testimonials-button-next',
			prevEl: '.swiper-testimonials-button-prev',
		},
	} );
}

testimonialsSlider();
