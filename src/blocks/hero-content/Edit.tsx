import React from '@wordpress/element';
import { leaves2, leaves3, leaves4 } from '../../assets/leaf-svgs';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps( {
		className: 'hero__content',
	} );
	const { headline, subheadline, textColor } = attributes;
	console.log( textColor );
	return (
		<>
			<div { ...blockProps }>
				<div className="container d-flex flex-column align-items-stretch">
					<div className="row">
						<div className="col-1 align-self-start h-auto position-relative d-none d-md-block">
							{ leaves3 }
						</div>
						<div className="position-relative d-flex flex-column col-11">
							<RichText
								value={ headline }
								onChange={ ( headline ) =>
									setAttributes( { headline } )
								}
								className="hero__content--headline headline mb-5 display-1"
								tagName="h1"
								allowedFormats={ [] }
							/>
							<RichText
								className="hero__content--subheadline subheadline"
								tagName="span"
								value={ subheadline }
								onChange={ ( subheadline ) =>
									setAttributes( { subheadline } )
								}
								allowedFormats={ [] }
							/>
						</div>
					</div>
				</div>
				<div className="container my-5">
					<div className="row position-relative z-3">
						<div className="col-1"></div>
						<div className="col-lg-11">
							<a
								href="/get-started"
								className="btn__primary--fill"
							>
								Get Started
							</a>
							<a
								href="/about"
								className="btn__white--outline mx-5"
							>
								Learn More
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
