/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_ACTIONS ? '/portfolio' : '',
  assetPrefix: process.env.GITHUB_ACTIONS ? '/portfolio/' : '',
};

module.exports = nextConfig;
