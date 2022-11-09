/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cannabispharmuk.com", "highlifefarms.com"],
  },
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

const withImages = require("next-images");
module.exports = withImages();

module.exports = nextConfig;
