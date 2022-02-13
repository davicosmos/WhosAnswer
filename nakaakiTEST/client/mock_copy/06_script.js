/*モーダルJquery設定*/
$("#modal-show").click(function(){
    $("#config_modal").fadeIn(0);
});


/*
        モーダルのウィンドウ以外の部分をクリックしたときはモーダルを閉じる
    */
   let modal = document.getElementById('config_modal');

   modal.addEventListener('click', (event) => {
     if(event.target.closest('#modal_close') === null) {
       //alert('外側をクリックされました。');
       $("#config_modal").fadeOut(0);
     }
   });

/*
        モーダル上の「ルームを解散する」ボタンを押下時にアラートを出し、本当に解散するかを問う。
    */
   let roomDismiss = document.getElementById('room_dismiss_btn');

   roomDismiss.addEventListener('click', (event) => {
    let result = window.confirm("本当にルームを解散しますか？");
    
    if( result ) {
        console.log('OKがクリックされました。画面遷移します。');
        window.location.href = "01_top.html";
    }
    else {
        console.log('キャンセルがクリックされました。この画面に留まります。');
    }
   });




// モーダルのバツボタンを撤去したので不要なはず。要る場合は戻す。
// $(".modal_close").click(function(){
//     $("#config_modal").fadeOut(0);
// });