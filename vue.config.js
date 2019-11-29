const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

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

    outputDir: 'icc-mobile',

    css: {
        loaderOptions: {
            less: {
                modifyVars: {
                    dark: '#999999'
                }
            },
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 20,
                        propList: ['*']
                    })
                ]
            }
        }
    },

    assetsDir: 'static'
}