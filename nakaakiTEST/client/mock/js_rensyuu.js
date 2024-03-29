//JavaScriptのコードを実装

//ランダム数字を生成
  //1.ランダム数字の上限を指定(0〜指定した数字の範囲)
let maxNumRange = 5;

  //2.ランダムな数字を生成
let randomNum = parseInt(Math.random() * maxNumRange) + 1;

  //3.ランダム生成された数字の検証
console.log(randomNum);





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






//第２章

// 変数numberを定義してください


// 変数numberに1を加えて、その後に変数numberの値を出力してください
number += 1;
console.log(number);

// 上述の2行のコードを4回、貼り付けてください
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);

// 変数numberを定義してください
let numberman=1;

// while文を作成してください
while (numberman<=100){
  console.log(numberman);
  numberman+=1;
}

// for文を用いて、1から100までの数字を出力してください
for(let numbermen=1;numbermen<=100;numbermen++){
  console.log(numbermen);
}

// for文を完成させてください
for (let numbermon=1;numbermon<=100;numbermon++) {

  
  // if文を用いて、numberが3の倍数の時に「3の倍数です」、そうでないときは数字を出力してください
  if(numbermon%3===0){
    console.log("3の倍数です");
  }else{
    console.log(numbermon);
  }
}


// 定数animalsに、指定された配列を代入してください
const animals = ["dog", "cat", "sheep", "rabbit", "monkey", "tiger", "bear", "elephant"];

// 定数animalsを出力して下さい
console.log(animals);


// 配列の1つ目の要素を出力してください
console.log(animals[0]);

// 配列の3つ目の要素を出力してください
console.log(animals[2]);

// 配列animalsの3つ目の要素を「rabbit」に更新してください
animals[2]="rabbit";

// 配列animalsの3つ目の要素をコンソールに表示して下さい
console.log(animals[2]);

for(let i =0;i<3;i++){
  console.log(animals[i]);
}


// lengthを用いて配列の要素の数を出力してください
console.log(animals.length);

// lengthを用いて条件式を書き換えてください
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// 定数characterを定義し、指定されたオブジェクトを代入してください
const character = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 1000}
];


// characterの値を出力してください
console.log(character[0]);

// characterのnameの値を出力してください
console.log(character[0].name);

// characterのageの値を「20」に更新してください
character[0].age=20;

// characterをコンソールに出力してください
console.log(character[0]);



// charactersの1つ目の要素をコンソールに出力してください
console.log(character[0]);

// charactersの2つ目の要素の「name」に対応する値をコンソールに出力してください
console.log(character[1].name);


const characters = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 100},
  {name: "ベイビーわんこ", age: 5},
  {name: "とりずきん"}
];


// for文を完成させてください
for (let i=0;i<characters.length;i++) {
  console.log("--------------------");
  
  // 定数characterを定義してください
  const character=characters[i];
  
  // 「名前は〇〇です」を出力してください
  console.log(`名前は${character.name}です`);
  
  // 「〇〇歳です」を出力してください
  console.log(`${character.age}歳です`);
  
}

for (let i = 0; i < characters.length; i++) {
  console.log("--------------------");
  
  const character = characters[i];
  
  console.log(`名前は${character.name}です`);
  
  // if文を追加してください
  if(character.age===undefined){
  console.log("年齢は秘密です");
  }else{
    console.log(`${character.age}歳です`);
  }
  
}

const cafe = {
  name: "Progateカフェ",
  businessHours: { 
    opening: "10:00(AM)",
    closing: "8:00(PM)"
  },
  // menusプロパティに配列を代入してください
  menus:["コーヒー","紅茶","チョコレートケーキ"]
  
};

console.log(`店名: ${cafe.name}`);
console.log(`営業時間:${cafe.businessHours.opening}から${cafe.businessHours.closing}`);
console.log(`----------------------------`);
console.log("おすすめメニューはこちら");

// for文を用いて配列menusの中身を表示させてください
for(let i=0;i<cafe.menus.length;i++){
  console.log(cafe.menus[i]);
}






// 第3章


// 定数greetにアロー関数を代入してください またはfunction(){
const greet = ()=>{
  console.log("こんにちは！");
 
};

// 定数greetを呼び出してください
greet();


// 関数の引数にnameを追加してください
const greeet = (namee) => {
  // 「こんにちは、〇〇さん」となるように出力してください
  console.log(`こんにちは、${namee}さん`);
  
};

// greetの引数に「ひつじ仙人」を渡して呼び出してください
greeet("ひつじ仙人");



// 関数の引数にnumber1とnumber2を追加してください
const add = (number1,number2) => {
  // number1とnumber2を足した値をコンソールに出力してください
  console.log(number1 + number2);
  
};

// 引数に5と7を渡して関数を呼び出してください
add(5,7);




const half = (number) => {
  // numberを2で割った値を戻り値として返してください
  return number/2;
};

// 定数resultを定義してください
const result = half(130);

// 「130の半分は〇〇です」となるように出力してください
console.log(`130の半分は${result}です`);



const check = (number) => {
  // numberが3の倍数かどうかを戻り値として返してください
  return number % 3 === 0;
  
};

// if文の条件式で、checkを呼び出してください
if (check(123)) {
  console.log("3の倍数です");
} else {
  console.log("3の倍数ではありません");
}


// 定数nameを定義してください
const naaame="にんじゃわんこ";

const introducee = (naaame) => {
  // 「わたしは〇〇です」を出力してください
  console.log(`わたしは${naaame}です`);
  
};

// 関数introduceを呼び出してください
introducee("ひつじ仙人");

// 定数nameの値を出力してください
console.log(naaame);

const number1 = 103;
const number2 = 72;
const number3 = 189;

// getMax関数を定義してください
const getMax = (a, b, c) => {
  let max = a;
  
  if (b > max) {
    max = b;
  }
  if (c > max) {
    max = c;
  }
  
  return max;
};

// 「最大値は○○です」と出力してください
const max = getMax(number1, number2, number3);
console.log(`最大値は${max}です`);








// 第4章


// 定数animalを定義してください
const animale={
  name:"レオ",
  age:3,
  greet:() => {
    console.log("こんにちは");
  }
};

// animalのnameプロパティの値を出力してください
console.log(animale.name);

// animalのgreetプロパティの関数を実行してください
animale.greet();


class Animal {
}

// Animalクラスのインスタンスを定数animalに代入してください
const aniimal = new Animal();

// 定数animalの値を出力してください
console.log(aniimal);

class Aniemal {
  // コンストラクタを追加してください
  constructor(){
  console.log("インスタンスを生成しました");
  }
  
}




class Aniiimal {
  constructor() {
    // nameの値に文字列「レオ」を代入してください
    this.name="レオ";
    
    // ageの値に数値の「3」を代入してください
    this.age=3;
  }
}

const aniiimal = new Aniiimal();

// 「名前: 〇〇」となるように出力してください
console.log(`名前:${aniiimal.name}`);

// 「年齢: 〇〇」となるように出力してください
console.log(`年齢:${aniiimal.age}`);




//console.log("hogehoge");
console.log("ハロー、paizaラーニング");
console.log("hello world")
var player = "勇者";
console.log(player);
var randnum = parseInt(Math.random() *10) +1;
console.log(randnum);
var number = 100;
console.log(number + 30);
console.log(number);
console.log(number + number);
console.log(number % 3);
 var number = 100;
 var text = "hello" + "paiza";
 console.log(number +30 );
 console.log(text);
 console.log(number + text);

 var number = 2;
if (number == 1){
    console.log("すき");
}else if (number == 2){
    console.log("どちらでもない");
}else{
    console.log("嫌い");
}

var time = 13;
if (time　< 12){
    console.log("午前中");
}else if (time == 12){
    console.log("正午");
}else if (time > 12){
    console.log("午後");
}

var omikuji = parseInt(Math.random() *10) +1;
if (omikuji ==1){
    console.log("大吉");
}else if (omikuji ==2){
    console.log("中吉");
}else if (omikuji <= 4){
    console.log("小吉");
}else if (omikuji <= 7){
    console.log("凶");
}else{
    console.log("大凶");
}

var hit =parseInt(Math.random() *10) +1;
if (hit < 6){
    console.log("スライムに" + hit +"のダメージを与えた");
}else{
    console.log("スライムに100ダメージを与えた");
}



//テスト作成したものです。やっほー。
// 西暦年から昭和年を求める
//process.stdin.resume();
process.stdin.setEncoding('utf8');

var seireki = parseInt(Math.random() * 60) + 1970;
//var seireki = 1910;
process.stdout.write ("西暦" + seireki + "年は");

// 西暦をもとに昭和・平成・令和の年次を判別して表示
if(seireki >= 1925 & seireki <= 1988 ){
    var showa = seireki - 1925;
    console.log("昭和" + showa + "年です");
}else if (seireki >= 1989 & seireki <= 2018 ){
    var heisei = seireki - 1988;
    console.log("平成" + heisei + "年です");
}else if(seireki >= 2019){
    var reiwa = seireki - 2018;
    console.log("令和" + reiwa + "年です");
}else{
    console.log("昭和より前じゃん");
}
