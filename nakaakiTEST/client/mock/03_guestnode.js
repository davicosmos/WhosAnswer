//別ファイルをインポート
//import apiUrl from './00_htmlManage.js';
//const apiUrl = 'https://us-central1-whosanswer.cloudfunctions.net/app';

//axios参考　（https://www.yoheim.net/blog.php?q=20170801）
//const axios = require('axios');


//サーバとの通信でつかうURL
//apiUrl;

//ここから上はナカアキと相談


//ユーザー名の入力
let tottekitaGuestUserName = document.getElementById('guestUserName');

let roomEnterBtn = document.getElementById('roomEnter');

roomEnterBtn.addEventListener('click', function() {
alert("ゲスト名を取得しました。取得した名前はこちらです。" + tottekitaGuestUserName.value);
console.log(tottekitaGuestUserName.value);
});


//部屋検索
    //入力されたルームIDを取得する
    let tottekitaRoomID = document.getElementById('roomNumberCheck1');

    let roomKensakuBtn = document.getElementById('roomNumberCheck2');

    let dbTotteitaHostName = "ホスト太郎";

    roomKensakuBtn.addEventListener('click', function() {
    alert("あんたが探していた部屋はこれだろ" + dbTotteitaHostName);
    console.log(dbTotteitaHostName);
    });

    //入力されたルームIDをもとに、DBアクセスし、ホスト名を取得

    //ホスト名をもとにhtmlの「お友達がホスト」を書き換え




//ここから下は、練習なので削除可能。
//おためし（イベントオンクリック）
let btn = document.getElementById('roomNumberCheck2');
 
    btn.addEventListener('click', function() {
      // GET通信
axios.get(apiUrl+'/timestamp')

// thenで成功した場合の処理をかける
.then(response => {
    console.log('status:', response.status); // 200
    console.log('body:', response.data);     // response body.

// catchでエラー時の挙動を定義する
}).catch(err => {
    console.log('err:', err);
});
    });


//おためし2
let room_name = document.getElementById('roomNumberCheck4');
    room_name.addEventListener('click', function() {
        room_name.innerHTML='もりらルームでなくルナティスルームです。';
      });

      
export {tottekitaRoomID};