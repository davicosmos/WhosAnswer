let clicked = false

/* 出題画面 */

//質問内容をDBからとってくる
//fakeDBのつもり。ベタガキした。あとで直す。　見直し要！！
// const quiz = 
// [
//     {
//         quizID: 1,
//         question: '夢が一つだけ叶うとしたら、何をお願いしますか',
//     }, {
//         quizID: 2,
//         question: 'あばばばばばばばばばばばばばばばばばばばとはなんですか？10年後のあなたは何をしていると思いますか',
//     },{
//         quizID: 3,
//         question: '自分を動物に例えると何ですか',
//     },{
//         quizID: 4,
//         question: 'あばばばばばばばばばばばばばばばばばばばとはなんですか？',
//   }

//   ];
//   //リストが取れているか確認。
//   console.log(quiz[1].question);



//つぎに、出題するクイズをDBから取得して、貼り付け先に貼り付ける　見直し要！！

window.addEventListener('pageshow', function() {

    //クッキーからroom_idを取得
    const room_id = Cookies.get('room_id');

    axios.get(API_URL + QUESTION_NODE.getGame + '/' + room_id)
    .then((res) => {

// const memberLen = res.data.length;
console.log(res.data);
Cookies.set('game_id', res.data.game[0]);

// 質問内容を書き換え
let quiz_disp = document.getElementById('quizSyutsudai');
quiz_disp.innerHTML = res.data.quiz.text;

// res.data.sort(function(first, second){
// if (first.authority > second.authority){
// return -1;
// }else{
// return 0;
// }
// });
    });




    // //ランダム数字を生成
    // //1.ランダム数字の上限を指定(0〜指定した数字の範囲)
    // let maxNumRange = 2;
    // //2.ランダムな数字を生成
    // let randomNum = parseInt(Math.random() * maxNumRange) + 1;

    // //3.ランダム生成された数字の検証
    // console.log(randomNum);

    // const $doc = document;
    // let $quizSyutudai = $doc.getElementById('quizSyutsudai');
    // $quizSyutudai.innerHTML = quiz[randomNum].question;

    
  }, false);
  

//回答の入力ができているかを確認
let tottekitaAnswerInput = document.getElementById('answerInput');

let answerInputCheckBtn = document.getElementById('answerInputCheck');

answerInputCheckBtn.addEventListener('click', function() {

    document.getElementById("answerInputCheck_div").hidden = true;
    document.getElementById("answerInputCheck_div_hidden").hidden = false;

alert("あなたが入力した回答はこちらです。" + tottekitaAnswerInput.value);
console.log(tottekitaAnswerInput.value);
});



//回答の入力ができているかを確認
answerInputCheckBtn.addEventListener('click', function() {

    // クッキーからユーザーIDと部屋IDを取得
    const user_id = Cookies.get('user_id');
    const game_id = Cookies.get('game_id');

              
    console.log(user_id);
    console.log(game_id);
    console.log(tottekitaAnswerInput.value);


  // 回答内容を送信

  if (!clicked) {
    clicked = true
    axios.post(API_URL + QUESTION_NODE.postAnswer,{text: tottekitaAnswerInput.value, user_id:user_id , game_id:game_id })
    .then((res) => {
        if (res.data) {
            console.log(res.data);

        }
    }).finally(() => {
      clicked = false;
    });;;
        
  }

});

//全員が回答を入力したかを確認
let tsudukeruBtn = document.getElementById('answerInputCheck_div_hidden');

tsudukeruBtn.addEventListener('click', function() {

 const game_id = Cookies.get('game_id');

 if (!clicked) {
    clicked = true
    checkAPI(game_id)
 }

});

const checkAPI = function(game_id){
  axios.get(API_URL + QUESTION_NODE.getTsudukeruBtn + '/' + game_id)
  .then((res) => {
 
     if(res.data){
         //ルーム待機画面への移動処理を作る
         location = hosting_URL + '/mock/06_choice.html';
 
     }else{
      checkAPI(game_id);
     }
 
 console.log(res.data)
  }).finally(() => {
      clicked = false;
    });;;;
}