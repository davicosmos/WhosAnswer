//質問

//質問のうち、「誰々のなになには何でしょう」形式を出題するときの文章を生成。
//let quizSeisei = ;

var quiz = [
    {
      quizID:"0",
      question: '夢が一つだけ叶うとしたら、何をお願いしますか',
    }, {
      quizID:"1",
      question: '10年後のあなたは何をしていると思いますか',
    }, {
      quizID:"2",
      question: '自分を動物に例えると何ですか',
    }, {
      quizID:"3",
      question: '空を飛べるようになったあなた。まず最初にどこに行きますか',
    }, {
      quizID:"4",
      question: '死ぬ直前に言ってみたい一言を教えてください',
    }, {
      quizID:"5",
      question: '人にお勧めしたい料理または料理店を教えてください',
    }, {
      quizID:"6",
      question: '異性の好きな仕草・行動を教えてください',
    }, {
      quizID:"7",
      question: '異性との失敗した過去の話を教えてください',
    }, {
      quizID:"8",
      question: '素敵だと思う告白の言葉を教えてください',
    }, {
      quizID:"9",
      question: '来年からはじまる映画のタイトルを作ってください',
    }, {
      quizID:"10",
      question: '正義のヒーローになったあなた。ヒーロー名を教えてください',
    }, {
      quizID:"11",
      question: Random_Name + ' さんのいいところを一つ教えてください',
    }, {
      quizID:"12",
      question: Random_Name + ' さんの決め台詞を考えてあげてください',
    }, {
      quizID:"13",
      question: Random_Name + 'さんの秘められた特殊能力を教えてください',
    }, {
      quizID:"14",
      question: Random_Name + 'さんには誰にも知られていない過去があります。どんな過去ですか',
    }, {
      quizID:"15",
      question: Random_Name + 'さんの芸名を考えてあげてください',
    }, {
      quizID:"16",
      question: '心に響く名言を一つ作ってください',
    }, {
      quizID:"17",
      question: 'ここで一句',
    }, {
      quizID:"18",
      question: '生まれて一番最初の思い出を教えてください',
    }, {
      quizID:"19",
      question: 'お金持ちになったあなた。そのお金で一番やりたいことを教えてください',
    }, {
      quizID:"20",
      question: '一番最後に怒られた内容を教えてください',
    }, {
      quizID:"21",
      question: 'あなたが最初に見つけた新しい動物、地球最強の生物みたいですが名前をつけてください',
    }, {
      quizID:"22",
      question: '最近買った一番高い買い物は何ですか',
    }, {
      quizID:"23",
      question: 'あなたは世界中の人から人気のYOUTUBERです。何の動画をアップしていますか。',
    }, {
      quizID:"24",
      question: '元カレ・元カノのことを何と呼んでいましたか。いない人は好きなおにぎりの具を教えてください。',
    }, {
      quizID:"25",
      question: '異性の理解できない行動を教えてください。',
    }, {
      quizID:"26",
      question: 'ドッキリにかけられたあなた。どんなドッキリですか？',
    }, {
      quizID:"27",
      question: '恋人の信じられないクセを見てしまった！どんなクセ？',
    }
  ];



//〜〜本当は、ここから下は、ゲームの都度つくられるけど、練習は決め打ちで書いておく〜〜

//部屋 roomData　（ユーザーIDの保持の仕方は見直し必要）
// function fakeRoomData() {
//   return {
//     roomId: "000100",
//     hostName: "もりら"
//   };
// }

// var fakeRoomData = 
//     {roomId:"000100",
//     hostName:"もりら",
//     };

function fakeRoomData() {
  return {
    roomId: "000100",
  };
};


//ユーザーネーム userData
// var fakeUserData = [
//     {userName:"もりら", role:1, assign:0 , userId:"001" , roomId:"000100"},
//     {userName:"くろき", role:0, assign:1 , userId:"002" , roomId:"000100"},
//     {userName:"あらい", role:0, assign:0 , userId:"003" , roomId:"000100"},
//     {userName:"ナカムラアア", role:0, assign:0 , userId:"004" , roomId:"000100"},
//     {userName:"デイビス", role:0, assign:0 , userId:"005" , roomId:"000100"},
//     {userName:"キャベツ太朗", role:0, assign:0 , userId:"006" , roomId:"000100"},

//     {userName:"ほかのルームのホスト", role:1, assign:0 , userId:"007" , roomId:"000200"},
//     {userName:"ほかのルームのゲスト", role:0, assign:1 , userId:"008" , roomId:"000200"},

// ]
function fakeUserData() {
  return [
      {userName:"もりら", role:1, assign:0 , userId:"001" , roomId:"000100"},
      {userName:"くろき", role:0, assign:1 , userId:"002" , roomId:"000100"},
      {userName:"あらい", role:0, assign:0 , userId:"003" , roomId:"000100"},
      {userName:"ナカムラアア", role:0, assign:0 , userId:"004" , roomId:"000100"},
      {userName:"デイビス", role:0, assign:0 , userId:"005" , roomId:"000100"},
      {userName:"キャベツ太朗", role:0, assign:0 , userId:"006" , roomId:"000100"},
    
      {userName:"ほかのルームのホスト", role:1, assign:0 , userId:"007" , roomId:"000200"},
      {userName:"ほかのルームのゲスト", role:0, assign:1 , userId:"008" , roomId:"000200"},
  ]
};


//回答 answer
var fakeAnswer = [
    {"roomID":"000100", "userID":"001",
       "choiceID":"001", "answerText":"わかめ"},
       {"roomID":"000100", "userID":"002",
       "choiceID":"002", "answerText":"かつお"},
       {"roomID":"000100", "userID":"003",
       "choiceID":"003", "answerText":"いその"},
       {"roomID":"000100", "userID":"004",
       "choiceID":"004", "answerText":"たけし"},
       {"roomID":"000100", "userID":"005",
       "choiceID":"005", "answerText":"コンティオ"},
       {"roomID":"000100", "userID":"006",
       "choiceID":"006", "answerText":"ジャッカル"},
];

//選択 choice (データの複数の持たせ方見直し必要)
var fakeChoise = [
    {"roomID":"000100", "userID":"001", "choiceID":"002"},
    {"roomID":"000100", "userID":"002", "choiceID":"003"},
    {"roomID":"000100", "userID":"003", "choiceID":"004"},
    {"roomID":"000100", "userID":"004", "choiceID":"005"},
    {"roomID":"000100", "userID":"005", "choiceID":"001"},
    {"roomID":"000100", "userID":"006", "choiceID":"002"}
];