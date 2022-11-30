/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '137.184.74.103',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
