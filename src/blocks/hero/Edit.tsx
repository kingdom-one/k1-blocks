import React from '@wordpress/element';
import { InnerBlocks } from '@wordpress/block-editor';

export default function EditComponent() {
	return (
		<section
			className="hero d-flex flex-column justify-content-center"
			id="hero"
		>
			<div className="hero__background">
				<div
					className="hero__background--lower"
					style={ {
						backgroundColor: `var(--color-primary--dark)`,
					} }
				/>
			</div>
			<InnerBlocks allowedBlocks={ [ 'k1-block-theme/hero-content' ] } />
		</section>
	);
}
