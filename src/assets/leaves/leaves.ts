import { leaves2, leaves3, leaves4 } from './leaf-svgs';

export function getLeaves( leaves: '2' | '3' | '4' ) {
	const leafMap = {
		'2': leaves2,
		'3': leaves3,
		'4': leaves4,
	};
	return leafMap[ leaves ];
}
