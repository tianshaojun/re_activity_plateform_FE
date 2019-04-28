 // 轮播图配置
 layui.use('carousel', function(){
  var carousel = layui.carousel;
  carousel.render({
  elem: '#test1',
  width: '100%', 
  height:'500px',
  arrow: 'none',
  anim: 'default',
  indicator: 'none'
});
});