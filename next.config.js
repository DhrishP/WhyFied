/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  reloadOnOnline: true,
  source: "/app",
  register: true,
  sw: "service-worker.js",
  disable: process.env.NODE_ENV === "development",
  cacheStartUrl: true,
});

const nextConfig = {
  images:{
    domains: ['ibb.co','i.ibb.co']
  }
};

module.exports = withPWA(nextConfig);
