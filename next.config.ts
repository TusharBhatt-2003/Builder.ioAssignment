import BuilderDevTools from "@builder.io/dev-tools/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = BuilderDevTools()({
  reactStrictMode: true,
  images: {
    domains: ["cdn.builder.io", "s3-alpha-sig.figma.com"], // Add required domains
  },
});

export default nextConfig;
