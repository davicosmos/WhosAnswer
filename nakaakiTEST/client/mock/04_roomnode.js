import {tottekitaRoomID} from "./03_guestnode";
import {fakeUserData} from "./fakeDB";


//ホストとゲストで共通の機能

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