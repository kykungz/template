const withPlugins = require('next-compose-plugins')
const withLess = require('@zeit/next-less')
const withCSS = require('@zeit/next-css')

const nextConfig = {
  webpack: config => {
    return config
  },
}

module.exports = withPlugins(
  [[withCSS], [withLess, { lessLoaderOptions: { javascriptEnabled: true } }]],
  nextConfig,
)
