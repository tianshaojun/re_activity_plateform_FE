// 窗口大小判断
var by_window = function () {
    var win_h = $(window).height();
    var hd_h = $('.header').height()
    var set_height = win_h - hd_h - 20;
    $(".modelheight").height(set_height);
}
  $(window).resize(function () {
    by_window();
  });
  $(function () {
    by_window();
  });