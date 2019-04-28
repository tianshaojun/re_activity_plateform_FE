 // layui下拉菜单
 layui.use('element', function () {
    element = layui.element
  }),
  // 用户管理-用户管理
  $(".userManage").click(function () {
    $("#mainBlock").attr("src", "./user-manage.html")
  });
  // 第三方授权-版本管理
  $(".verManage").click(function () {
    $("#mainBlock").attr("src", "./ver-manage.html")
  });
  // 审核页面管理-审核页面管理
  $(".auditManage").click(function () {
    $("#mainBlock").attr("src", "./audit-manage.html")
  });
  //兑换管理-兑换地址
  $(".changeAddress").click(function () {
    $("#mainBlock").attr("src", "./change-address.html")
  })
  //兑换管理-中奖人信息
  $(".winInfo").click(function () {
    $("#mainBlock").attr("src", "./win-info.html")
  })