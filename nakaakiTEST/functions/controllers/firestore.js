//  firestoreのクラスをインポートして、コントローラーで使えるようにする
const admin = require("firebase-admin");
const serviceAccount = require("../whosanswer-firebase-adminsdk-avvq9-346b289d62.json");

// admin.initializeApp();
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://whosanswer.firebaseio.com'
});
const fireStore = admin.firestore();

//controllerの中身をまとめてエクスポートする(上の階層のindex.jsで使う)
module.exports = fireStore;