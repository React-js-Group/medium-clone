const path = require('path')
require('dotenv').config

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    sassOptions: {
        includePaths: [path.join(__dirname, 'src')],
        prependData: `@import "sass/_variables.scss";`,
    },
    env: {
        BASE_URL: process.env.BASE_URL,
        IMG_URL: process.env.IMG_URL,
    },
    experimental: {
        outputStandalone: true,
        outputFileTracingRoot: path.join(__dirname, '../../'),
    },
}
const removeImports = require('next-remove-imports')()
module.exports = removeImports({})

module.exports = nextConfig
