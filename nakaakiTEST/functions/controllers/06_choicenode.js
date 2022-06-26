// インポート
const MODEL = require("../util/model");
const fireStore = require("./firestore");

//詳しい使い方は下記参照
//https://www.wakuwakubank.com/posts/723-firebase-firestore-query/
//https://firebase.google.com/docs/firestore/query-data/queries?hl=ja

// サーバ側のために必要。index.jsと帳尻を揃える。こちらで書いたものをあちらへ反映する。

exports.getSelection = async function (request, response) {  
    console.log("疎通チェック丸")
//SelectionをGameIDで検索
const querySnapshot4 = await fireStore.collection('selection')
.where('game_id', '==', 'game/'  + request.body.game_id)
 .get()


let answerUserId;

for (const doc in querySnapshot4.docs) {
    console.log(doc.data())
}


//アクティブユーザーをIsAnswerがTrueのSelectionのUserIDで取得


    };
