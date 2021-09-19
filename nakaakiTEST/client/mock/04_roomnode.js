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

let goOutBtn = document.getElementById('goOut01');
 
goOutBtn.addEventListener('click', function() {


  if(fakeUserData.role  == 1){
    //まずホストかどうか判定し、ホストの場合、DBからホストが消される
    //※セッション情報をexpressで管理しておき、ユーザーネームと部屋番号の該当者箇所をDBから削除
  
  
    //ゲストのうち、DBで先頭[0]になった人にホストフラグ1がつく
    fakeUserData[0].role = 1;
  
    //画面01へ遷移する
  
  }else{
  //ゲストの場合、DBからそのゲストが消される
    //※セッション情報をexpressで管理しておき、ユーザーネームと部屋番号の該当者箇所をDBから削除
  
  
    //画面01へ遷移する

  }
});



//ルーム画面で、ホストの名前をみんなに表示

//まず、貼り付け先となるhtml内の箇所を指定する
const $doc = document;
const $roomHostNameBase = $doc.getElementById('roomHostName');
let kokodetukauRoomID = tottekitaRoomID;

//つぎに、ホストのユーザー名をDBから取得して、貼り付け先に貼り付ける
const init = () => {
    //どの部屋のホストなのかを特定し、そのホストのユーザー名を取得する
    if(kokodetukauRoomID == fakeUserData.roomId && fakeUserData.role == 1){
        console.log(fakeUserData.userName);
             } ;


    $roomHostNameBase.textContent = fakeUserData[role == 1].question;
  };

let roomHostNameHyouji = document.getElementById('roomHostName');

roomHostNameHyouji.addEventListener('onpageshow', function() {
alert("ゲスト名を取得しました。取得した名前はこちらです。" + tottekitaGuestUserName.value);
console.log(tottekitaGuestUserName.value);
});



//ホスト専用の機能




//ゲスト専用の機能