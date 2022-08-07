// インポート
const { user } = require("firebase-functions/lib/providers/auth");
const MODEL = require("../util/model");
const admin = require("./firestore");
const fireStore = new admin.firestore.Firestore();

//詳しい使い方は下記参照
//https://www.wakuwakubank.com/posts/723-firebase-firestore-query/
//https://firebase.google.com/docs/firestore/query-data/queries?hl=ja

// サーバ側のために必要。index.jsと帳尻を揃える。こちらで書いたものをあちらへ反映する。

exports.getSelection = async function (request, response) {  
    console.log("疎通チェック丸")
//SelectionをGameIDで検索
const querySnapshot4 = await fireStore.collection('selection')
.where('game_id', '==', 'game/'  + request.params.game_id)
 .get()

let selections = [];
querySnapshot4.forEach((postDoc) => {
selections.push({
    text:postDoc.get("text"),
    selectionID:postDoc.id
})
})
console.log(selections)

let answerUserId;
    console.log("クエリ丸" + request.params.game_id)
    querySnapshot4.forEach((postDoc) => {
    if(postDoc.get("is_answer")){
        answerUserId = postDoc.get("user_id")

        answerUserId = answerUserId.replace("active_user/", "");

    }
    })
    console.log(answerUserId)

//アクティブユーザーをIsAnswerがTrueのSelectionのUserIDで取得
const querySnapshot3 = await fireStore.collection(MODEL.ACTIVE_USER.TABLE_NAME).doc(answerUserId).get();
console.log("クエスナ３"+querySnapshot3)
let username = querySnapshot3.get("user_name")
console.log(username)

response.send({
    username:username,
    selections:selections

})
    };



exports.sendSelection = async function (request, response) {  
//セレクションにユーザーネームを追加
console.log("ここだよーん1")

const querySnapshot3 = await fireStore.collection(MODEL.ACTIVE_USER.TABLE_NAME).doc(request.body.user_id).get();

let username = querySnapshot3.get("user_name")

const userRef = fireStore.collection('selection').doc(request.body.selectionID)
console.log(userRef)
console.log("ここだよーん2")
 userRef.update({

    // select_user_name: admin.firestore.FieldValue.arrayUnion(username)
    user_id: username

})


    }
