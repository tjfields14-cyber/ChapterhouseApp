/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    typedRoutes: true,
    externalDir: true,
  },
};

export default nextConfig;
