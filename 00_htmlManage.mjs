//htmlとの受け渡しを司る処理全般のファイル

//02画面用の処理
//02-1.ホストネームをHTMLから受け取り、箱（変数）につめる
function getHostName(){
    //let htmlRenkei = document.getElementById('hostNameImput').value;
    //正解の行
    //let tottekitaHostName = htmlRenkei;
 
    //テスト用のダミー値
    let tottekitaHostName = "ぺぺぺぺ";

    //ホストネームが正しく撮れているかの確認(参考のための出力)
    console.log(tottekitaHostName);
    //htmlRenkei.attachEvent('onclick', getHostName);
}

//02-2.変数を02j.sファイルに渡す（そのために02.jsファイルをこのファイルで読み込む）
export function getHostName();
