const defaultConfig = require( '@wordpress/scripts/config/webpack.config.js' );

module.exports = {
	...defaultConfig,
	...{
		entry: {
			...defaultConfig.entry(),
			global: `./src/index.js`,
		},
	},
};
