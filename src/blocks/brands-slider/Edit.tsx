import React from '@wordpress/element';
import { useEntityRecords } from '@wordpress/core-data';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, PanelRow } from '@wordpress/components';
import Slide from './Slide';

export default function EditComponent() {
	const { records: posts, isResolving } = useEntityRecords(
		'postType',
		'clients'
	);
	const blockProps = useBlockProps( {
		class: 'clients text-center py-5',
	} );
	if ( isResolving ) {
		return <p>Loading...</p>;
	}
	return (
		<>
			<InspectorControls>
				<PanelBody title="Slider Instructions" initialOpen={ true }>
					<PanelRow>
						<a
							href="/wp-admin/edit.php?post_type=clients"
							target="_blank"
						>
							Click Here to edit the Client slides.
						</a>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			{ posts && 0 === posts.length ? (
				<p { ...blockProps }>
					No slides to show! Head to the "Clients" tab in the
					WordPress dashboard to add some! (There's also a quick link
					in this block's settings in the sidebar.)
				</p>
			) : (
				<aside { ...blockProps }>
					<div className="row">
						<div className="swiper" id="clients-swiper">
							<div className="swiper-wrapper">
								{ posts &&
									posts.map( ( post ) => (
										<Slide post={ post } />
									) ) }
							</div>
							<div className="swiper-button-prev swiper-clients-button-prev" />
							<div className="swiper-button-next swiper-clients-button-next" />
						</div>
					</div>
					<div className="row mt-5 pt-5">
						<div className="swiper-pagination swiper-clients-pagination" />
					</div>
				</aside>
			) }
		</>
	);
}
