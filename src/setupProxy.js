const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/apb', {
            target: 'http://api.baxiaobu.com',
            changeOrigin: true,
            pathRewrite: {
                '^/apb': ''
            }
        }),
    )
    app.use(
        createProxyMiddleware('/apa', {
            target: 'https://blog.zdldove.top/',
            changeOrigin: true,
            pathRewrite: {
                '^/apa': ''
            }
        }),
    )
}