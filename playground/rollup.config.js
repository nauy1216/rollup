export default () => {
	const commonJSBuild = {
		external: ['fs', 'fsevents', 'module', 'path', 'os', 'stream', 'url', 'util'],
		input: {
			'bundle.js': 'src/index.js'
		},
		output: {
			dir: 'dist',
			entryFileNames: '[name]',
			exports: 'auto',
			format: 'cjs',
			generatedCode: 'es2015',
			sourcemap: true
		},
		plugins: [],
		strictDeprecations: true
	};

	return [commonJSBuild];
};
