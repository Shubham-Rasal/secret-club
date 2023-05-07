/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    // serverComponentsExternalPackages: ["bcrypt"],
    // outputFileTracingRoot: path.join(__dirname, '../../'),
  },
  // output: 'standalone'
};

module.exports = nextConfig;
