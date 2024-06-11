import * as icon from './icon-set';

type Icons =
	| 'academy'
	| 'finance'
	| 'hr'
	| 'justice'
	| 'marcom'
	| 'spark'
	| 'staffing'
	| 'strategy'
	| 'webDev';

export function getIcon( iconName: Icons ) {
	const iconMap = {
		academy: icon.academy,
		finance: icon.finance,
		hr: icon.hr,
		justice: icon.justice,
		marcom: icon.marcom,
		spark: icon.sparkMono,
		staffing: icon.staffing,
		strategy: icon.strategy,
		webDev: icon.webDev,
	};
	return iconMap[ iconName ];
}
