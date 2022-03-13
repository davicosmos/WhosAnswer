// インポート
const MODEL = require("../util/model");
const fireStore = require("./firestore");

//詳しい使い方は下記参照
//https://www.wakuwakubank.com/posts/723-firebase-firestore-query/
//https://firebase.google.com/docs/firestore/query-data/queries?hl=ja

exports.getRoomByCode = function (request, response) {  
  fireStore.collection(MODEL.ROOM.TABLE_NAME).doc(request.params.room_id).get().then((snapShot) => {
    let result = null;
    if (snapShot) {
      result = snapShot.get("name");
    };
    response.send(result);
  });
};
exports.enterRoom = async function (request, response) {
  const userRef = fireStore.collection('active_user').doc()
  await userRef.set({
    authority: '0',
    role: '0',
    room_id: 'room/'+ request.body.roomIdKensaku,
    user_name: request.body.guest_name,
  });
  response.send(true);

};