/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Use environment variable to control basePath
  // For custom domain: leave empty or set NEXT_PUBLIC_BASE_PATH=''
  // For GitHub Pages subdomain: set NEXT_PUBLIC_BASE_PATH='/adgovflow'
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

module.exports = nextConfig

