/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: { emotion: true },
    reactStrictMode: true,
    webpack(config) {
        config.externals.push({
            'utf-8-validate': 'commonjs utf-8-validate',
            'bufferutil': 'commonjs bufferutil',
        })
            ,
            config.module.rules.push(
                {
                    test: /\.svg$/i,
                    use: [
                        {
                            loader: "babel-loader",
                        },
                        {
                            loader: "react-svg-loader",
                            options: {
                                jsx: false, // true outputs JSX tags
                                svgo: {
                                    plugins: [
                                        { removeViewBox: false },
                                    ],
                                },
                            }
                        },

                    ]
                }
            );
        return config;
    },
    env: {
        PUBLIC_NEXT_API: String(process.env.PUBLIC_NEXT_API) || 'http://localhost:5001',
        PINATA_JWT: String(process.env.PINATA_JWT) || '',
        NEXT_PUBLIC_GATEWAY_URL: String(process.env.NEXT_PUBLIC_GATEWAY_URL) || '',
        NEXT_PUBLIC_GATEWAY_TOKEN: String(process.env.NEXT_PUBLIC_GATEWAY_TOKEN) || '',
    }
};

export default nextConfig;
