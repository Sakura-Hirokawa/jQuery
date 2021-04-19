// マウスオーバー
$(function(){
  $('.box1').mouseover(function(){
    $('.box1').css({'background-color':'#0000FF'});
  });
});

// マウスアウト
$(function(){
  $('.box1').mouseout(function(){
    $('.box1').css({'background-color':'#FF0000'});
  });
});