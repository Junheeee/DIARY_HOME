/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  //env 내용 추가
  env: {
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
