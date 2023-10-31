import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types/swiper-options';

const defaultArgs = {
	modules: [ Navigation, Pagination ],
	direction: 'horizontal',
	loop: true,
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	spaceBetween: 20,
	grabCursor: true,
	autoHeight: true,
	centeredSlides: true,
	breakpoints: {
		767: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			centeredSlides: false,
			loop: false,
		},
	},
} as SwiperOptions;

/**
 *
 * @param {HTMLElement} el the element to create a slider on
 * @param {SwiperOptions} args Swiper Options
 * @returns swiper instance
 */
export function newSlider( el: HTMLElement, args: SwiperOptions = {} ): Swiper {
	const newArgs = { ...defaultArgs, ...args };
	const swiper = new Swiper( el, newArgs );
	return swiper;
}
