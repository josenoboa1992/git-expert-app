const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',  // ajusta la ruta según tu necesidad
        createProxyMiddleware({
            target: 'https://api.giphy.com',
            changeOrigin: true,
        })
    );
};