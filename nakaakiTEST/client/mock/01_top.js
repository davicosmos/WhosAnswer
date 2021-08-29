//別ファイルをインポート
//import apiUrl from './00_htmlManage.js';
//const apiUrl = 'https://us-central1-whosanswer.cloudfunctions.net/app';

//axios参考　（https://www.yoheim.net/blog.php?q=20170801）
//const axios = require('axios');


//サーバとの通信でつかうURL
//apiUrl;


//ホスト向けのルームを作る画面への遷移
let btn1 = document.getElementById('room-create');
    btn1.addEventListener('click', function() {
    alert("あなたのBMI値は53マンです。"); 
    console.log(btn1);
    });


//ゲスト向けのルームに入る画面への遷移
let btn2 = document.getElementById('room-enter');
    btn2.addEventListener('click', function() {
    alert("あなたのBMI値は213マンです。"); 
    console.log(btn2);
    });