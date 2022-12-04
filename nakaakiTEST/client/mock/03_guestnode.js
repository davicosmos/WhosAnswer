/* ゲスト向けの画面。ホストが作成したルームに入るための操作を行う。 */

/* いらなければ削除。同期・非同期をやりたかったはず。　！！ */

//別ファイルをインポート
//import apiUrl from './00_htmlManage.js';
//const apiUrl = 'https://us-central1-whosanswer.cloudfunctions.net/app';

//axios参考　（https://www.yoheim.net/blog.php?q=20170801）
//const axios = require('axios');


//サーバとの通信でつかうURL
//apiUrl;

//DBを読み込みたい。（見直し要　！！）
let script = document.createElement('script'); //変数名は適当なものにでも
//script.src = "fakeDB.js"; //ファイルパス
document.head.appendChild(script); //<head>に生成

/* ゲストが使う個々のユーザー名の入力 　！！見直し要。ユーザーデータを書き込みに行きたい。*/
let tottekitaGuestUserName = document.getElementById('guestUserName');

let roomEnterBtn = document.getElementById('roomEnter');

/* 検索ボタンの検索処理のイベント */
let search_button = document.getElementById('roomNumberCheck2');
search_button.addEventListener('click', function() {
    let room_id = document.getElementById('roomNumberCheck1').value;
    // ルームIDからルーム名を取得
    axios.get(API_URL + GUEST_NODE.getRoomByCode + '/' + room_id)
        .then((res) => {
            let room_msg = 'ルームがありませんでした';
            if (res.data) room_msg = res.data + 'がホストのルーム';
            // 表示個所を書き換え
            let room_disp = document.getElementById('roomNumberCheck4');
            room_disp.innerHTML = room_msg;
        });
});

/* このルームに入るの処理 */
roomEnterBtn.addEventListener('click', function() {

    let roomIdKensakuTottekuru = document.getElementById('roomNumberCheck1').value;

    // ルームIDでルーム名を作成
    axios.post(API_URL + GUEST_NODE.enterRoom,{guest_name: tottekitaGuestUserName.value, roomIdKensaku:roomIdKensakuTottekuru })
        .then((res) => {
            
                console.log(res.data);

                //クッキーにroom_idおよびuser_idを保存。
                Cookies.set('room_id', roomIdKensakuTottekuru);
                Cookies.set('user_id', res.data);
                console.log(roomIdKensakuTottekuru);

                //ルーム待機画面への移動処理を作る
                location = hosting_URL + '/mock/04_room.html';

        });
});