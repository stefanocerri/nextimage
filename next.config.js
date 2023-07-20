/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'evoluzione.fra1.cdn.digitaloceanspaces.com',
                port: '',
                pathname: '/media/**',
            },
        ],
    },
}

module.exports = nextConfig
