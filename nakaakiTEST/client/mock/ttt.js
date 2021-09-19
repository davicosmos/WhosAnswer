// const fakeUserData = 
//    [
//       {userName:"もりら", role:1, assign:0 , userId:"001" , roomId:"000100"},
//       {userName:"くろき", role:0, assign:1 , userId:"002" , roomId:"000100"},
//       {userName:"あらい", role:0, assign:0 , userId:"003" , roomId:"000100"},
//       {userName:"ナカムラアア", role:0, assign:0 , userId:"004" , roomId:"000100"},
//       {userName:"デイビス", role:0, assign:0 , userId:"005" , roomId:"000100"},
//       {userName:"キャベツ太朗", role:0, assign:0 , userId:"006" , roomId:"000100"},
    
//   ];

//   console.log(fakeUserData[0]);



//fakeDBのつもり。ベタガキした。あとで直す。
const fakeUserData = 
   [
    //   {userName:"もりら", role:1, assign:0 , userId:"001" , roomId:"000100"},
      {userName:"くろき", role:0, assign:1 , userId:"002" , roomId:"000100"},
      {userName:"あらい", role:0, assign:0 , userId:"003" , roomId:"000100"},
      {userName:"ナカムラアア", role:0, assign:0 , userId:"004" , roomId:"000100"},
      {userName:"デイビス", role:0, assign:0 , userId:"005" , roomId:"000100"},
      {userName:"キャベツ太朗", role:0, assign:0 , userId:"006" , roomId:"000100"},
    
  ];
  //リストが取れているか確認。
  console.log(fakeUserData);


//ホストとゲストで共通の機能

//if(fakeUserData.role  == 1){
  //まずホストかどうか判定し、ホストの場合、DBからホストが消される
  //※セッション情報をexpressで管理しておき、ユーザーネームと部屋番号の該当者箇所をDBから削除


  //ゲストのうち、DBで先頭[0]になった人にホストフラグ1がつく
  fakeUserData[0].role = 1;
  console.log(fakeUserData);


  //画面01へ遷移する

//}