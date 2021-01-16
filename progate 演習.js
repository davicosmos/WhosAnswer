//JavaScriptのコードを実装
//文字の入力
console.log("hello world");

// 足す
console.log(5 + 3);

// 引く
console.log(20-8);

// 文字で表示
console.log("4+5");

// かける
console.log(8*4);

// わる
console.log(24/4);

// わって余り
console.log(7%2);

// 文字を連結
console.log("ひつじ"+"仙人");

// 文字列の連結
console.log("20"+"15");

// 変数nameを定義し、「にんじゃわんこ」を代入してください
let name = "にんじゃわんこ";

// 変数nameの値を出力してください
console.log(name);

// 変数lengthを定義してください
let length =5;

// 変数lengthの値を出力してください
console.log(length);

// 変数lengthを用いて、円の面積を出力してください
console.log(length*length*3);

console.log(name);

// 変数nameの値を"とりずきん"に更新してください
name="とりずきん";

// 変数nameの値を出力してください
console.log(name);


let number = 7;
console.log(number);

// 変数numberの値に3を加えてください
number=number+3;

// 変数numberの値を2で割ってください
number=number/2;

// 定数languageを定義してください
const language = "フランス語";

// 定数languageの値を出力してください
console.log(language);

// 定数languageを用いて、「〇〇を話せます」と出力してください
console.log(language+"を話せます");


const age = 20;

// 「ぼくの名前は〇〇です」とコンソールに出力してください
console.log(`ぼくの名前は${name}です`);

// 「今は〇〇歳です」と出力してください
console.log(`今は${age}歳です`);


const level = 12;

// 条件式を「level > 10」とするif文を作ってください
if(level>10){
  console.log("レベルが10より大きいです");
}


// 「age >= 20」を出力してください
console.log(age>=20);

// 「age < 20」を出力してください
console.log(age<20);

// ageの値が20以上の場合に、「私は20歳以上です」と出力してください
if(age >=20){
  console.log("私は20歳以上です");
}


const password = "ninjawanko";

// passwordの値が"ninjawanko"の場合、「ログインに成功しました」と出力してください
if(password === "ninjawanko"){
  console.log("ログインに成功しました");
}



// passwordの値が"ninjawanko"でない場合、「パスワードが間違っています」と出力してください
if(password !== "ninjawanko"){
  console.log("パスワードが間違っています");
}



// 条件式が成り立たない場合に「私は20歳未満です」と出力してください
if (age >= 20) {
  console.log("私は20歳以上です");
} else{
  console.log("私は20歳未満です");
}



// ageの値が10以上20未満のとき、「私は20歳未満ですが、10歳以上です」と出力してください
if (age >= 20) {
  console.log("私は20歳以上です");
} else if(age >=10){
  console.log("私は20歳未満ですが、10歳以上です");
} else {
  console.log("私は10歳未満です");
}



// かつ（両方正）は&&　または(どちらか)は||
if(age >=20 && age <30){
  console.log("私は20代です");
}

const rank = 5;



switch (rank) {
  case 1:
    console.log("金メダルです！");
    break;
  case 2:
    console.log("銀メダルです！");
    break;
  case 3:
    console.log("銅メダルです！");
    break;
  // defaultの処理を追加してください
  default:
    console.log("メダルはありません");
    break;
}