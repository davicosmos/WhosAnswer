//ホストによるルーム作成画面の処理

//この行で入力フォームに書かれた名前を取得。
let tottekitaHostName = document.getElementById('hostNameImput');

//この行でルームを作るボタンを押したときの処理。入力フォームの名前をサーバへ連携する必要がある。
let roomCreateComplete = document.getElementById('htmlManage-call');

roomCreateComplete.addEventListener('click', function() {
alert("ホスト名を取得しました。取得した名前はこちら" + tottekitaHostName.value);
console.log(tottekitaHostName.value);
});
