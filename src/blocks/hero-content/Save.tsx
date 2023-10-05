import React from '@wordpress/element';
import { RichText } from '@wordpress/block-editor';
import { leaves3 } from '../../assets/leaf-svgs';

export default function save( { attributes } ) {
	return (
		<>
			<div className="hero__content container d-flex flex-column align-items-stretch">
				<div className="row">
					<div className="col-1 align-self-start h-auto position-relative d-none d-md-block">
						{ leaves3 }
					</div>
					<div className="position-relative d-flex flex-column col-11">
						<h1 className="hero__content--headline headline mb-5 display-1">
							<RichText.Content value={ attributes.text } />
						</h1>
					</div>
				</div>
			</div>
			<div className="container my-5">
				<div className="row position-relative z-3">
					<div className="col-1"></div>
					<div className="col-lg-11">
						<a href="/get-started" className="btn__primary--fill">
							Get Started
						</a>
						<a href="#" className="btn__white--outline mx-5">
							Learn More
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
