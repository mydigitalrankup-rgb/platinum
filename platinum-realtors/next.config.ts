 import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const appRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  
  turbopack: {
    root: appRoot,
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;