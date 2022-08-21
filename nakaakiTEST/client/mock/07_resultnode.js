/* 結果発表 */

//回答選択肢をDBからとってくる
//fakeDBのつもり。ベタガキした。あとで直す。 ！！見直し要。
const choiceDB = 
[
    {
        quizID: 1,
        choiceID: 1,
        answer:"きみといつも一緒さ",
        choiceUserId:"",
        correctFlag:"0"
    }, {
        quizID: 1,
        choiceID: 2,
        answer:"いつでもPS4さ",
        choiceUserId:["001","003"],
        correctFlag:"1"
    },{
        quizID: 1,
        choiceID: 3,
        answer:"サラマンダー",
        choiceUserId:["005","002"],
        correctFlag:"0"
    },
    {
        quizID: 1,
        choiceID: 4,
        answer:"あああ",
        choiceUserId:"",
        correctFlag:"0"
    }, {
        quizID: 1,
        choiceID: 5,
        answer:"いいい",
        choiceUserId:["004"],
        correctFlag:"0"
    },{
        quizID: 1,
        choiceID: 6,
        answer:"ううう",
        choiceUserId:["006"],
        correctFlag:"0"
    }

  ];


//fakeDBのつもり。ベタガキした。あとで直す。　！！見直し要。
const fakeUserData = 
[
   {userName:"もりら", role:1, assign:0 , userId:"001" , roomId:"000100"},
   {userName:"くろき", role:0, assign:1 , userId:"002" , roomId:"000100"},
   {userName:"あらい", role:0, assign:0 , userId:"003" , roomId:"000100"},
   {userName:"ナカムラアア", role:0, assign:0 , userId:"004" , roomId:"000100"},
   {userName:"デイビス", role:0, assign:0 , userId:"005" , roomId:"000100"},
   {userName:"キャベツ太朗", role:0, assign:0 , userId:"006" , roomId:"000100"},
 
];
//   リストが取れているか確認。
console.log(fakeUserData);

//DBのなかに何人のデータがあるかの長さを取得　！！見直し要。使ってないかも。
let DbUserNumber = fakeUserData.length;




/*このページが表示される時に、誰がどの選択肢を選んだかを示す*/

//DBの情報として、以下のどちらかの情報を引っ張ってきて表示する。1.人にどの選択肢番号を選んだかの情報、2.選択肢ベースで誰に選ばれたかの名前の情報




//ユーザーIDをもとに、名前をDBから取得する
function resultArray(array) {
    for(let i = (choiceDB.length - 1); 0 < i; i--){

        /*取得したIDをもとにユーザーの名前に変換する。*/ //いらないかも
        let choiceUserNameHyouji = choiceDB[i].choiceUserId;
        let henngesurunamae;
        if(choiceUserNameHyouji === fakeUserData[i].userId){
            henngesurunamae = fakeUserData[i].userName
            console.log(henngesurunamae);
        };
        
    }
    // let returnCheck = array.map((obj) => obj.finalAnswer)
    let result = '<ol id = "resultList" >';

    /* DBから取得した名前を各列に */
    let i = 0;
    for(const finalAnswer of array){

    result = result+ '<li class="list_test"> ' + finalAnswer.answer +  choiceDB[i].choiceUserId +  fakeUserData[i].userName + choiceDB[i].correctFlag + ' <li/>'
    i++;
    };

    result = result + '</ol>';
    return result;
  };





// /* 誰がどの選択肢を選んだかのリストを画面に表示 */
// const $doc = document;
// let $resultList = $doc.getElementById('resultList');
// $resultList.innerHTML =  resultArray(choiceDB);

window.addEventListener('pageshow', function() {
/* gameIDでSelectionを取得 */
const game_id = Cookies.get('game_id');

axios.get(API_URL + RESULT_NODE.getResult + '/' + game_id)
    .then((res) => {
        console.log(res)
 /* IsAnswerがtureのSelectionのtextを表示 */
 let answer_select=""

res.data.forEach(element => {
    if(element.is_answer){
        answer_select = element.text
    }
});
let result_happyou2 = document.getElementById("result_happyou2")
result_happyou2.innerHTML = answer_select

/* SelectionのtextとSelectUsernameをList表示 */

/*　06画面に全ての回答をリストで表示するべく、DBから回答を取得　*/

  //回答リストをランダムな順番に並べ替え　※このarrayResultの塊を削除すると3の壁まで通る。4の壁に進められない。
  function arrayResult(array) {
    let result = ""

    for(const answer of array){

      result = result + '<li> <class="radiobutton" name ="answer"   id = "' + answer.text + '</label> </li>' //ここが怪しい

      // count++
    };

    // result = result + '</ol>';
    return result;
  };

let $resultList = document.getElementById('resultList');

console.log("1の壁")

  var ol = document.createElement('ol');

  console.log("2の壁")

  ol.innerHTML = arrayResult(res.data.selections);

  console.log("3の壁")

  $resultList.appendChild(ol);

      console.log("4の壁")
    });

}, false);


