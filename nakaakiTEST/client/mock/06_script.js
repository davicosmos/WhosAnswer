/*モーダルJquery設定*/
$("#modal-show").click(function(){
    $("#config_modal").fadeIn(0);
});
$(".modal_close").click(function(){
    $("#config_modal").fadeOut(0);
});

/*
        モーダルのウィンドウ以外の部分をクリックしたときはモーダルを閉じる
    */
   let modal = document.getElementById('config_modal');

   modal.addEventListener('click', (event) => {
     if(event.target.closest('#modal_close') === null) {
       alert('外側をクリックされました。');
     }
   });