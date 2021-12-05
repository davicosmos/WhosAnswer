/* ホストによるルーム作成画面の処理 */

/* ホストのユーザー名を入力し、ルームを作るボタンを押下 */
//この行で入力フォームに書かれた名前を取得。
let tottekitaRoomName = document.getElementById('hostNameImput');

//この行でルームを作るボタンを押したときの処理。入力フォームの名前をサーバへ連携する必要がある。
let roomCreateComplete = document.getElementById('htmlManage-call');

// roomCreateComplete.addEventListener('click', function() {
// alert("ホスト名を取得しました。取得した名前はこちら" + tottekitaRoomName.value);
// console.log(tottekitaRoomName.value);
// });

roomCreateComplete.addEventListener('click', function() {
    // ルームIDでルーム名を作成
    axios.post(API_URL + HOST_NODE.addRoom,{owner_name: tottekitaRoomName.value})
        .then((res) => {
            if (res.data) {
                alert("ルーム作成完了!!☆彡");
                //ルーム待機画面への移動処理を作る
            } else {
                alert("ルームを作れませんでした。ごめんなさい。別のルームコードで作ってみてください。ごめんなさい。");
            }
        });
});
