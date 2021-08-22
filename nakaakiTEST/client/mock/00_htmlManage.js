const apiUrl = 'https://us-central1-whosanswer.cloudfunctions.net/app';






//00.mjsを優先する。このjsファイルは封印。

//htmlとの受け渡しを司る処理全般のファイル

//02画面用の処理
function getHostName(){
    //let htmlRenkei = document.getElementById('hostNameImput').value;
    //正解の行
    let tottekitaHostName = "htmlRenkei";
    
    //ホストネームが正しく撮れているかの確認(参考のための出力)
    console.log(tottekitaHostName);
};

//02-2.変数を02j.sファイルに渡す（そのために02.jsファイルをこのファイルで読み込む）


export const apiUrl;