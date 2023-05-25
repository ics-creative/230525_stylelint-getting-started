module.exports = {
  extends: [
    "stylelint-config-standard-scss",
    "stylelint-config-standard-vue"
  ],
  rules: {
    // vueファイルでSassのat-ruleを利用するため、無効にする
    "at-rule-no-unknown": null,
  },
}
