import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // if you're using Static Export
  reactStrictMode: true,
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
