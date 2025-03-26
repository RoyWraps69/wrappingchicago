
/**
 * This file contains configuration for minifying JavaScript and CSS files.
 * To use this configuration, you'll need to install the necessary tools:
 * 
 * For JavaScript minification:
 * npm install terser --save-dev
 * 
 * For CSS minification:
 * npm install cssnano --save-dev
 * 
 * Then add these scripts to your package.json:
 * "scripts": {
 *   "minify-js": "terser src/**/*.js --compress --mangle --output dist",
 *   "minify-css": "postcss src/**/*.css --use cssnano --dir dist"
 * }
 * 
 * This configuration assumes you're using a build tool like Vite, which
 * should already handle minification in production builds.
 */

const terserOptions = {
  compress: {
    drop_console: true,
    drop_debugger: true
  },
  mangle: true,
  output: {
    comments: false
  }
};

const cssnanoOptions = {
  preset: ['default', {
    discardComments: {
      removeAll: true,
    },
    normalizeWhitespace: true,
    minifyFontValues: true,
    minifySelectors: true
  }]
};

module.exports = {
  terserOptions,
  cssnanoOptions
};
