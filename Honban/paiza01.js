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
