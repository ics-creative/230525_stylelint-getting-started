module.exports = {
  extends: [
    "stylelint-config-standard-scss"
  ],
  overrides: [
    {
      files: ["*.tsx", "**/*.tsx"],
      customSyntax: "postcss-styled-syntax",
    },
  ]
}
