module.exports = {
  plugins: [
    "tailwindcss",
    ...(process.env.NODE_ENV === 'production'
      ? [
          [
            "@fullhuman/postcss-purgecss", {
              content: ["./src/**/*.tsx"],
              defaultExtractor: content => content.match(/[\w-/.:]+(?<!:)/g) || []
            }
          ],
          "autoprefixer",
          "cssnano"
        ]
      : []),
    'postcss-preset-env'
  ]
}