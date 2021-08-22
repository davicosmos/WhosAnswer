//別ファイルをインポート
//import apiUrl from './00_htmlManage.js';
const apiUrl = 'https://us-central1-whosanswer.cloudfunctions.net/app';

//axios参考　（https://www.yoheim.net/blog.php?q=20170801）
const axios = require('axios');


//サーバとの通信でつかうURL
apiUrl;


//ユーザー名の入力



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