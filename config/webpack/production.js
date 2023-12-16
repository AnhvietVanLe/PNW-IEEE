const environment = require('./environment');

// Log the Webpack configuration before exporting
console.log('Webpack Configuration:', environment.toWebpackConfig());

module.exports = environment.toWebpackConfig();