/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET
  },
  experimental: {
    serverActions: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '**'
      }
    ]
  }
}

// 933474687639-agmkjjncj5nmirrk5qoqgbflpik69941.apps.googleusercontent.com
// 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