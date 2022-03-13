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

// roomEnterBtn.addEventListener('click', function() {
// alert("ゲスト名を取得しました。あなたが設定した名前はこちらです。" + tottekitaGuestUserName.value);
// console.log(tottekitaGuestUserName.value);
// });


/* 部屋に入る */
    /* ホストから聞いたルームIDを検索ボタンに入力する */ 
    //入力されたルームIDを取得する　見直し要。！！　ルームをDBから探せなくてはならない。
    // let roomKensakuBtn = document.getElementById('roomNumberCheck2');　//検索ボタン

    // roomKensakuBtn.addEventListener('click', function() {

    // let tottekitaRoomID = document.getElementById('roomNumberCheck1');　//　入力フィールド

    // alert("あんたが探していた部屋はこれだろ" + tottekitaRoomID.value); //入力フィールドから取得した部屋番号を表示

    // //入力されたルームIDをもとに、DBアクセスし、ホスト名を取得
    // // let dataTest = fakeRoomData();
    // // console.log(fakeRoomData);
    // // let  tottekitaHostName = dataTest.hostName;
    // let dataTest = fakeUserData();
   
    //  //この下のコードに、  element.roomId === tottekitaRoomID.value &&
    // let tottekitaHostName = dataTest.find(element =>  element.role === 1);
   

    // //ホスト名をもとにhtmlの「お友達がホスト」を書き換え
    // document.getElementById('roomNumberCheck4').innerHTML = tottekitaHostName.userName + "がホストのルーム";

    // });




/* ここから下は、練習なので削除可能。　！！ */
//おためし（イベントオンクリック）
// let btn = document.getElementById('roomNumberCheck2');
 
//     btn.addEventListener('click', function() {
//       // GET通信
// axios.get(apiUrl+'/timestamp')

// // thenで成功した場合の処理をかける
// .then(response => {
//     console.log('status:', response.status); // 200
//     console.log('body:', response.data);     // response body.

// // catchでエラー時の挙動を定義する
// }).catch(err => {
//     console.log('err:', err);
// });
//     });


//おためし2
// // let room_name = document.getElementById('roomNumberCheck4');
//     room_name.addEventListener('click', function() {
//         room_name.innerHTML='もりらルームでなくルナティスルームです。';
//       });

/* ここから下が中村作成　！！ */

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
    axios.post(API_URL + GUEST_NODE.enterRoom,{guest_name: tottekitaGuestUserName.value, roomIdKensaku:roomIdKensakuTottekuru.value })
        .then((res) => {
            
                console.log(res.data);

                //クッキーにroom_idを保存。
                Cookies.set('room_id', roomIdKensakuTottekuru);
                console.log(roomIdKensakuTottekuru);

                //ルーム待機画面への移動処理を作る
                location = hosting_URL + '/mock/04_room.html';

        });
});


      
//export {tottekitaRoomID};