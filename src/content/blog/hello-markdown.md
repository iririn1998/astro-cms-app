---
title: "Markdown ブログを始める"
description: "Astro の Content Collections で Markdown 記事を管理する最初の例。"
pubDate: 2026-05-20
tags:
  - astro
  - markdown
  - tailwind
---

## Markdown をデータとして扱う

Astro の Content Collections を使うと、frontmatter を型付きデータとして扱えます。
記事一覧ではタイトル、公開日、タグを読み取り、詳細ページでは Markdown 本文をレンダリングします。

### frontmatter の例

```yaml
title: "Markdown ブログを始める"
pubDate: 2026-05-20
tags:
  - astro
  - markdown
```

## 一覧に必要な情報

ブログ一覧では本文全体ではなく、カードに必要な最小限の情報を表示します。
説明文がある記事は概要として表示し、タグはタグ別ページへのリンクとして使います。

```ts
const posts = allPosts
  .filter((post) => !post.data.draft)
  .toSorted((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
```

## 次に追加したいもの

今回の実装では OGP や RSS は扱いません。
記事が増えてから、必要に応じて RSS とサイトマップを追加できます。
