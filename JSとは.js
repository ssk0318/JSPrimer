// 大文字と小文字を区別する
const name = "azu";
const NAME = "azu";

// 式や文の間にスペースがいくつあっても同じ意味となる
// 整型されて確認できず
1 + 1;
1 + 1;

// 厳格な実行モード。文字列をファイルまたは関数の先頭におくことで
// strict modeが実行される
// evalやwithなどを禁止する
("use strict");
mistypedVariable = 42;
// 別ファイルusestrictで検証
