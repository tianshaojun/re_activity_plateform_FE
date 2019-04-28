

    // 上一步 下一步
  // $(".audit-block").scrollable({
  //   onSeek: function (event, i) {
  //     $("#status li").removeClass("active").eq(i).addClass("active");
  //   }
  // });

  // Tab的切换功能
  layui.use('element', function () {
    var $ = layui.jquery
      , element = layui.element; //Tab的切换功能，切换事件监听等，需要依赖element模块
  })

  // 普通图片上传
  layui.use('upload', function () {
    var $ = layui.jquery
      , upload = layui.upload;

    //普通图片上传 Banner1
    var uploadInst = upload.render({
      elem: '#test1'
      , url: '/upload/'
      , before: function (obj) {
        //预读本地文件示例，不支持ie8
        obj.preview(function (index, file, result) {
          $('#demo1').attr('src', result); //图片链接（base64）
        });
      }
      , done: function (res) {
        //如果上传失败
        if (res.code > 0) {
          return layer.msg('上传失败');
        }
        //上传成功
      }
      , error: function () {
        //演示失败状态，并实现重传
        var demoText = $('#demoText');
        demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
        demoText.find('.demo-reload').on('click', function () {
          uploadInst.upload();
        });
      }
    });

    //普通图片上传 Banner2
    var uploadInst = upload.render({
      elem: '#test2'
      , url: '/upload/'
      , before: function (obj) {
        //预读本地文件示例，不支持ie8
        obj.preview(function (index, file, result) {
          $('#demo2').attr('src', result); //图片链接（base64）
        });
      }
      , done: function (res) {
        //如果上传失败
        if (res.code > 0) {
          return layer.msg('上传失败');
        }
        //上传成功
      }
      , error: function () {
        //演示失败状态，并实现重传
        var demoText = $('#demoText');
        demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
        demoText.find('.demo-reload').on('click', function () {
          uploadInst.upload();
        });
      }
    });

    //普通图片上传 Banner3
    var uploadInst = upload.render({
      elem: '#test3'
      , url: '/upload/'
      , before: function (obj) {
        //预读本地文件示例，不支持ie8
        obj.preview(function (index, file, result) {
          $('#demo3').attr('src', result); //图片链接（base64）
        });
      }
      , done: function (res) {
        //如果上传失败
        if (res.code > 0) {
          return layer.msg('上传失败');
        }
        //上传成功
      }
      , error: function () {
        //演示失败状态，并实现重传
        var demoText = $('#demoText');
        demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
        demoText.find('.demo-reload').on('click', function () {
          uploadInst.upload();
        });
      }
    });

    //普通图片上传 资讯图片4
    var uploadInst = upload.render({
      elem: '#test4'
      , url: '/upload/'
      , before: function (obj) {
        //预读本地文件示例，不支持ie8
        obj.preview(function (index, file, result) {
          $('#demo4').attr('src', result); //图片链接（base64）
        });
      }
      , done: function (res) {
        //如果上传失败
        if (res.code > 0) {
          return layer.msg('上传失败');
        }
        //上传成功
      }
      , error: function () {
        //演示失败状态，并实现重传
        var demoText = $('#demoText');
        demoText.html('<span style="color: #FF5722;">上传失败</span> <a class="layui-btn layui-btn-xs demo-reload">重试</a>');
        demoText.find('.demo-reload').on('click', function () {
          uploadInst.upload();
        });
      }
    });

  });