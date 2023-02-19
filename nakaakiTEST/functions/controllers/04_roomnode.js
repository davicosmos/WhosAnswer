// インポート
const MODEL = require("../util/model");
const admin = require("./firestore");
const fireStore = new admin.firestore.Firestore();

//詳しい使い方は下記参照
//https://www.wakuwakubank.com/posts/723-firebase-firestore-query/
//https://firebase.google.com/docs/firestore/query-data/queries?hl=ja

// サーバ側のために必要。index.jsと帳尻を揃える。こちらで書いたものをあちらへ反映する。

exports.getRoomInfo = async function (request, response) {  

  const querySnapshot = await fireStore.collection('active_user')
  .where('room_id', '==', 'room/'  + request.params.room_id)
  .get()
  console.log(querySnapshot.size)
  console.log(querySnapshot.empty)
  let resData = [];
  querySnapshot.forEach((postDoc) => {
    let member = postDoc.data();
    member['id'] = postDoc.id;
    resData.push(member);
  })
  response.send(resData);
  };

  exports.postDeleteRoom = async function (request, response) { 


    /*room_idでゲームを取得*/
    const querySnapshot = await fireStore.collection('game')
    .where('room_id', '==', 'room/'  + request.body.room_id)
    .get()

    /*game_idで選択肢を削除*/
    var deleteGameId = []
    querySnapshot.forEach((postDoc) => {

    deleteGameId.push('game/' + postDoc.id)
    })
    if(deleteGameId.length){
      const game_id_delete = await fireStore.collection('selection')
      .where('game_id', 'in', deleteGameId)
      .get()
      game_id_delete.forEach(async(postDoc) => {
        await postDoc.ref.delete()
        })
    }
    /*room_idでアクティブユーザーを削除*/
    const querySnapshot3 = await fireStore.collection('active_user')
    .where('room_id', '==', 'room/'  + request.body.room_id)
    .get()

    querySnapshot3.forEach(async(postDoc) => {
      await postDoc.ref.delete()
      })

    /*room_idでゲームを削除*/
    const querySnapshot4 = await fireStore.collection('game')
    .where('room_id', '==', 'room/'  + request.body.room_id)
    .get()

    querySnapshot4.forEach(async(postDoc) => {
      await postDoc.ref.delete()
      })

    /*room_idでルームを削除*/
    const userRef = fireStore.collection('room').doc(request.body.room_id)
    await userRef.delete()
    response.send()
    

}
exports.deleteMember = async function (request, response) {
  const userRef = fireStore.collection('active_user').doc(request.body.user_id);
  await userRef.delete();
  response.send(true);
}

