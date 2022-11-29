const mix = require('laravel-mix');

mix.setPublicPath('public');
mix.options({
  postCss: [
      require('autoprefixer'),
  ],
});
  
mix.override((webpackConfig) => {
  const imgRule = webpackConfig.module.rules.find(
    (r) => r.test.source === /(\.(png|jpe?g|gif|webp|avif)$|^((?!font).)*\.svg$)/.source,
  );

  imgRule.test = /(\.(png|jpe?g|gif|webp|avif)$)/
  imgRule.use[0].options.name = (path) => {
    if (!/node_modules|bower_components/.test(path)) {
      return 'images/[name].[hash:8].[ext]';
    }

    return (
      'images/vendor/' +
      path
        .replace(/\\/g, '/')
        .replace(/((.*(node_modules|bower_components))|images|image|img|assets)\//g, '') +
      '?[hash]'
    );
  };
});

mix.webpackConfig({
  output: {
      chunkFilename: 'js/chunks/[name].js',
      filename: "[name].js"
  },
  module: {
      rules: [
          {
          test: /\.svg$/,
          use: [
              {
                  loader: '@svgr/webpack',
                  
              },
              
          ],
          },
      ]
  },
  resolve: {
      modules: [
        './resources/app/src',
        'node_modules',
      ],
  }
}).react();

mix.ts('resources/app/src/index.tsx', 'public/js/app.js').version();
mix.copy('resources/app/public', 'public');
