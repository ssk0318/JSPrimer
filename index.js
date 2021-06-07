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
