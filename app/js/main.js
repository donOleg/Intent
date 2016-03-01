$(document).ready(function() {

  $('.bxslider').bxSlider({
    pagerCustom: '#bx-pager'
  });

  $(".container_tabs .tabs .tab").click(function(){
    $(".container_tabs .tabs .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".container_tabs .nav_item").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("active");


})