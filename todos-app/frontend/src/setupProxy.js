const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://todo-backend-app:8000",
            changeOrigin: true,
            logLevel: "debug",
        })
    );
};