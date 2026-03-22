import { createMDX } from "fumadocs-mdx/next";

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/docs.mdx",
        destination: "/llms.mdx/docs",
      },
      {
        source: "/docs/:path*.mdx",
        destination: "/llms.mdx/docs/:path*",
      },
    ];
  },
};

// [!code ++:4]
const withMDX = createMDX({
  // customise the config file path
  // configPath: "source.config.ts"
});

// [!code highlight]
export default withMDX(config);
