---
title: "Content Collections で記事を整理する"
description: "タグ、公開日、下書きフラグを frontmatter で管理する実装メモ。"
pubDate: 2026-05-24
updatedDate: 2026-05-25
tags:
  - astro
  - content-collections
  - markdown
---

## コレクションを定義する

`src/content.config.ts` にコレクションを定義すると、記事の frontmatter をビルド時に検証できます。
不正な日付や不足したタイトルは、開発中に早く見つけられます。

```ts
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});
```

## タグページを生成する

タグページは全記事のタグを集約して、`getStaticPaths()` で静的に生成します。
タグ名は URL パラメータになるため、リンクを作るときはエンコードしておくと安全です。

### 集約の流れ

1. 公開済み記事だけを取得する
2. 各記事のタグを `flatMap` で取り出す
3. `Set` で重複を除く
4. タグごとに記事一覧を描画する

```ts
const tags = [...new Set(posts.flatMap((post) => post.data.tags))].toSorted();
```

## 下書きの扱い

`draft: true` の記事は一覧、タグ、詳細ページから除外します。
公開前の記事を同じディレクトリに置けるので、執筆中の管理が簡単になります。
