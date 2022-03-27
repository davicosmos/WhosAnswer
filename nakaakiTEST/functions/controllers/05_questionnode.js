// インポート
const MODEL = require("../util/model");
const fireStore = require("./firestore");

//詳しい使い方は下記参照
//https://www.wakuwakubank.com/posts/723-firebase-firestore-query/
//https://firebase.google.com/docs/firestore/query-data/queries?hl=ja

// サーバ側のために必要。index.jsと帳尻を揃える。こちらで書いたものをあちらへ反映する。

exports.getGame = async function (request, response) {  

    const querySnapshot = await fireStore.collection('game')
    .where('room_id', '==', 'room/'  + request.params.room_id)
    .get()
    console.log(querySnapshot.size)
    console.log(querySnapshot.empty)

    if(querySnapshot.size <= 0){
        const userRef = fireStore.collection('game').doc()

        let min = 1 ;
        let max = 5 ;

        let a = Math.floor( Math.random() * (max + 1 - min) ) + min ;

        await userRef.set({
          room_id: 'room/'+ request.params.room_id,
          quiz_id: 'quiz/' + a,
          done_quiz_id:[]
        });
    };

    const querySnapshot2 = await fireStore.collection('game')
    .where('room_id', '==', 'room/'  + request.params.room_id)
    .get()
    console.log(querySnapshot2.size)
    console.log(querySnapshot2.empty)

    let quizID_kakou = querySnapshot2.get("quiz_id");
    let ret = quizID_kakou.replace("/quiz/", "");
    const querySnapshot3 = await fireStore.collection('quiz').doc(ret).get()


    let resData = { game: querySnapshot2, quiz: querySnapshot3 };

    console.log(resData);
    response.send(resData);
   
    };