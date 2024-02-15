/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      // Add a rule for MP4 files
      config.module.rules.push({
        test: /\.(mp4|webm)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: '/_next',
              name: 'static/media/[name].[hash].[ext]',
            },
          },
        ],
      });
  
      // Important: return the new config
      return config;
    },
  };
  
  module.exports = nextConfig;
  