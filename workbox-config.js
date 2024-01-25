module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,html,json,js}'
	],
	swDest: 'js/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};