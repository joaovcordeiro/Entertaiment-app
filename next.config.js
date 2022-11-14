/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  webpack: (config, options) => {
    // Configura o @svgr como um loader para imagens SVG usando o hook para o Webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    // O objeto config modificado precisa ser retornado
    return config;
  },
};

module.exports = nextConfig;
