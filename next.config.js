/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        domains: ['localhost'],
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '/images/**',
            },
        ],
    },
    webpack: (cfg) => {
        cfg.module.rules.push({
            test: /\.md$/,
            loader: 'frontmatter-markdown-loader',
            options: {mode: ['react-component']},
        });
        return cfg;
    },
};

module.exports = nextConfig;
