import { newSlider } from '../../assets/swipers/swiper';

const stakesSwiperContainer = document.getElementById( 'stakes' );
if ( stakesSwiperContainer ) {
	newSlider( stakesSwiperContainer, {
		pagination: {
			el: '.swiper-stakes-pagination',
		},
		loop: false,
		breakpoints: undefined,
	} );
}
