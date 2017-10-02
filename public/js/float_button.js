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
function mostrar_div(url_video) {
    $("#all-body").fadeIn(600);
    $("#all-body").append("<iframe class=\"video_360\" src=\"https://www.youtube.com/embed/"+ url_video +"?rel=0&amp;controls=0&amp;showinfo=0&autoplay=1&fs=0\" frameborder=\"0\"</iframe>").fadeIn(600);
}
$(document).keyup(function(event){
    if(event.which==27) 
    {
        ocultar_div();
    }
});