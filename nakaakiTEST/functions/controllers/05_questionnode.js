// インポート
const MODEL = require("../util/model");
const admin = require("./firestore");
const fireStore = new admin.firestore.Firestore();

//詳しい使い方は下記参照
//https://www.wakuwakubank.com/posts/723-firebase-firestore-query/
//https://firebase.google.com/docs/firestore/query-data/queries?hl=ja

// サーバ側のために必要。index.jsと帳尻を揃える。こちらで書いたものをあちらへ反映する。

exports.getGame = async function (request, response) {  

  //自分の部屋のgameを取得する。
    const querySnapshot = await fireStore.collection('game')
    .where('room_id', '==', 'room/'  + request.params.room_id)
    .get()

    //gameが作成されていない(自分が一番乗りだった)場合はgameを作成する
    if(querySnapshot.size <= 0){
        const userRef = fireStore.collection('game').doc()

        let min = 1 ;
        let max = 68 ;

        let a = Math.floor( Math.random() * (max + 1 - min) ) + min ;

        await userRef.set({
          room_id: 'room/'+ request.params.room_id,
          quiz_id: 'quiz/' + a,
          done_quiz_id:[],
          need_refresh:false
        });
    };
    //ゲームがあるはずなので、取得する
    let querySnapshot2 = await fireStore.collection('game')
    .where('room_id', '==', 'room/'  + request.params.room_id)
    .get()
    /* クイズIDのリフレッシュがいる場合はリフレッシュする */
    if(querySnapshot2.docs[0].get("need_refresh")){
          //1.game collectionをgame_idで検索し,roomidを取得
    let game = fireStore.collection(MODEL.GAME.TABLE_NAME).doc(querySnapshot2.docs[0].id)
    let snapShot = await game.get()
/* 出題済みクイズ番号を用意 */
   let doneQuizId = snapShot.get("done_quiz_id");
   let quizId = snapShot.get("quiz_id");
   quizId = quizId.replace("quiz/", "");
   doneQuizId.push(Number(quizId))
/* 次のクイズ番号を選定 */
let min = 1 ;
let max = 68 ;

var arr = [];
for(var i = min; i <= max; ++i) {
    if(doneQuizId.indexOf(i) === -1) arr.push(i);
}

var nextQuizId = "quiz/"+arr[Math.floor( Math.random() * arr.length )];
/* ゲームのクイズ番号を更新 */
  const userRef = fireStore.collection('game').doc(querySnapshot2.docs[0].id)
  await userRef.update({
    done_quiz_id: doneQuizId,
    quiz_id: nextQuizId,
    need_refresh:false
  })

    }
    //gameに紐づけられたクイズのテキストを取得する
    querySnapshot2 = await fireStore.collection('game')
    .where('room_id', '==', 'room/'  + request.params.room_id)
    .get()
    let quizID_kakou = querySnapshot2.docs[0].get("quiz_id");
    let ret = quizID_kakou.replace("quiz/", "");
    const querySnapshot3 = await fireStore.collection('quiz').doc(ret).get()
    /* 選択肢が作成されていたら削除する */
    let gameID =querySnapshot2.docs[0].id;

    /* ゲームIDで選択肢IDを取得 */
    const selectionQuerySnapshot4 = await fireStore.collection('selection')
    .where('game_id', '==', 'game/'  + gameID)
    .get()
    if(selectionQuerySnapshot4.size > 0){

    /*選択肢IDで選択肢を削除*/
    selectionQuerySnapshot4.forEach((selection) => {
    selection.ref.delete()
        })

    }

  let quiz_text = querySnapshot3.get('text')
  
    if (quiz_text.includes('RANDOM_NAME')) {
      // roomのUserを取得
      const roomUsers = await fireStore.collection('active_user')
      .where('room_id', '==', querySnapshot2.docs[0].get("room_id"))
        .get()
      const userIndex = Math.floor(Math.random() * (roomUsers.docs.length));
      const user = roomUsers.docs[userIndex]
      quiz_text =  quiz_text.replace("RANDOM_NAME", user.get('user_name'))
     }
  
  let resData = { game: querySnapshot2.docs.map(doc => doc.id), quiz: quiz_text };
  
    response.send(resData);
   
    };


    exports.postAnswer = async function (request, response) {  

      //入力フィールドに記載されたテキストをSelectionのDBへ挿入する。
            const answerAnswer = fireStore.collection('selection').doc()
            await answerAnswer.set({
              game_id: 'game/'+ request.body.game_id ,
              is_answer: false ,
             text: request.body.text ,
             user_id: 'active_user/' + request.body.user_id

            })

//1.game collectionをgame_idで検索し,roomidを取得　※いままで作ってきたソースをもとに、これらをコツコツ作っていく。
let game = fireStore.collection(MODEL.GAME.TABLE_NAME).doc(request.body.game_id)
let snapShot = await game.get()

   let roomId = snapShot.get("room_id");



  //2.active_userをroom_idで検索し、roomの人数を取得
  const querySnapshot3 = await fireStore.collection("active_user")
  .where("room_id", "==", roomId)
  .get()

  let userCount = querySnapshot3.docs.length;

  //3.selectionをgame idで検索し、回答済みの人数を取得
  const querySnapshot4 = await fireStore.collection('selection')
  .where('game_id', '==', 'game/'  + request.body.game_id)
   .get()

  let answerCount = querySnapshot4.docs.length;

  if(answerCount >= userCount){
    //selectionをgame_idで検索し、ランダムで1つのidを取得する。
    let min = 0 ;
    let max = answerCount - 1 ;

    let b = Math.floor( Math.random() * (max + 1 - min) ) + min ;

    let selection_id = querySnapshot4.docs[b].id;
    
    //idを指定し、is_answerをtrueにする。
    const is_ansewrChange = fireStore.collection('selection').doc(selection_id)
    await is_ansewrChange.update({
      is_answer: true
  })

  }
  response.send(true);
  }


  exports.getTsudukeruBtn = async function (request, response) {  

    //getからidをひろう
    let getGame2 = request.params.game_id



    //true falseから全員終わっているかを返す
    //1.game collectionをgame_idで検索し,roomidを取得
let game = fireStore.collection(MODEL.GAME.TABLE_NAME).doc(getGame2)
let snapShot = await game.get()

   let roomId = snapShot.get("room_id");



  //2.active_userをroom_idで検索し、roomの人数を取得
  const querySnapshot3 = await fireStore.collection("active_user")
  .where("room_id", "==", roomId)
  .get()

  let userCount = querySnapshot3.docs.length;

  //3.selectionをgame idで検索し、回答済みの人数を取得
  const querySnapshot4 = await fireStore.collection('selection')
  .where('game_id', '==', 'game/'  + getGame2)
   .get()

  let answerCount = querySnapshot4.docs.length;

  if(answerCount >= userCount){
    //selectionをgame_idで検索し、ランダムで1つのidを取得する。
    const userRef = fireStore.collection('game').doc(request.params.game_id)
  await userRef.update({
  
    need_refresh:true
  })
    response.send(true);

  }else{

    response.send(false);
  
  }
      };