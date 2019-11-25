const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');

module.exports = {
    lintOnSave: false,

    devServer: {
        proxy: {
            '/api': {
                target: 'http://test.mobile.icctoro.com:5003',
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
                    // red: '#03a9f4',
                    // blue: '#3eaf7c',
                    // orange: '#f08d49',
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
}