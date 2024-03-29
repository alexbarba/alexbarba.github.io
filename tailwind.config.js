/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  mode: 'jit',
  darkMode: 'media',
  theme: {
    fontFamily: {
      sans: ['-apple-system', 'BlinkMacSystemFont'],
      serif: ['Georgia', 'Cambria'],
      mono: ['SFMono-Regular', 'Menlo'],
    },
    plugins: [],
    purge: {
      // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
      enabled: process.env.NODE_ENV === 'production',
      content: [
        'components/**/*.vue',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'plugins/**/*.js',
        'nuxt.config.js',
      ],
    },
  },
};
