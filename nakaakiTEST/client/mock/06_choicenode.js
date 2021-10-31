//回答選択肢をDBからとってくる
//fakeDBのつもり。ベタガキした。あとで直す。
const choiceDB = 
[
    {
        quizID: 1,
        choiceID: 1,
        answer:"きみといつも一緒さ",
    }, {
        quizID: 1,
        choiceID: 2,
        answer:"いつでもPS4さ",
    },{
        quizID: 1,
        choiceID: 3,
        answer:"サラマンダー",
    },
    {
        quizID: 1,
        choiceID: 4,
        answer:"あああ",
    }, {
        quizID: 1,
        choiceID: 5,
        answer:"いいい",
    },{
        quizID: 1,
        choiceID: 6,
        answer:"ううう",
    }

  ];


  //リストが取れているか確認。
  console.log(choiceDB[1].answer);


//あとでDBとつながり、かつ、ランダムで名前だけ取ってこれるようになったら不要。
//   const fakeUserNameList = 
//    [
//   {userName:"あらい"},
//   {userName:"ナカムラアア"},
//   {userName:"くろき"},
//   {userName:"キャベツ太朗"},
//   {userName:"デイビス"},
//   {userName:"もりら", },
// ];


//fakeDBのつもり。ベタガキした。あとで直す。
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

//DBのなかに何人のデータがあるかの長さを取得
let DbUserNumber = fakeUserData.length;



/*　06画面の上部に表示される人の名前をDBから取得（xxさんの回答はどれ)　*/

window.addEventListener('pageshow', function() {

    //ランダム数字を生成
    //1.ランダム数字の上限を指定(0〜指定した数字の範囲)
    let maxNumRange = DbUserNumber - 1;
    //2.ランダムな数字を生成
    let randomNum = parseInt(Math.random() * maxNumRange) + 1;

    //3.ランダム生成された数字の検証
    console.log(randomNum);

    //DBから人の名前をランダムに取得して、貼り付け先に貼り付ける（DB使いながらちゃんと書く必要がある）
    /*これはランダム数字取りできていそうでできていないみたいで動かない*/
//     const $doc = document;
//       let $choiceSareruMemberNameBase = $doc.getElementById('choiceSareruMemberName');
//       let tottekitaMemberName = fakeUserNameList[randomNum]; //ここの名前はDBから取れたものにするぞ！
//         $choiceSareruMemberNameBase.innerHTML = tottekitaMemberName + "さんの回答はどれ" ;
    
//   }, false);

  const $doc = document;
  let $choiceSareruMemberNameBase = $doc.getElementById('choiceSareruMemberName');
  let tottekitaMemberName = "キャベツ太朗"; //ここの名前はDBから取れたものにするぞ！
    $choiceSareruMemberNameBase.innerHTML = tottekitaMemberName + "さんの回答はどれ" ;

}, false);


/*　06画面に全ての回答をリストで表示するべく、DBから回答を取得　*/

  //回答リストをランダムな順番に並べ替え
  function arrayShuffle(array) {
    for(let i = (choiceDB.length - 1); 0 < i; i--){
  
      // 0〜(i+1)の範囲で値を取得
      let r = Math.floor(Math.random() * (i + 1));
  
      // 要素の並び替えを実行
      let tmp = array[i];
      array[i] = array[r];
      array[r] = tmp;
    }
    // let returnCheck = array.map((obj) => obj.answer)
    let result = '<ol id = "answerList" >';


    for(const answer of array){
      // let n = 0; //ここ書き換えた
      // result = result+ '<li'  + '>' + answer + '<li/>'
      result = result+ '<li > <input type ="radio" name ="answer"   id = "'  + answer.choiceID  + '" /> ' + answer.answer + ' <li/>' //ここ書き換えた

      // count++
    };

    result = result + '</ol>';
    return result;
  };


  //ランダムな順番に並べ替えられた回答リストを画面に表示
  const $doc = document;
  let $choiceList = $doc.getElementById('answerList');
  $choiceList.innerHTML =  arrayShuffle(choiceDB);
  

//回答をクリックした上で「決定」を押して次に進む
let choiceDecideBtn = document.getElementById("end");
choiceDecideBtn.addEventListener('click', function() {

  let elements = document.getElementsByName('answer');
  let len = elements.length;
  let checkValue = '';
  
  for (let i = 0; i < len; i++){
      if (elements.item(i).checked){
          checkValue = elements.item(i).id;
      }
  }

    alert("あなたが選択した回答はこちらです。" + checkValue);
    });
