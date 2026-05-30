import { defineConfig } from "oxfmt";

export default defineConfig({
  // 引数が 1 つの arrow function でも括弧を付け、差分と読み方を安定させる。
  arrowParens: "always",

  // 複数行 JSX/HTML の閉じ山括弧を次行に置き、属性差分を見やすくする。
  bracketSameLine: false,

  // オブジェクトリテラルの括弧内に空白を入れ、TypeScript/JS の一般的な表記に揃える。
  bracketSpacing: true,

  // Astro/JSX 内の CSS や Markdown など、埋め込み言語も可能な範囲で整形する。
  embeddedLanguageFormatting: "auto",

  // OS 差分を避けるため改行コードを LF に固定する。
  endOfLine: "lf",

  // HTML/Astro の空白は CSS の表示仕様に従って扱い、表示崩れを避ける。
  htmlWhitespaceSensitivity: "css",

  // ビルド生成物と依存パッケージを整形対象から外す。
  ignorePatterns: ["dist", ".astro", "node_modules"],

  // POSIX ツールや Git diff で扱いやすいよう、末尾改行を必ず入れる。
  insertFinalNewline: true,

  // JSDoc を正規化し、API コメントの改行やタグ表記を安定させる。
  jsdoc: true,

  // JSX 属性は HTML と同じく double quote に揃える。
  jsxSingleQuote: false,

  // 既に複数行で書かれたオブジェクトは複数行のまま保ち、意図した読みやすさを残す。
  objectWrap: "preserve",

  // 長すぎる行を抑えつつ、Astro/React の JSX でも過度に折り返さない幅にする。
  printWidth: 100,

  // Markdown の手動改行を保ち、README やドキュメントの意味ある改行を壊さない。
  proseWrap: "preserve",

  // 必要な場合だけ object key を quote し、不要なノイズを減らす。
  quoteProps: "as-needed",

  // セミコロンを付け、ASI に依存しない安全な JS/TS にする。
  semi: true,

  // JSX/HTML 属性を常に 1 行 1 属性にせず、短い要素の密度を保つ。
  singleAttributePerLine: false,

  // 既存の JS/TS コードと合わせ、文字列は double quote に揃える。
  singleQuote: false,

  // import を種類ごとに安定ソートし、循環や依存方向のレビューをしやすくする。
  sortImports: {
    groups: [
      "builtin",
      "external",
      ["internal", "subpath"],
      ["parent", "sibling", "index"],
      "side_effect_style",
      "side_effect",
      "style",
      "unknown",
    ],
    internalPattern: ["~/", "@/", "#"],
    newlinesBetween: true,
    order: "asc",
    sortSideEffects: false,
  },

  // package.json のキー順を安定化し、依存追加時の差分を読みやすくする。
  sortPackageJson: {
    sortScripts: false,
  },

  // Tailwind を導入した場合に class 順序も自動で安定化する。
  sortTailwindcss: true,

  // インデントは 2 spaces に統一する。
  tabWidth: 2,

  // 複数行リテラルに trailing comma を付け、追加差分を小さくする。
  trailingComma: "all",

  // タブではなく spaces を使い、エディタ差分を減らす。
  useTabs: false,
});
