/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["jollymod.com"], // Add all external image hosts here
  },
};

module.exports = nextConfig;
