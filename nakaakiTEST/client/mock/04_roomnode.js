/* ルームに誰がいるかを見る画面 */
let clicked = false
//キックボタンと解散ボタンは未実装。
/* 解散ボタン */
let roomDismiss = document.getElementById('dismiss_btn');
roomDismiss.addEventListener('click', function () {
  var res = confirm("部屋を解散しますか？本当ですか？まじ？");
  if (res) {
    //画面を跨いでroom_idを取得する。画面2からとってくる。
    const room_id = Cookies.get('room_id');
    if (!clicked) {
      clicked = true
      // 回答内容を送信
      axios.post(API_URL + ROOM_NODE.postDeleteRoom, {
        room_id: room_id
      }).then((res) => {
        /*　トップ画面に遷移　*/
        location = hosting_URL + '/mock/01_top.html';
      }).finally(() => {
        clicked = false;
      });;;
    }
  }
});
/* はじめるボタン */
let roomEnter = document.getElementById('roomEnter_btn');
roomEnter.addEventListener('click', function () {
  alert("次のステージへ");
  console.log(roomEnter);
});
//ここからが基本的な画面の表示ロジックです。
const load = function () {
  //画面を跨いでroom_idを取得する。画面2からとってくる。
  const room_id = Cookies.get('room_id');
  console.log(room_id);
  //ルームIDを書き換え
  let $roomIdHyouji = document.getElementById('roomId');
  $roomIdHyouji.innerHTML = room_id;
  if (!clicked) {
    clicked = true
    axios.get(API_URL + ROOM_NODE.getRoomInfo + '/' + room_id).then((res) => {
      // DBからホスト名を取得
      //ルームにいる人全員の名前を表示
      //DBの配列から要素を取得する　見直し要！！
      const memberLen = res.data.length;
      res.data.sort(function (first, second) {
        if (first.authority > second.authority) {
          return -1;
        } else {
          return 0;
        }
      });
      // table要素を取得し、更新がかかるたびに、テーブルを削除。
      let tableElem = document.getElementById('memberTable');
      let row = tableElem.rows.length;
      for (let i = 0; row > i; i++) {
        tableElem.tBodies[0].deleteRow(-1);
      };
      let n = 0;
      while (n < memberLen) {
        //    $result_02.textContent = quiz[randoms[n]].question + quiz[randoms[n]].correct + userAnswerData[n] + answerMatchList[n];
        // table要素を取得
        tableElem = document.getElementById('memberTable');
        // tbody要素にtr要素（行）を最後に追加
        let trElem = tableElem.tBodies[0].insertRow(-1);
        // td要素を追加
        let i = n;
        let img01 = document.createElement('img');
        img01.src = './items/04_room-assets/host_icon.png';
        let img02 = document.createElement('img');
        img02.src = './items/04_room-assets/kick_icon.png';
        const roleBunki = () => {
          //ここでユーザー名と王冠画像と、Kick画像を表に入れて、一括表示。
          if (res.data[i].authority == 1) {
            let oukan = trElem.insertCell(1)
            oukan.appendChild(img01); //王冠
            /* 更新ボタン化 */
            oukan.addEventListener('click', load);
            //ホストの権限を持つユーザの名前をみんなの画面の表示
            const $doc = document;
            let $roomHostNameBase = $doc.getElementById('roomHostName');
            $roomHostNameBase.innerHTML = res.data[i].user_name + "のルーム";
          } else {
            img02.onclick = () => {
              if (confirm(res.data[i].user_name + 'さんを削除しますか？')) {
                if (!clicked) { 
                clicked = true;
                // 回答内容を送信
                axios.post(API_URL + ROOM_NODE.deleteMember, {
                  user_id: res.data[i].id
                }).then((res) => {
                  /*　リロード　*/
                  window.location.reload()
                }).finally(() => {
                  clicked = false;
                });
                }
              }              
            }
            trElem.insertCell(1).appendChild(img02);
          }
        };
        trElem.insertCell(0).appendChild(document.createTextNode(res.data[i].user_name));
        roleBunki();
        // trElem.insertCell(2).appendChild(img02);
        n++;
      };
    }).finally(() => {
      clicked = false;
    });;;
  }
};
window.addEventListener('pageshow', load, false);