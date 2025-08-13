/** @type {import("next").NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    externalDir: true, // allow imports from ../../../packages/*
  },
};

export default nextConfig;
