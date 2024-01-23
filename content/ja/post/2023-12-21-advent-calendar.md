---
title: iGEMのwikiのGitLabを分析してみた
date: 2023-12-21
author: iChemy
---
この記事は、[iGEM･Synthetic biology(合成生物学)･Japan Advent Calendar 2023](https://adventar.org/calendars/8876)の21日目の記事です。

こんにちは．iGEM TokyoTech Dry所属のiChemyです．
静電気に怯える日々が始まり出していますが，みなさんはどうお過ごしですか?
本日の記事は「**iGEMのwikiのGitLabを分析してみた**」
ということでニッチな内容となっておりますが，
気負わず軽い気持ちで読んでいただいて構いません．
<!--more-->

# 概要
iGEMにおけるwikiの[GitLab](https://gitlab.igem.org/2023)のログを一部(コミット数，コミット人数，言語)見ていき，
どのような傾向があるのかをお伝えしたいと思います．これは2回目のフリーズ後の**2023/12/20に調査したもの**であり，競技終了時の状態ではないことをご理解いただければと思います．

# コミット人数
まずは各チームどれくらいの人数[^1]がリポジトリ[^2]にコミットしたのか見ていきましょう．
コミット人数とチーム数の対応は以下の通りです．

| 人数 | チーム数(全体)　|チーム数(Gold)|チーム数(Silver)|チーム数(Bronze)|
|:------:|:----------:|:-----------:|:----------:|:----------:|
| 1    | 48           |16|21|4|
| 2    | 88           |38|36|3|
| 3    | 62           |27|25|9|
| 4    | 45           |22|15|3|
| 5    | 35           |10|15|6|
| 6    | 34           |18|13|1|
| 7    | 31           |18|9|1|
| 8    | 7            |6 |2|0|
| 9    | 12           |9 |2|0|
| 10以上| 34           |27|6|1|
---
| 代表値| チーム数(全体)　|チーム数(Gold)|チーム数(Silver)|チーム数(Bronze)|
|:------:|:----------:|:-----------:|:----------:|:----------:|
|最大値|19|19|13|11|
|中央値|3.0|4.0|3.0|3.0|
|平均値|4.468|5.450|3.732|3.679|
|標準偏差|3.459|4.096|2.495|2.127|

Goldメダルのチームは他のチームよりコミット人数が多いようにも見えますが
ばらつきも大きいためなんとも言えません．
実装側の人として一つ気になるのは10人近くの人がコミットしているチームが
30チームほどあることです．10人に仕事を割り振るのはとても大変ですが，
彼らはどのように実装を進めていたのでしょうか．

これらのチームのコミットログを簡単に見てみると
- イタリックや大文字，スペース，改行などの簡単な修正を多くやっている人がいる
- 他メンバーより明らかにコミットが多い人が1,2人いる
- コミットの単位が細かい

というのが見受けられました．実装していた身としてはイタリックや大文字などに
気を使う暇はありませんでしたが，
これらのチームは完成品を見て逐一指摘する係を
設けていたのかもしれません．
また，意図的かどうかはわかりませんが大勢で編集するとなると
長い間コミットしなかった場合コンフリクトが起きる可能性もあるため
コミットの単位が細かいということは理にかなっているように思えます．

# 総コミット数

今度はコミットの総数を見てみましょう．
2回目のフリーズ後のため少し多めですが結果は以下の通りです．

| 代表値 | 全チーム | Gold | Silver | Bronze |
|:-------:|:-----:|:----:|:---:|:-----:|
| 平均    | 465.642 | 587.901 | 364.380 | 432.250  |
| 中央値   | 254.00 | 269.0 | 263.5 | 154.0 |
| 標準偏差 | 759.415  | 1009.692| 346.602 | 642.4450|

Goldのバラつきが異常なのは [TU-Eindhoven](https://gitlab.igem.org/2023/tu-eindhoven)が
約6800コミット，
[Exete](https://gitlab.igem.org/2023/exeter)が
約9500コミット
と群を抜いてコミットしているためで彼らを抜いて平均と標準偏差を求めると

| 代表値 | Gold |
|:-------:|:-----:|
|平均|427.073|
|標準偏差|520.240|

と比較的落ち着いた値となります．
彼ら以外にもコミット数が4桁のチームは多々あり，
当たり前ですが，それらを除けばGoldもSilverも
コミット数だけで言えば大きな違いはないように思えます．

ただ，内容ではなく実装面では参考にできる部分も多くあり
その一つは先程も出てきた細かい単位でのコミットでしょう．
大人数開発における利点だけでなく，
フリーズ直前の緊張状態でも細かいコミットは力を発揮するかもしれません．

経験談ですが，大きなコミットをしてパイプライン[^3]でエラーが発生し
以降のコミット反映が詰まることが多々ありました．
ここでエラーを読むことに慣れている人なら簡単に解決できるかもしれませんが，
コミット人数からも分かるようにそうでない人もいるはずです．彼らがエラーを出し，
エラーを読める人は締め切りぎりぎりで手が離せないというような状況の場合，
エラー読みに慣れてない人たちで解消に取り掛かることになりますが，
もしパイプラインを止めたコミット自身が細かかったとき，
彼らが注意を払うのは**基本的に**その細かい部分だけで良くなり
多少ではありますが素早くエラーを解消することができるでしょう．

# 使用言語，フレームワーク
おまけとして，各チームが何を使ってwikiを実装したのかを軽く
紹介していきます．これは各チームのリポジトリの言語バーを元に作成しています．
そのためマークダウンなどは含まれないことをご了承ください．

| 使用技術    | 数量 |
|:----------:|:----:|
| HTML       | 310  |
| JavaScript | 41   |
| TSX        | 14   |
| CSS        | 11   |
| Vue        | 11   |
| Python     | 5    |
| Astro      | 4    |
| Svelte     | 2    |
| Pug        | 1    |
| Less       | 1    |
| Shell      | 1    |
| なし        | 1    |

"なし"のチームはVuePressを使用していて，
マークダウンが大半だったため言語バーがなくこのようになっています．
Pythonが5つありますがほとんどがvenvの利用によるものでした．
Shellに関してはGitHub上にリポジトリを置きそれをビルドしzip
形式にしてGitLabにプッシュしていたようで，このzipを解凍するために
Shellコマンドが書かれていました．ちなみに使用技術はSvelteでした．
Astroは最近流行ってそうなので今後増えるんじゃないかと思っています(個人の見解です)．

# 最後に
長々と付き合っていただきありがとうございます．
結局何がわかったのかといえば何もわかってないのですが
コミット数などを見ると各チームの努力が伺えたり，
コミット人数を見るとしっかり連携取れてるな
と思えたりしてとても興味深かったです．
今度はアンフリーズ前のデータでやってみたいですね．

残りのアドベントカレンダーを待ちつつ，クリスマスの準備も忘れずに!👋



[^1]: GitLabのコミットが見れる部分のauthor蘭を参考にiGEM公式を抜いた数をカウント．
[^2]: wikiのソースコードが入っているいわゆるフォルダ．
[^3]: デプロイのためのプロセスのようなもの．パイプラインが詰まったらそれはデプロイできない，新しい変更を反映できないということ．