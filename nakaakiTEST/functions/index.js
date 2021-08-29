/* eslint-disable max-len */
// import * as api from 'Controllers';

const functions = require("firebase-functions");

//  firebase設定
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const fireStore = admin.firestore();

//  express設定
const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors({origin: true}));

// ここにルーティングを書いていく
app.get("/timestamp", (request, response, next) => {
  response.send(`${Date.now()}`);
});
app.get("/jikken", (request, response) => {
  fireStore.collection("test01").doc("sPCKM1QfNZLbBmcgomEV").get().then((doc) => {
    //  data()でドキュメントがとれる
    const document = doc.data();
    //  document.フィールド名でデータがとれる
    response.send(document);
  });
});
// app.get("/dir", (request, response) => {
//     response.send(api);
// });

exports.app = functions.https.onRequest(app);

//URIを先に固めておく

//必要な処理を全良描いていく。あとで各ページに分けていく。
