const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("img");
	eleventyConfig.addPassthroughCopy("js");
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	// Watch CSS files for changes
	eleventyConfig.setBrowserSyncConfig({
		files: './dist/css/**/*.css'
	});
	return {
		dir: {
			output: 'dist'
		}
	};
};
