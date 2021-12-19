/* 結果発表 */

//回答選択肢をDBからとってくる
//fakeDBのつもり。ベタガキした。あとで直す。 ！！見直し要。
const choiceDB = 
[
    {
        quizID: 1,
        choiceID: 1,
        answer:"きみといつも一緒さ",
        choiceUserId:""
    }, {
        quizID: 1,
        choiceID: 2,
        answer:"いつでもPS4さ",
        choiceUserId:["001","003"]
    },{
        quizID: 1,
        choiceID: 3,
        answer:"サラマンダー",
        choiceUserId:["005","002"]
    },
    {
        quizID: 1,
        choiceID: 4,
        answer:"あああ",
        choiceUserId:""
    }, {
        quizID: 1,
        choiceID: 5,
        answer:"いいい",
        choiceUserId:["004"]
    },{
        quizID: 1,
        choiceID: 6,
        answer:"ううう",
        choiceUserId:["006"]
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

    result = result+ '<li class="list_test"> ' + finalAnswer.answer +  choiceDB[i].choiceUserId +  fakeUserData[i].userName +  ' <li/>'
    i++;
    };

    result = result + '</ol>';
    return result;
  };


/* 誰がどの選択肢を選んだかのリストを画面に表示 */
const $doc = document;
let $resultList = $doc.getElementById('resultList');
$resultList.innerHTML =  resultArray(choiceDB);