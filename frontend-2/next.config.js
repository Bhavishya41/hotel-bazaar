/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/user/:path*',
        destination: 'http://localhost:8000/user/:path*', // Proxy to backend
      },
      {
        source: '/product/:path*',
        destination: 'http://localhost:8000/product/:path*',
      },
      // Add more rewrites if you have other backend routes
    ];
  },
};

module.exports = nextConfig;
