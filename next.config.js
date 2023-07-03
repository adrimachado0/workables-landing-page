/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
          test: /\.(mp3|wav)$/, // Agrega aquí las extensiones de archivo de audio que deseas manejar
          use: {
            loader: 'file-loader',
          },
        });
        
        return config;
    },
}

module.exports = nextConfig
