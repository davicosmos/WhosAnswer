//ホストによるルーム作成画面の処理

//htmlで入力されたデータを利用するため以下のファイルを参照する
let getHostName = require('./00_htmlManage.js');

//ホストユーザーにてルームを作成する処理のまとまり
class createRoom{
    
    //htmlからホストネームの文字列を受け取る処理
    hostName = getHostName;

};
console.log(hostName); //受け取ったホストネームの確認


//DBやりとりを司りし者クラスを呼び出す処理
//ホストのユーザー名を保存+部屋IDを作成
class callDbManage{

    //未完成

};


//04の画面・処理を呼び出してhtmlへ返す処理
class callPage04{

    //未完成

}