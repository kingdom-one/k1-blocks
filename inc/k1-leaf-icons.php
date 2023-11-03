<?php
/**
 * K1 Leaf Icons
 *
 * @package KingdomOne
 */

/**
 * Returns an SVG inside a div
 *
 * @param int    $leaf the leaf variant to return
 * @param string $color the leaf color
 * @param string $direction the direction of the leaves
 * @return string the markup
 */
function k1_get_the_leaf( int $leaf, string $color = '', string $direction = 'left' ): string {
	$style  = "style='color:{$color};";
	$scale  = ( 'left' === $direction ) ? -1 : 1;
	$style .= 4 === $leaf ? "'" : "transform:scaleX({$scale});'";
	$markup = "<div class='k1-leaves' id='leaves-{$leaf}' {$style}>";
	switch ( $leaf ) {
		case 2:
			$markup .= '<svg viewBox="0 0 190.716 217.758"><defs><clipPath id="leaves-2a"><rect width="147.637" height="185.88" fill="none" stroke="currentColor" stroke-width="1" /></clipPath></defs><g transform="matrix(-0.966, 0.259, -0.259, -0.966, 190.716, 179.547)"><g clip-path="url(#leaves-2a)"><path d="M328.262,338.491c11.175,24.413-4.392,54.661-4.392,54.661s-35.992-6.646-47.167-31.059c-8.1-17.7-1.54-39.174,2.681-49.644h0l2.865-6.36S317.087,314.078,328.262,338.491Z" transform="translate(-263.177 -213.148)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" /><path d="M50.641,348.131c-2.718-4.734-6.76-17.435-6.76-17.435s23.866-9.978,38.561-2.763c8.827,4.335,14.331,12.855,17.546,19.866a59.368,59.368,0,0,1,3.875,11.119,62.159,62.159,0,0,1-9.429,3.945c-7.927,2.619-19.478,4.789-29.161.034C58.681,359.661,53.951,353.9,50.641,348.131Z" transform="translate(-188.775 -172.509) rotate(-34)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6"/></g></g></svg>';
			break;
		case 3:
			$markup .= '<svg viewBox="0 0 190.716 217.758"><defs><clipPath id="leaves-3a"><rect width="147.637" height="185.88" fill="none" stroke="currentColor" stroke-width="1" /></clipPath></defs><g transform="translate(0 0)"><g transform="matrix(-0.966, 0.259, -0.259, -0.966, 190.716, 179.547)"><g clip-path="url(#leaves-3a)"><path d="M328.262,338.491c11.175,24.413-4.392,54.661-4.392,54.661s-35.992-6.646-47.167-31.059c-8.1-17.7-1.54-39.174,2.681-49.644h0l2.865-6.36S317.087,314.078,328.262,338.491Z" transform="translate(-263.177 -213.148)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" /><path d="M50.641,348.131c-2.718-4.734-6.76-17.435-6.76-17.435s23.866-9.978,38.561-2.763c8.827,4.335,14.331,12.855,17.546,19.866a59.368,59.368,0,0,1,3.875,11.119,62.159,62.159,0,0,1-9.429,3.945c-7.927,2.619-19.478,4.789-29.161.034C58.681,359.661,53.951,353.9,50.641,348.131Z" transform="translate(29.745 -221.309)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" /><path d="M32.809,38.588C14.539,38.822,0,20.806,0,20.806S14.045.236,32.315,0c13.248-.17,24.8,9.827,30.159,15.336l3.17,3.534h0S51.079,38.354,32.809,38.588Z" transform="translate(100.905 80.475) rotate(165)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" /></g></g></g></svg>';
			break;
		case 4:
			$markup .= '<svg viewBox="0 0 147.637 185.88"><defs><clipPath id="leaves-4a"><rect width="147.637" height="185.88" fill="none" stroke="currentColor" stroke-width="1" /></clipPath></defs><g clip-path="url(#leaves-4a)"><path d="M328.262,338.491c11.175,24.413-4.392,54.661-4.392,54.661s-35.992-6.646-47.167-31.059c-8.1-17.7-1.54-39.174,2.681-49.644h0l2.865-6.36S317.087,314.078,328.262,338.491Z" transform="translate(-263.177 -213.148)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" /><path d="M50.641,348.131c-2.718-4.734-6.76-17.435-6.76-17.435s23.866-9.978,38.561-2.763c8.827,4.335,14.331,12.855,17.546,19.866a59.368,59.368,0,0,1,3.875,11.119,62.159,62.159,0,0,1-9.429,3.945c-7.927,2.619-19.478,4.789-29.161.034C58.681,359.661,53.951,353.9,50.641,348.131Z" transform="translate(29.745 -221.309)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" /><path d="M32.793,41.793C19.6,39.624,9.875,27.649,5.527,21.229L3,17.157H3S20.913.365,39.113,3.357,68.582,26.821,68.582,26.821,50.993,44.785,32.793,41.793Z" transform="translate(74.56 3.959)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" /><path d="M48.211,56.7C21.364,57.047,0,30.573,0,30.573S20.638.346,47.485,0C66.952-.246,83.934,14.443,91.8,22.538l4.657,5.193h0S75.058,56.359,48.211,56.7Z" transform="translate(99.954 108.38) rotate(-163)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="6" /></g></svg>';
			break;
	}
	$markup .= '</div>';
	return $markup;
}

/**
 * Echoes the value of `k1_get_the_leaft($leaf)`
 *
 * @param int    $leaf the leaf variant to return
 * @param string $color the leaf color
 * @param string $direction the direction of the leaves
 */
function k1_the_leaf( int $leaf, string $color = 'white', string $direction = 'right' ) {
	echo k1_get_the_leaf( $leaf, $color, $direction );
}