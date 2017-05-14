$(document).ready(function() {

  $('.bxslider').bxSlider({
    pagerCustom: '#bx-pager'
  });


  var item = $(".nav_item");
  item.hide().eq(0).show();

  $(".tab").click(function(){
    $(".tab").removeClass("active").eq($(this).index()).addClass("active");
    item.hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active");


  var itemB = $(".b-nav_item");
  itemB.hide().eq(0).show();

  $(".b-tab").click(function(){
    $(".b-tab").removeClass("active").eq($(this).index()).addClass("active");
    itemB.hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active");


 $('.fancybox').fancybox({
    openEffect  : 'elastic',
    cyclic : true
  });


});
