module.exports = {
    lintOnSave: false,

    devServer: {
        proxy: {
            '/api': {
                target: 'http://dev.mobile.icctoro.com:5003',
                ws: true,
                changeOrigin: true
            }
        }
    },

    outputDir: 'icc-mobile'
}