// 変数と宣言

// const
// まとめてかける
// constは再代入しない変数宣言のためのキーワード
const bookTitle = "Javascript Primer",
  bookCategory = "プログラミング";

// objectなどもconst宣言できる
const object = {
  key: "値",
};
// オブジェクトそのものは変更できる
object.key = "新しい値";

// let
// 値の再代入が可能なキーワード
let bookTitle = "JavaScript Primer";

let bookTitle;
// undifined

// var
// letとほとんど同じ
// 同じ名前の変数を再定義できてしまう問題あり
// letやconstではSyntaxErrorが発生するが、varだとでない
let x;
let x;
// => SyntaxError

var x = 1;
var x = 2;
// 変数は2となる

// 「letはvarを改善したバージョン」

//変数名に数字を含めることができるが数字から開始できない
// var 1st
// NG

// 予約後const.var.letは変数名に利用できない
// var var
// NG
