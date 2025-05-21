/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: "standalone",
  generateBuildId: async () => {
    return new Date().getTime().toString();
  },
  webpack: (config, { isServer, webpack }) => {
    config.resolve.fallback = { fs: false };
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    if (isServer) {
      const version = new Date().getTime().toString();
      config.plugins.push(
        new webpack.DefinePlugin({
          "process.env.NEXT_VERSION": version,
        })
      );
    }

    return config;
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:service",
  //       destination: "/service/:service",
  //       has: [
  //         {
  //           type: "query",
  //           key: "service",
  //         },
  //       ],
  //     },
  //   ];
  // },
};
