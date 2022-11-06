/* eslint-disable max-len */

// サーバ側のために必要。
// サーバ側へとどく、「機能へアクセスしたいかのリクエスト」がきたときにどう捌くかを決める。
//functions下の、controllers下の、各ページ向けのファイルの中の関数名と帳尻を合わせる。あっちで書いたものに揃える（）


// コンロトーラーのインポート(作ったらコメント解放)
// const top = require('./controllers/01_top');
const hostnode = require('./controllers/02_hostnode');
const guestnode = require('./controllers/03_guestnode');
const roomnode = require('./controllers/04_roomnode');
const questionnode = require('./controllers/05_questionnode');
const choicenode = require('./controllers/06_choicenode');
const resultnode = require('./controllers/07_resultnode');

// functions有効化
const functions = require("firebase-functions");

//  express設定
const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors({origin: true}));

// ルーティング
// 01_top
//

// 02_hostnode
app.post("/add_room", hostnode.add_room);

// 03_guestnode.js
app.get("/get_room_by_code/:room_id", guestnode.getRoomByCode);
app.post("/enter_room", guestnode.enterRoom);

// 04_roomnode
app.get("/room_info/:room_id", roomnode.getRoomInfo);

// 05_questionnode
app.get("/getGame/:room_id", questionnode.getGame); //一人目ならgameレコードを作成しそれいがいであればgameのレコードを取得するので何人めか確認
app.post("/post_answer", questionnode.postAnswer);　//入力した回答をDBへ挿入する。
app.get("/getTsudukeruBtn/:game_id", questionnode.getTsudukeruBtn); //続けるボタンの動作（APIとしては、全員が回答完了かの状態を返す）

// 06_choicenode
app.get("/getSelection/:game_id", choicenode.getSelection); //全員の回答入力内容を取得
app.post("/sendSelection", choicenode.sendSelection);　//入力した回答をDBへ挿入する。


// 07_resultnode
app.get("/getResult/:game_id", resultnode.getResult); //全員の回答入力内容を取得
app.post("/postResult", resultnode.postResult);　//クイズをリセットしてルーム待機画面へ戻る。
app.post("/postQuit", resultnode.postQuit);　//ルームを離脱する。


exports.app = functions.https.onRequest(app);