// インポート
const MODEL = require("../util/model");
const fireStore = require("./firestore");

//詳しい使い方は下記参照
//https://www.wakuwakubank.com/posts/723-firebase-firestore-query/
//https://firebase.google.com/docs/firestore/query-data/queries?hl=ja

exports.add_room = async function (request, response) {  
    try {
      const rooom = fireStore.collection(MODEL.ROOM.TABLE_NAME).doc(request.body.room_code);
      await rooom.set({name:request.body.room_code});
        // await rooom.set({name:request.body.room_name});
        response.send(true);
    } catch (err) {
    response.send(err.message);
  }
};