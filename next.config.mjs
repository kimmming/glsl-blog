const nextConfig = {
  i18n: {
    locales: ['en', 'ko'], 
    defaultLocale: 'ko',  
  },
  reactStrictMode: true,  
  webpack: (config) => {
    // GLSL 파일 로더 추가
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      use: 'raw-loader',                
    })

    return config
  },
}

export default nextConfig