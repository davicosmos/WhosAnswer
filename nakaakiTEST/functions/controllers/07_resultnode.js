// インポート
const { user } = require("firebase-functions/lib/providers/auth");
const MODEL = require("../util/model");
const admin = require("./firestore");
const fireStore = new admin.firestore.Firestore();

//詳しい使い方は下記参照
//https://www.wakuwakubank.com/posts/723-firebase-firestore-query/
//https://firebase.google.com/docs/firestore/query-data/queries?hl=ja


exports.getResult = async function (request, response) {  

//SelectionをGameIDで検索
const querySnapshot4 = await fireStore.collection('selection')
.where('game_id', '==', 'game/'  + request.params.game_id)
 .get()

let selections = [];
querySnapshot4.forEach((postDoc) => {

selections.push({
    text:postDoc.get("text"),
    is_answer:postDoc.get("is_answer"),
    select_user_name:postDoc.get("select_user_name"),
    

})
})


response.send(selections)
    };

exports.postResult = async function (request, response) {  
/* 出題済みクイズ番号を追記 */

    //1.game collectionをgame_idで検索し,roomidを取得
    let game = fireStore.collection(MODEL.GAME.TABLE_NAME).doc(request.body.game_id)
    let snapShot = await game.get()
/* 出題済みクイズ番号を用意 */
   let doneQuizId = snapShot.get("done_quiz_id");
   let quizId = snapShot.get("quiz_id");
   quizId = quizId.replace("quiz/", "");
   doneQuizId.push(Number(quizId))
/* 次のクイズ番号を選定 */
let min = 1 ;
let max = 5 ;

var arr = [];
for(var i = min; i <= max; ++i) {
    if(doneQuizId.indexOf(i) === -1) arr.push(i);
}

var nextQuizId = "quiz/"+arr[Math.floor( Math.random() * arr.length )];
/* ゲームのクイズ番号を更新 */
  const userRef = fireStore.collection('game').doc(request.body.game_id)
  await userRef.update({
    done_quiz_id: doneQuizId,
    quiz_id: nextQuizId
   
  })

        response.send()
            };