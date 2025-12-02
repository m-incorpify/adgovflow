/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/adgovflow' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/adgovflow' : '',
}

module.exports = nextConfig

