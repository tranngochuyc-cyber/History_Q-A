import type { NextConfig } from "next";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (
  process.env.GITHUB_ACTIONS === "true" && repository && !repository.endsWith(".github.io")
    ? "/" + repository : ""
);
const config: NextConfig = {
  output: "export",
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
  trailingSlash: true,
  allowedDevOrigins: ["127.0.0.1"],
};
export default config;
