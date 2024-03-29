const path = require('path')
require('dotenv').config()

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'medium.pythonanywhere.com',
                port: '*',
                pathname: '/media/profile/**',
            },
        ],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'src')],
        prependData: `@import "sass/_variables.scss";`,
    },
    env: {
        BASE_URL: process.env.BASE_URL,
        IMG_URL: process.env.IMG_URL,
    },
}
module.exports = nextConfig
