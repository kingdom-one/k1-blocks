import { newSlider } from '../../assets/swipers/swiper';

/** Call function to init slider  */
const brandsSlider = () => {
	const el = document.getElementById( 'brands-swiper' );
	if ( ! el ) {
		throw new Error( `Brands Slider not found.` );
	}
	if ( el ) {
		newSlider( el, {
			pagination: {
				el: '.swiper-brands-pagination',
			},
			navigation: {
				nextEl: '.swiper-brands-button-next',
				prevEl: '.swiper-brands-button-prev',
			},
		} );
	}
};

try {
	brandsSlider();
} catch ( err ) {
	console.warn( err );
}
