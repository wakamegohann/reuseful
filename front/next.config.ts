import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['local.masamasa.site'],
  websocketPort: 3000
};

export default nextConfig;
