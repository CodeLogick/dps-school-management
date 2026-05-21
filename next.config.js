/** @type {import('next').NextConfig} */
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