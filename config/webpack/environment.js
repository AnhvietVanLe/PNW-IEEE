const { environment } = require('@rails/webpacker');
const webpack = require('webpack'); // Import webpack


// Rest of your configuration
environment.plugins.append('Provide', new webpack.ProvidePlugin({ $: 'jquery' }));

module.exports = environment;
