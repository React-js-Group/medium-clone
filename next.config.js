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
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.royaltiti.com',
      },
    ],
  },
}
const removeImports = require('next-remove-imports')()
module.exports = removeImports({})

module.exports = nextConfig
