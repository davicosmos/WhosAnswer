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



//ホスト名をもとにhtmlの「お友達がホスト」を書き換え





//ホスト専用の機能




//ゲスト専用の機能