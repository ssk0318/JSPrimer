console.log(1);
// 1

console.log(1 + 1);
// 2

const total = 42 + 42;
console.log(total);
//84

const value = "値";
// console.log(x);
// xが定義されていないのでReferenceError

console.log(value);
// OK

// プリミティブ型：基本型　一度作成したらその値自体を変更できない特性をもつ(immutable)
// オブジェクト型：複合型　オブジェクト、複数のプリミティブ型の値またはオブジェクトからなる集合
//                     一度作成したあともその値自体を変更できる特性をもつ(mutable)

//プリミティブ型
// typeof演算子でデータ型を調べられる
console.log(typeof true); // boolean
console.log(typeof 42); // number
console.log(typeof 9007199254740992n); // bigint
console.log(typeof "java"); // string
console.log(typeof Symbol("シンボル")); // symbol
console.log(typeof undefined); // undefined
console.log(typeof null); // object => 歴史的経緯のあるバグ
console.log(typeof ["配列"]); // object
console.log(typeof { key: "value" }); // object
console.log(typeof function () {}); // function

// 演算子
console.log(1 + 1);

// 文字列演算子
const value1 = "文字列" + "結合";
console.log(value1);

console.log(1 - 1);

console.log(2 * 8);

console.log(8 / 2);

console.log(8 % 2);
console.log(8 % 3);

// 2の4乗
console.log(2 ** 4);

// convert to number
console.log(+"1");

// 数値にならない文字列はNaNを返す => Not a number
console.log(+"文字列");

// NaNの特性
console.log(NaN === NaN); // false 自分自身とも一致しない
console.log(typeof NaN); // number
console.log(Number.isNaN(NaN)); // true numberかどうか判定

console.log(-(-1)); // 1
console.log(-"文字列"); // NaN

// インクリメント演算子 (++)
let num = 1;
num++;
console.log(num); // 2 => num = num + 1

// 後置インクリメント演算子 (num++)
let x = 1;
console.log(x++); // 1 numの評価結果を返す
console.log(x); // 2 numに対して+1をする

// 前置インクリメント演算子 (++num)
// let x = 1;
console.log(++x); // 3 num(前の式から続いているので2)に対して+1する
console.log(x); // 3 numの評価結果を返す

// デクリメント演算子(--)も同様に-1する

// 厳密等価演算子
console.log(1 === 1); // true 同じ型で同じ値である
console.log(1 === "1"); // false　型が異なる

// 厳密不等価演算子
console.log(1 !== 1); // false
console.log(1 !== "1"); // true

// 等価演算子 　　　意図しない挙動することがあるためあまり使用すべきではない
// 同じ型を比較する場合には厳密投下演算子と同じ役割をはたす
// 異なる型の場合↓　同じ型となるように「暗黙的な型変換」をおこなってから評価する
console.log(1 == "1"); // true
console.log(1 == "01"); // true
console.log(0 == false); // true 真偽値を数値に変換してから比較
console.log(0 == null); //false nullの比較はfalseを返す
console.log(null == undefined); // true

// AND演算子 (&&)
// 左辺の評価結果がtrueであれば右辺の結果を返す
//              falseであれば左辺の結果を返す
console.log(true && "右辺の値"); // 右辺の値
console.log(false && "左辺の値"); // false

// falsyな値 false undefined null 0 0n NaN ""
// 上記以外の値が左辺にある場合は右辺の値を返す

// OR演算子 (||)
// ANDの逆
console.log(true || "右辺の値"); // true
console.log(false || "右辺の値"); // 右辺の値

// NOT演算子 (!)
// 評価結果を反転した真偽値を返す
console.log(!false); // true
console.log(!true); // false

// 三項演算子
// 条件式？trueの時に処理する式 : falseのときに処理する式
const ValueA = true ? "A" : "B";
console.log(ValueA); // A

// 暗黙的な型変換
//文字列に対するマイナス演算子の定義はJSにはない、ので2を数値に型変換している
console.log(1 - "2"); // -1

// プリミティブ型(値を変更できない)のシンボルは暗黙的に型変換できない
// String()で文字列に変換する必要ある
console.log("文字列と" + String(Symbol("シンボルの説明"))); // 文字列とSymcbol("シンボルの説明")
// 同様に数値に変換する場合にはNumber()を用いる
console.log(Number("1")); // 1

// NaNはNumber型
console.log(typeof NaN); // number

// 関数と宣言
function echo(x = "デフォルト値") {
  return x;
}
console.log(echo(1));
console.log(echo());

// コールバック関数
// その場で作った匿名関数を関数の引数（値）として渡すことができます。
// 引数として渡される関数のことをコールバック関数と呼びます。 一方、コールバック関数を引数として使う関数やメソッドのことを高階関数と呼びます。
const array = [1, 2, 3];
array.forEach((value) => {
  console.log(value);
});

// 文と式
// 必ず文の最後にはセミコロンがつく（ブロックで終わる文は例外）
function learn() {} // 不要
const read = function () {}; // 式なので不要なのでは？全体で文だから、文として必要
