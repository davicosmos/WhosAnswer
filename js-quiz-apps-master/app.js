let script = document.createElement('script'); //変数名は適当なものにでも
script.src = "quizlist.js"; //ファイルパス
document.head.appendChild(script); //<head>に生成

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;


//HTMLに入力された文字を取得・コンソールに表示
const getAnswerText = () => {
  const answerText = document.getElementById("inputAnswerTextId").value;
  console.log("入力されたテキストは、「" + answerText + "」だぜ！。");
}
console.log("この文章はテキスト入力タイミング関係なく出力するぜ！");


//1.ランダム数字の上限を指定(0〜指定した数字の範囲)
let maxNumRange = quizLen;



//2.ランダムな数字を生成
//let randomNum = parseInt(Math.random() * maxNumRange) + 1;

/** 重複チェック用配列 */
let randoms = [];
/** 最小値と最大値 */
let min = 0, max = quizLen-1;
 
/** 重複チェックしながら乱数作成 */
for(i = min; i <= max; i++){
  while(true){
    let tmp = randomNum(min, max);
    if(!randoms.includes(tmp)){
      randoms.push(tmp);
      break;
    }
  }
}
 
/** min以上max以下の整数値の乱数を返す */
function randomNum(min, max){
  return Math.floor( Math.random() * (max - min + 1)) + min;
}



/* for(let i = 0; i < randoms.length; i++){
  randoms[i];
  console.log(randoms[i]);
  };
 */
console.log(randoms);
randomNum();


//1問目のクイズの配列番号
let syutudaiJun = 0;
let quizCount = randoms[syutudaiJun];
//クイズの正解数
let score = 0;

//html上の出題枠に記載されているテキストをクイズ問題文で上書く(=出題する)
const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

//！！！！！！！！！！75行目あたりが怪しい。次の問題を出題せず、同じ問題が7回繰り返される。1問目をランダムにすることはできた。7問出題してクイズ終了するところもできている。あとはクイズが切り替わるといいな。
//クイズ数があるだけ出題
const goToNext = () => {
  syutudaiJun++;
  if(syutudaiJun < quizLen){
    init(quizCount = randoms[syutudaiJun]);
  } else {
    $window.alert('クイズ終了！');
    showEnd();
  }
};




const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}
