import React, { useRef } from '@wordpress/element';
import { useEntityRecords } from '@wordpress/core-data';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, PanelRow } from '@wordpress/components';
import Slide from './Slide';
import { testimonialsSlider } from './testimonials-slider';

export default function EditComponent() {
	const ref = useRef( null );
	const { records: posts, isResolving } = useEntityRecords(
		'postType',
		'testimonial'
	);
	if ( ref.current ) {
		testimonialsSlider( ref.current );
	}
	const blockProps = useBlockProps( {
		class: 'testimonials text-center py-5',
	} );
	if ( isResolving ) {
		return <p>Loading...</p>;
	} else
		return (
			<>
				<InspectorControls>
					<PanelBody title="Slider Instructions" initialOpen={ true }>
						<PanelRow>
							<a
								href="/wp-admin/edit.php?post_type=testimonial"
								target="_blank"
							>
								Click Here to edit the testimonial slides.
							</a>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
				<aside { ...blockProps }>
					<div className="row">
						<div
							className="swiper"
							id="testimonials-swiper"
							ref={ ref }
						>
							<div className="swiper-wrapper">
								{ posts &&
									posts.map( ( post ) => (
										<Slide post={ post } />
									) ) }
							</div>
							<div className="swiper-button-prev swiper-testimonials-button-prev" />
							<div className="swiper-button-next swiper-testimonials-button-next" />
						</div>
					</div>
					<div className="row mt-5 pt-5">
						<div className="swiper-pagination swiper-testimonials-pagination" />
					</div>
				</aside>
			</>
		);
}
