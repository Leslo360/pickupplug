/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true },
};

const withPWA = require("next-pwa");

module.exports = withPWA({
  pageExtensions: ["page.js", "page.jsx"],
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});

module.exports = nextConfig;
