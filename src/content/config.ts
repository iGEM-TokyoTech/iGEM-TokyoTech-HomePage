// 1. ユーティリティを`astro:content`からインポート
import { z, defineCollection } from "astro:content";

// 2. 各コレクションに`type`と`schema`を定義
const postCollection = defineCollection({
  type: "content", // v2.5.0以降
  schema: z.object({
    title: z.string(),
    author: z.string(),
    date: z.date(),
    ignore: z.boolean().optional(), // 記事を無視したい場合はこれをつける
  }),
});

// 3. コレクションを登録するために、単一の`collections`オブジェクトをエクスポート
export const collections = {
  blog: postCollection,
};
