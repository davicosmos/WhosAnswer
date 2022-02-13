/* Top画面を表示する */

/**
みなおし要。　いらなければ削除。　！！
 */
//別ファイルをインポート
//import apiUrl from './00_htmlManage.js';
//const apiUrl = 'https://us-central1-whosanswer.cloudfunctions.net/app';

//axios参考　（https://www.yoheim.net/blog.php?q=20170801）
//const axios = require('axios');


//サーバとの通信でつかうURL
//apiUrl;


/* ホスト向けの「ルームを作る画面」への遷移ボタンを押した際の処理 */
let btn1 = document.getElementById('room-create');
    btn1.addEventListener('click', function() {
    alert("あなたのBMI値は53マンです。");  //ボタンの反応を見ているだけなので、次の画面へ適切に遷移すればOK(hosting?)
    console.log(btn1);
    });


/* ゲスト向けの「ルームに入る画面」への遷移ボタンを押した際の処理 */
let btn2 = document.getElementById('room-enter');
    btn2.addEventListener('click', function() {
    alert("あなたのBMI値は213マンです。");   //ボタンの反応を見ているだけなので、次の画面へ適切に遷移すればOK(hosting?)
    console.log(btn2);
    });