# Bouncing-dvd
DVDの待機画面でずっと動いているやつ。

## 使い方
1. ` /src/img/ ` に好きな画像を入れる。
2. ` /src/main.js ` を以下の通りに編集する。
   1.  17行目 ` imgPath = 'src/img/syachiku.png'; ` のファイル名 ` syachiku.png ` を自分で入れた画像に変える。[^1]
   2.  18行目 ` scale = 0.5; ` の値を変える。[^2]
   3.  19行目 ` speed = 3; ` の値を変える。[^3]

[^1]: ` hogehoge.png ` を入れたのなら ` imgPath = 'src/img/hogehoge.png'; `にする。
[^2]: ` 1 ` は元の画像と同じ大きさ。` x < 1 ` は小さくなり、` x > 1 ` は大きくなる。
[^3]: 数字が大きくなるほど、動きが速くなる。` 0 ` は動かない。

## pp/ について
[null8r.github.io/bouncing-dvd/pp/](https://null8r.github.io/bouncing-dvd/pp/)<br>
好きな画像を動かすことができる。<br>
画像の大きさと速さを変更することもできる。

## 画像
[いらすとや](https://www.irasutoya.com/2015/09/blog-post_62.html)