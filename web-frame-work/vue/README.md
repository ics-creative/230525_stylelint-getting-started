ICS MEDIA記事「いまから始めるStylelint入門」のサンプルです。
このディレクトリでは、Vite + Vue.jsプロジェクトにStylelintを追加しています。

`npm install`後、`npm run fix`を実行することで次のエラーが表示されます。

```
src/App.vue
 15:1  ✖  Unexpected duplicate selector ".app", first used at line 11  no-duplicate-selectors

src/index.css
 5:1  ✖  Unexpected duplicate selector ".index", first used at line 1  no-duplicate-selectors

src/index2.scss
 6:3  ✖  Unexpected duplicate selector ".index2 a", first used at line 2  no-duplicate-selectors

3 problems (3 errors, 0 warnings)
```
