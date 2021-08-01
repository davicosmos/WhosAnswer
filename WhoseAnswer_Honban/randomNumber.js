//1.ランダム数字の上限を指定(0〜指定した数字の範囲)
let maxNumRange = 5;

//2.ランダムな数字を生成
let randomNum = parseInt(Math.random() * maxNumRange) + 1;

//3.ランダム生成された数字の検証
console.log(randomNum);