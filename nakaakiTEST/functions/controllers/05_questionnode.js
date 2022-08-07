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
    console.log("確認要のgame取得" + querySnapshot.size)
    console.log("確認要のgame取得" + querySnapshot.empty)

    //gameが作成されていない(自分が一番乗りだった)場合はgameを作成する
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
    //ゲームがあるはずなので、取得する
    const querySnapshot2 = await fireStore.collection('game')
    .where('room_id', '==', 'room/'  + request.params.room_id)
    .get()
    console.log("あるはずのgameの本取得" + querySnapshot2.size)
    console.log("あるはずのgameの本取得" + querySnapshot2.empty)

    //gameに紐づけられたクイズのテキストを取得する
    let quizID_kakou = querySnapshot2.docs[0].get("quiz_id");
    let ret = quizID_kakou.replace("quiz/", "");
    const querySnapshot3 = await fireStore.collection('quiz').doc(ret).get()


    let resData = { game: querySnapshot2.docs.map(doc => doc.id), quiz: querySnapshot3.data() };

    console.log("レスポンス" + resData);
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
console.log(request.body.game_id+"リクエストボディゲームIDなのだ")

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


  console.log(answerCount+ "ですわよ")
  console.log(userCount+ "でやんす")

  if(answerCount >= userCount){
    //selectionをgame_idで検索し、ランダムで1つのidを取得する。
    let min = 0 ;
    let max = answerCount - 1 ;

    let b = Math.floor( Math.random() * (max + 1 - min) ) + min ;

    let selection_id = querySnapshot4.docs[b].id;
    console.log(selection_id)
    
    //idを指定し、is_answerをtrueにする。
    const is_ansewrChange = fireStore.collection('selection').doc(selection_id)
    await is_ansewrChange.update({
      is_answer: true
  })

  }

  }


  exports.getTsudukeruBtn = async function (request, response) {  

    //getからidをひろう
    let getGame2 = request.params.game_id



    //true falseから全員終わっているかを返す
    //1.game collectionをgame_idで検索し,roomidを取得
let game = fireStore.collection(MODEL.GAME.TABLE_NAME).doc(getGame2)
let snapShot = await game.get()
console.log(getGame2)

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


  console.log(answerCount+ "ですわよ")
  console.log(userCount+ "でやんす")

  if(answerCount >= userCount){
    //selectionをgame_idで検索し、ランダムで1つのidを取得する。
 
    response.send(true);

  }else{

    response.send(false);
  
  }
      };