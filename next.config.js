/** @type {import('next').NextConfig} */

// 1. Load dotenv right at the top, pointing to your custom file path
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env.local') });

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.vercel-blob.com',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  env: {
    NEXT_PUBLIC_SCHOOL_NAME: 'DPS International',
    NEXT_PUBLIC_SCHOOL_ADDRESS: 'Nehru Nagar, Delhi',
    NEXT_PUBLIC_SCHOOL_PHONE: '988766554',
    NEXT_PUBLIC_SCHOOL_EMAIL: 'Vijay.Chauhan@dpsinternational.com',
  },
}

module.exports = nextConfig