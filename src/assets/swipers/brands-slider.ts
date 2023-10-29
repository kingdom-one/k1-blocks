/** Call function to init slider  */
export const brandsSlider = () => {
	const el = document.getElementById( 'brands-swiper' );
	if ( el ) {
		return newSlider( el, {
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

brandsSlider();
