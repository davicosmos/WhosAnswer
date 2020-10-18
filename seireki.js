// 西暦年から昭和年を求める
process.stdin.resume();
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
