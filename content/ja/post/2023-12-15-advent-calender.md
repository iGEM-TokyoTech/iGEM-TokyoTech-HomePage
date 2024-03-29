---
title: 覚悟
subtitle: Wiki Freeze前の一週間
date: 2023-12-15
author: Tsubasa
---

この記事は、[iGEM･Synthetic biology(合成生物学)･Japan Advent Calendar 2023](https://adventar.org/calendars/8876)の15日目の記事です。

こんにちは、iGEM Tokyo TechのTsubasaです。<br>
アドベントカレンダーも半分を過ぎ、2023年も残り16日となりました。皆さんもこの一年に色々な思いをはせていることでしょう。皆さんの今年のハイライトは何でしょうか。旅行したことや、大学に合格したこと、新たな趣味に出会ったこと、恋人ができたことなど個人個人によって様々あると思います。
<!--more-->
私の個人的なハイライトは、やはりiGEMです。思い返すと、ここ一年何をしていたかはっきり覚えていないのですが、iGEMをしていた記憶だけはあります。しかし、このiGEMの記憶さえもはっきりと覚えていないのです。私の2023年の記憶の8割は、Wiki Freeze前のDeath Marchです。Wikiを書き、レビューし、英訳し、実装する。この作業にひたすら追われた1週間が、私の今年の記憶の大半でハイライトになってしまうのは、非常に不本意ですが、一方でこれからの私の姿を見つめる始まりとなった1週間でもあるのです。その意味でやはり今年のハイライトと呼ぶにふさわしいかもしれません。<br>
今日は、そんな1週間の話をお伝えしたいと思います。

Wiki Freezeの一週間前の10月5日、東工大では3Qの授業が始まっていたころですが、私は盤石の態勢でWiki書きを終えることができると考えていました。当然です。なぜなら私が担当していたEducationは、全て日本語の文章化が終わっており、後はレビューと英訳にかけるだけだったからです。どうやらほかのパートは、まだ日本語の文章にすら落とし込めていなかったようですが、夏休みの宿題を夏休み初めの1週間で終わらせるタイプの私は、前もって準備に準備を重ねていたわけです。Educationと同時にIntegrated Human Practices(IHP)のWiki書きもしていた私は、リーダーと調整を重ねながらこれまでやってきたインタビューをまとめ、ストーリーも緻密に設定していきました。こちらもEducationほど早くないですが、確実に終わると踏んでいました。2018年からGoldに遠ざかっているiGEM Tokyo Techにとって今年のGoldは確実に仕留めたかったし、何ならもっと上位を狙いに行ける位置にいると確信していました。『自分たちには、ポテンシャルがある』そう信じてやってきました。だからこそ、空回りが始まったのかもしれません。「このままじゃ、足りない」Educationのレビュー担当者もIHPを一緒にやっていたリーダーも私も口々にそういうようになりました。実際足りていなかったと思うし、より良い改善になることは間違えなかったので、修正していくことにしました。『まだ1週間ある』心の余裕が私たちに夢を見させてくれました。

そこからは、修正の連続でした。Educationの原稿は、ただのイベントの羅列であったものに評価を付け加え、体裁を整えていくことにしました。IHPも書き換えを進め、Wikiの実装者にもっといいデザインをお願いして実装してもらいました。より良いイベントに見えるよう書き加えを行う、見栄えの良いWikiになるようデザインを修正する。修正しては、これがダメだと言いまた修正する。まだ余裕があった私たちは、文字通り朝令暮改を繰り返しました。

しかし、気づけばカレンダーは、12月8日になっていました。Freezeまであと4日となり、さすがにまずいんじゃないのかという気持ちが私の中に芽生えてきました。ちょうど修正を重ねた原稿は形になってきたので英訳をかけ、Wikiに実装することにしました。実装担当者は、私たちが頼んだIHPのデザインの実装で忙しいので、多少はコーディングができる私がWikiに文章を実装することになりました。2022はマークダウンだったのでみんなが同時に実装できたし、簡単でした。しかし、今年はマークダウンではなく、HTMLを編集する形でした。それが大きな罠であったことに実装する中で気づいていきます。まず、編集できる人数が誰でも書けるマークダウンと違い、多少は知識がある人でないと書けないのです。実際、EducationとIHPの多くの実装は、私だけがやることになりました。2022は、2，3人程度でこの二つをやっていたことを考えると大きな違いです。また、分量が圧倒的に多いのです。どちらもGoldひいてはTop 10を目指すために様々なことを行いました。それに伴い分量は大きく増えました。Educationの日本語原稿は、修正前の段階で図を入れてWord15ページ分くらいでした。修正すると最終的に30ページ近くになりました。IHPも21のミーティングカードがあり、それに種々の説明を加えていくとEducationと同等以上の分量になりました。この量を限られた人数で実装しなければならない。文章だけではなく写真も実装しなければならない。こんなことを考えると余裕は焦燥へと変わっていきました。『終わらないのではないか』そんな嫌な想像が始まりました。

そんなこととはつゆ知らず、周りのメンバーは、まだ修正を繰り返すばかりです。「さすがにやめましょう」「やばいです」「急いでください」そんな言葉をかけますが、私の言葉に強さが足りないばかりにその想いは最後まで伝わることはありませんでした。10月9日となり、いよいよWiki Freezeの週になりました。さすがに私が持つまでではないにしろ、メンバー各々危機感を持ち始めます。「10月12日18時を英語原稿の部内締め切りとしよう」と副リーダーが提案しました。『修正地獄はやっと終わる』とひとまずは安心し、私としてもできることを全部やろうと切り替えました。私がこの時やっていたのは、実装のほかに残っていたIHPのWiki書きもありました。正直実装に集中したかったですが、部内締め切りは、Freezeの7時間前です。死ぬ気で頑張れば、実装は終わるという目算があり、ひとまず終わっていないWiki書きをやることにしました。授業もあったので中断しつつでしたが、進めていきました。しかし、私の想像と裏腹にまだ朝令暮改は続いていました。この時、強い言葉で制止しておけばよかったですが、クォリティのためだと言われるとやはりやるしかないという気持ちになり、そのままなあなあと時間が過ぎていきました。

そして迎えた10月12日。午前中、まだやるべきことは残っていました。原稿書きは流石に終わりの兆しは見えていましたが、英訳がまだでした。日本語で30ページ分を全て英訳するとなるとそれなりに時間はかかって当然です。それが終わり見直ししてからの実装でした。ただ、これに関してはまだ勝ち筋はあると考えていました。実は、少し前に日本語原稿をすでに実装していたのです。これでレイアウトは決まっていたので、あとは英文に置き換えるだけでした。しかし、やはり問題はIHPでした。こちらは実装にほとんど手をつけていない状態でした。直前となるとメンバー全員何かしらの仕事をやっていたのでどちらかに集中したいところでしたが、両方少しづつやるしかない状況でした。『EducationをやってからIHPをやろう』と心に決め実装をしていったのですが、ここで一番ネックになったのは、シングルクォーテーションとダブルクォーテーションの書き換えでした。日本語で実装した時には気が付きませんでしたが、原稿でかなりカッコを使っていてそれを訳に反映させたとき、クォーテーションマークが必ずついてきました。クォーテーションマークは、HTML上では%apos;や%quot;のように書き換えないといけないのです。この作業がとんでもなく地道で、一方一つでも書き換えていないとエラーになり全体の実装に迷惑が掛かるという厄介な作業でした。分量が多く、書き換えも多く、作業量も多い。しかし、誰も自分の苦しみをわかっている人はいない。みんながみんな一生懸命にやっていましたが、その作業が無駄になってしまうのではないかという悲惨な想像が現実になろうとしていました。『とにかく最善を尽くすしかない』と訳が終わった人にクォーテーションマークの書き換えをお願いしたり、実装作業はやったことがない人に少しだけ実装方法を教え、実装できるところはやってもらったりとがむしゃらでした。「全部じゃなくてもいいから載ってくれ」あの日の夜メンバー全員が願い、実現させようと必死でした。

ちょっとしたミスでした。クォーテーションマークを書き換えていなかった、それまで何度も出てきたエラーでした。時計は、12/13 0:40。『もうだめだ』初めて諦めの感情が浮かんできました。IHPのインタビューは、8割実装できていました。しかし、Educationは、初めのOverviewだけ。Freezeまでの20分間、それまで動いていた手が急に重くなりました。

気が付くと、12/13 1:00。私たち、iGEM TokyoTechのWikiは、未完の大器となりました。

Freezeした刹那、ふつふつと怒りが湧いてきました。『なんでできなかったんだ』メンバーに、そして自分自身に向けられた怒りで、ほとんど二徹だった私の意識ははっきりとしてきました。『できていたはずなのに』『自分たちのWikiはトップレベルだったのに』そんな悔しさから込み上げてきた怒りでした。

話は、12月9日に移ります。この日、私はiGEM Tokyo Techのリーダーになることが正式に決まりました。2023でやったことは、間違っていなかったということを証明したい。2024は、もっと良い成果を残したい。そんな気持ちに突き動かされて、覚悟を決めました。今年は、iGEM TokyoTechが統合に伴い、”TokyoTech”として出場できる最後の年です。Jamboreeの時期には、もう統合しているので、東京科学大からiGEMに出場する最初の年でもあります。偉大な時代の終焉であり、新たな時代の始まりである時に私たちは立っています。私は、この変革の中のリーダーとして、iGEMで圧倒的な成果を残し、このチームの終わりと始まりに花を添えたいのです。できることは何でもするつもりだし、できないことは、優秀な仲間たちと乗り越えていきたい。

2023の積み上げは、たった一週間の判断と働きに左右されてしまいました。苦い思い出です。そんなことは、二度と起こさない。ここにその決心を残しておきます。

P.S.　できていなかった[Education](https://2023.igem.wiki/tokyotech/education)と[IHP](https://2023.igem.wiki/tokyotech/human-practices)の実装を終わらせました。ぜひ感想を教えてください。
