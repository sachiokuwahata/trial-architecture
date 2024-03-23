/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

const dev = process.env.NODE_ENV !== 'production';
export const server = dev ? `${process.env.NEXT_PUBLIC_API_BASE_URL}` : 'https://production-domain.com/api';
