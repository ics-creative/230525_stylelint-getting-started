module.exports = {
  extends: [
    "stylelint-config-standard-scss"
  ],
  overrides: [
    {
      files: ["*.jsx", "**/*.jsx"],
      customSyntax: "postcss-styled-syntax",
    },
  ]
}
