const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://products:8080",
            changeOrigin: true,
            logLevel: "debug",
        })
    );
};