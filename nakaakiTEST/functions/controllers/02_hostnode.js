// インポート
const MODEL = require("../util/model");
const admin = require("./firestore");
const fireStore = new admin.firestore.Firestore();

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
        const userRef = await fireStore.collection('active_user').add({
          authority: '1',
          role: '0',
          room_id: 'room/'+ mojiretsu,
          user_name: request.body.owner_name,
        });

  const userDoc = await userRef.get()
  let userData = userDoc.data();
  userData["id"] = userDoc.id;

  console.log(userData);

  response.send(userData);


        //次の画面へ02で作成したルームIDを渡す処理。
//        response.send(mojiretsu);
    } catch (err) {
    response.send(err.message);
  }
};

