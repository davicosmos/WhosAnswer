$("#modal-show").click(function(){
    $("#config_modal").fadeIn(0);
});
$( function(){
  // モーダル領域をクリックでフェードアウトさせる
  $(".modal_wrapper").click(function(){
    $( this ).fadeOut();
  });
    // がしかし、画像をクリックでキャンセルさせる
    $(".modal").on( 'click', function( e ){
        e.stopPropagation();
      } );
});
