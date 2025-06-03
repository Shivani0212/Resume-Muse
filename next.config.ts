
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'standalone', // Add this for a self-contained build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: [], // Add specific origins if deployed
    },
  },
};

export default nextConfig;
