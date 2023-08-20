/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    basePath: process.env.GITHUB_PAGES ? '/portfolio' : '',
    assetPrefix: process.env.GITHUB_PAGES ? '/portfolio' : '',
}