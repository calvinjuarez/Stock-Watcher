module.exports = {
	root: true,
	env: {
		node: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/essential',
	],
	rules: {
		'indent'      : ['error', 'tab'],
		'no-tabs'     : 'off',
		'no-console'  : process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger' : process.env.NODE_ENV === 'production' ? 'error' : 'off',
	},
}
