ICS MEDIA記事「CSSのコード品質向上のためのStylelint入門」のサンプルです。
このディレクトリでは、Vite + Vue.jsプロジェクトにStylelintを追加しています。

`npm install`後、`npm run fix`を実行することで次のエラーが表示されます。

```
src/App.vue
 15:1  ✖  Duplicate selector ".app", first used at line 11  no-duplicate-selectors

1 problem (1 error, 0 warnings)
```
