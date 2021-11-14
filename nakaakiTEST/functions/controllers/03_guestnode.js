// インポート
const MODEL = require("../util/model");
const fireStore = require("./firestore");

//詳しい使い方は下記参照
//https://www.wakuwakubank.com/posts/723-firebase-firestore-query/
//https://firebase.google.com/docs/firestore/query-data/queries?hl=ja

exports.getRoomByCode = function (request, response) {
  fireStore.collection(MODEL.ROOM.TABLE_NAME).doc("morira_room").get().then((snapShot) => {
    let result = null;
    if (snapShot) {
      result = snapShot.get("name");
    };
    response.send(result);
  });
};
exports.enterRoom = function (request, response) {
  fireStore.collection(MODEL.QUIZ.TABLE_NAME).add({
    text: '追加してみたよ'
  }).then((docRef) => {
    response.send("Document written with ID: " + docRef.id);
  });
};