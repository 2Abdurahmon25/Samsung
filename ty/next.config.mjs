import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
  turbopack: {
    root: __dirname,
    rules: {
      // Tells Turbopack how to handle imported MP4 video files
      '*.mp4': {
        type: 'asset',
      },
    },
  },
};

export default nextConfig;