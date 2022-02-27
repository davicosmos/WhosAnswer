// インポート
const MODEL = require("../util/model");
const fireStore = require("./firestore");

//詳しい使い方は下記参照
//https://www.wakuwakubank.com/posts/723-firebase-firestore-query/
//https://firebase.google.com/docs/firestore/query-data/queries?hl=ja

exports.add_room = async function (request, response) {
  const mojiretsu = new Date().getTime().toString(16); //ルームIDを自動で作成するために入れている。被らない数字を作るためにこの書き方。
    try {
      //ルームのDBに部屋のデータを新規作成
      const rooom = fireStore.collection(MODEL.ROOM.TABLE_NAME).doc(mojiretsu);
      await rooom.set({name:request.body.owner_name});
        // await rooom.set({name:request.body.room_name});

        //アクティブユーザーのDBにホストのデータを新規作成
        const userRef = fireStore.collection('active_user').doc()
        await userRef.set({
          authority: '1',
          role: '0',
          room_id: 'room/'+ mojiretsu,
          user_name: request.body.owner_name,
        })

        //次の画面へ02で作成したルームIDを渡す処理。
        response.send(mojiretsu);
    } catch (err) {
    response.send(err.message);
  }
};

