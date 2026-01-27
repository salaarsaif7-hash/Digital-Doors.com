/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jollymod.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
