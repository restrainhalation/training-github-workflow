// 環境差を埋めるためのパスのプレフィックス
const prefix = process.env.NODE_ENV === 'production' ? '/training-github-workflow' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: prefix,
  basePath: prefix,
};

export default nextConfig;
