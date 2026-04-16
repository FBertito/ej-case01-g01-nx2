/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Domínios externos permitidos (adicione se usar imagens de CDN)
    remotePatterns: [],
    // Formatos modernos habilitados
    formats: ['image/webp', 'image/avif'],
  },
}

module.exports = nextConfig
