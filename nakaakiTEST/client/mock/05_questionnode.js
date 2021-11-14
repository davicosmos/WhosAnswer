
/* 出題画面 */

//質問内容をDBからとってくる
//fakeDBのつもり。ベタガキした。あとで直す。　見直し要！！
const quiz = 
[
    {
        quizID: 1,
        question: '夢が一つだけ叶うとしたら、何をお願いしますか',
    }, {
        quizID: 2,
        question: '10年後のあなたは何をしていると思いますか',
    },{
        quizID: 3,
        question: '自分を動物に例えると何ですか',
    }

  ];
  //リストが取れているか確認。
  console.log(quiz[1].question);


//つぎに、出題するクイズをDBから取得して、貼り付け先に貼り付ける　見直し要！！

window.addEventListener('pageshow', function() {

    //ランダム数字を生成
    //1.ランダム数字の上限を指定(0〜指定した数字の範囲)
    let maxNumRange = 2;
    //2.ランダムな数字を生成
    let randomNum = parseInt(Math.random() * maxNumRange) + 1;

    //3.ランダム生成された数字の検証
    console.log(randomNum);

    const $doc = document;
    let $quizSyutudai = $doc.getElementById('quizSyutsudai');
    $quizSyutudai.innerHTML = quiz[randomNum].question;

    
  }, false);
  

//回答の入力ができているかを確認
let tottekitaAnswerInput = document.getElementById('answerInput');

let answerInputCheckBtn = document.getElementById('answerInputCheck');

answerInputCheckBtn.addEventListener('click', function() {
alert("あなたが入力した回答はこちらです。" + tottekitaAnswerInput.value);
console.log(tottekitaAnswerInput.value);
});
