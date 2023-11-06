import React, { useState, useEffect } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

export default function Slide( { post } ) {
	const {
		acf: { quote, position },
		featured_media,
	} = post;
	const [ thumbnailUrl, setThumbnailUrl ] = useState( undefined );
	useEffect( () => {
		if ( featured_media ) {
			apiFetch( { path: `/wp/v2/media/${ featured_media }` } )
				.then( ( res ) => {
					setThumbnailUrl( res.source_url );
				} )
				.catch( ( err ) => console.error( err ) );
		}
	}, [ featured_media ] );

	return (
		<div className="swiper-slide">
			{ thumbnailUrl && (
				<img src={ thumbnailUrl } alt="Post Thumbnail" />
			) }
			<p className="quote">{ quote }</p>
			<div className="quote__attribution">
				<p className="subheadline quote__attribution--name">
					{ post.title.rendered }
				</p>
				<p className="subheadline quote__attribution--role">
					{ position }
				</p>
			</div>
		</div>
	);
}
