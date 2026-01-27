import { createMDX } from "fumadocs-mdx/next";

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

// [!code ++:4]
const withMDX = createMDX({
  // customise the config file path
  // configPath: "source.config.ts"
});

// [!code highlight]
export default withMDX(config);
