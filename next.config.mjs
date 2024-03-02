/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: { emotion: true },
    reactStrictMode: true,
    webpack(config) {

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
};

export default nextConfig;
