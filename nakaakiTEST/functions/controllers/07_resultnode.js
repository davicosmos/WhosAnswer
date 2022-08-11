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