import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Force https
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "(?!localhost)(.*)",
          },
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://www.woverasolutions.com/:path*",
        permanent: true,
      },
      // Force www
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "woverasolutions.com",
          },
        ],
        destination: "https://www.woverasolutions.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
