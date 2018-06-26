// 演習：配列を使ったスコアの計算
//
// テストの点数の、合計値、平均値を求めるプログラムの開発
// 集計する各点数は、100, 90, 80, 70 ,60 とする。
//
// 手順
// 1.点数を、変数scoresに配列として格納。
// 2.合計値を格納する変数sumを宣言し、0で初期化。
// 3.繰り返し処理により、配列に格納した点数を一個づつ取り出し、
// 4.合計値を格納する変数に足してゆく。
// 5.繰り返し処理が終わったら、平均値averageを求める。 合計値 / 配列の長さ
// 6.最後に、合計値、平均値を、コンソールに出力する。
//
// 補足
// 配列の長さを求めるには .length プロパティを使用する。
// 例) scores.length

var scores = [100, 90, 80, 70, 60];
var sum = 0;

for (var i = 0; i < scores.length; i++) {
  sum += scores[i];  //sum = sum + sum[i];
}

var average = sum / scores.length;

console.log('合計値:' + sum); // +で連結できる。
console.log('平均値:' + average);
