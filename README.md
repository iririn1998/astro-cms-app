# astro-cms-app

[Astro](https://astro.build) で構築した Markdown ベースのブログ / CMS。
記事はコンテンツコレクションとして管理し、タグ・数式（KaTeX）・シンタックスハイライト・目次に対応しています。

## ✨ 機能

- **Markdown コンテンツコレクション** — `src/content/blog/` に `.md` を置くだけで記事になる（Zod スキーマで frontmatter を検証）
- **タグ** — タグ一覧ページ・タグ別記事ページを自動生成
- **数式レンダリング** — `remark-math` + `rehype-katex` による LaTeX 数式表示
- **シンタックスハイライト** — Shiki（`one-dark-pro` テーマ）
- **目次（TOC）** — 見出しから自動生成
- **下書き対応** — frontmatter の `draft: true` で公開対象から除外
- **カスタムエラーページ** — 404 / 500
- **Tailwind CSS v4** — `@tailwindcss/typography` による本文スタイリング

## 📝 記事の書き方

`src/content/blog/` に Markdown ファイルを追加し、以下の frontmatter を記述します。

```yaml
---
title: "記事タイトル"          # 必須
description: "記事の概要"       # 任意
pubDate: 2026-05-31           # 必須（公開日）
updatedDate: 2026-06-01       # 任意（更新日）
tags: ["数学", "幾何学"]       # 任意（既定値: []）
draft: false                  # 任意（既定値: false）
---
```

スキーマ定義は `src/content.config.ts` を参照してください。

## 🚀 プロジェクト構成

```text
/
├── public/                  # 静的アセット（favicon など）
├── src/
│   ├── components/          # FormattedDate, TableOfContents, PostCard
│   ├── content/blog/        # 記事（Markdown）
│   ├── layouts/             # Layout, BlogPost
│   ├── pages/
│   │   ├── index.astro      # トップ（記事一覧）
│   │   ├── blog/[...slug].astro
│   │   ├── tags/index.astro
│   │   ├── tags/[tag].astro
│   │   ├── 404.astro
│   │   └── 500.astro
│   ├── styles/global.css
│   └── content.config.ts    # コンテンツコレクションのスキーマ
├── astro.config.mjs
└── package.json
```

## 🧞 コマンド

パッケージマネージャは [pnpm](https://pnpm.io) を使用します。

| コマンド            | 内容                                   |
| :------------------ | :------------------------------------- |
| `pnpm install`      | 依存関係をインストール                 |
| `pnpm dev`          | 開発サーバーを `localhost:4321` で起動 |
| `pnpm build`        | 本番ビルドを `./dist/` に出力          |
| `pnpm preview`      | ビルド結果をローカルでプレビュー       |
| `pnpm lint`         | oxlint でチェック                      |
| `pnpm lint:fix`     | oxlint で自動修正                      |
| `pnpm format`       | oxfmt で整形                           |
| `pnpm format:check` | oxfmt で整形チェック                   |

## 🛠 技術スタック

- [Astro](https://astro.build) 6
- [Tailwind CSS](https://tailwindcss.com) 4 + `@tailwindcss/typography`
- [KaTeX](https://katex.org) / `remark-math` / `rehype-katex`
- [Shiki](https://shiki.style)（Astro 組み込み）
- [oxlint](https://oxc.rs) / [oxfmt](https://oxc.rs)（Lint / Format）
- Node.js >= 22.18.0

## 📚 参考

- [Astro ドキュメント](https://docs.astro.build)
- [コンテンツコレクションガイド](https://docs.astro.build/en/guides/content-collections/)
