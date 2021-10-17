//import {tottekitaRoomID} from "./03_guestnode";
//import {fakeUserData} from "./fakeDB";



//fakeDBのつもり。ベタガキした。あとで直す。
const fakeUserData = 
   [
      {userName:"もりら", role:1, assign:0 , userId:"001" , roomId:"000100"},
      {userName:"くろき", role:0, assign:1 , userId:"002" , roomId:"000100"},
      {userName:"あらい", role:0, assign:0 , userId:"003" , roomId:"000100"},
      {userName:"ナカムラアア", role:0, assign:0 , userId:"004" , roomId:"000100"},
      {userName:"デイビス", role:0, assign:0 , userId:"005" , roomId:"000100"},
      {userName:"キャベツ太朗", role:0, assign:0 , userId:"006" , roomId:"000100"},
    
  ];
  //リストが取れているか確認。
  console.log(fakeUserData);


//ホストとゲストで共通の機能

let goOutBtn = document.getElementById('goOut01');　//退出ボタン 
goOutBtn.addEventListener('click', function() {
  if(fakeUserData.role  == 1){
    //まずホストかどうか判定し、ホストの場合、DBからホストが消される
    //※セッション情報をexpressで管理しておき、ユーザーネームと部屋番号の該当者箇所をDBから削除[今後実装必要]
  
    
    //ゲストのうち、DBで先頭[0]になった人にホストフラグ1がつく
    fakeUserData[0].role = 1;
  
    //画面01へ遷移する のをhtml側で実行

  }else{
  //ゲストの場合、DBからそのゲストが消される
    //※セッション情報をexpressで管理しておき、ユーザーネームと部屋番号の該当者箇所をDBから削除[今後実装必要]
  
  
    //画面01へ遷移する のをhtml側で実行

  }
});



//ルーム画面で、ホストの名前をみんなに表示

//つぎに、ホストのユーザー名をDBから取得して、貼り付け先に貼り付ける

window.addEventListener('pageshow', function() {

  const $doc = document;
  let $roomHostNameBase = $doc.getElementById('roomHostName');
  let tottekitaHostName = "もりら";
  $roomHostNameBase.innerHTML = tottekitaHostName + "のルーム";
  
}, false);

//つぎに、ルームのIDをDBから取得して、貼り付け先に貼り付ける
window.addEventListener('pageshow', function() {

  const $doc = document;
  let $roomIdBase = $doc.getElementById('roomId');
  let tottekitaRoomId = "000100"; //ベタガキでなくサーバ処理で名前を書き換える。
  $roomIdBase.innerHTML = "ID:" + tottekitaRoomId;
  
}, false);




//ルームにいる人全員の名前を表示
//DBの配列から要素を取得する

const memberLen = fakeUserData.length;

let n = 0;
  while(n < memberLen){
//    $result_02.textContent = quiz[randoms[n]].question + quiz[randoms[n]].correct + userAnswerData[n] + answerMatchList[n];
    
    // table要素を取得
    let tableElem = document.getElementById('memberTable');
    
    // tbody要素にtr要素（行）を最後に追加
    let trElem = tableElem.tBodies[0].insertRow(-1);
    
    // td要素を追加

    let i  = n;

    let img01 = document.createElement('img');
    img01.src = './items/04_room-assets/host_icon.png';

    let img02 = document.createElement('img');
    img02.src = './items/04_room-assets/kick_icon.png';

    const roleBunki = () => {
    //ここでユーザー名と王冠画像と、Kick画像を表に入れて、一括表示。
    
      if(fakeUserData[i].role == 1){
        trElem.insertCell(1).appendChild(img01); //王冠
      

      }else{
        trElem.insertCell(1).appendChild(img02);
      
    }
  
  };

    trElem.insertCell(0).appendChild(document.createTextNode(fakeUserData[i].userName));
    roleBunki();

    // trElem.insertCell(2).appendChild(img02);

    n++;
    
  }; 


  //解散ボタン
  let roomDismiss = document.getElementById('dismiss_btn');
  roomDismiss.addEventListener('click', function() {
    alert("部屋は粉々になった。"); 
    console.log(roomDismiss);
    });





  //はじめるボタン
  let roomEnter = document.getElementById('roomEnter_btn');
  roomEnter.addEventListener('click', function() {
    alert("次のステージへ"); 
    console.log(roomEnter);
    });