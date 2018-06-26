// 演習：繰り返し処理
// 1〜100の整数かつ偶数の値について、
// 合計値を計算してコンソールに出力してみましょう。

// ヒント
// 繰り返し処理for文を利用
// 数値が偶数であることを判定するには、
// 数値を2で割ったときに割り切れるかどうか（=余りが0）で確認できます。

var sum = 0;

for(var i = 1; i <= 100; i++) {
  if((i % 2) == 0) {
    sum += i; // n = n + 1;
  }
}

console.log(sum);
