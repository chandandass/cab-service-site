import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["192.168.1.4"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
