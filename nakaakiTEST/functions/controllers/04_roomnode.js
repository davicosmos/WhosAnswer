// インポート
const MODEL = require("../util/model");
const fireStore = require("./firestore");

//詳しい使い方は下記参照
//https://www.wakuwakubank.com/posts/723-firebase-firestore-query/
//https://firebase.google.com/docs/firestore/query-data/queries?hl=ja

// サーバ側のために必要。index.jsと帳尻を揃える。こちらで書いたものをあちらへ反映する。

exports.getRoomInfo = function (request, response) {  
  //データをとりに行く
  fireStore.collection(MODEL.ROOM.TABLE_NAME).doc(request.params.room_id).get().then((snapShot) => {

    //データを整理整頓
      let result = null;
      if (snapShot) {
        result = snapShot.get("name");
      };
      
      //データを返す。レスポンスする。
      response.send(result);
    });
  };