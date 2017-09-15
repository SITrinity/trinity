$('.btn_principal').hover(function(){
  $('.btn_float').addClass('animacionVer');
})
$('.btn_container').mouseleave(function(){
  $('.btn_float').removeClass('animacionVer');
})
function ocultar_div(){
	$("#all-body").fadeOut(600);
	$(".video_360").remove();
}
$(document).keyup(function(event){
        if(event.which==27)
        {
            ocultar_div();
        }
    });