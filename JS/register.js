  $(function () {
      // 大的轮播图配置
      $("#bannerRight").tyslide({
          boxh: 500, //盒子的高度
          w: 1000, //盒子的宽度
          h: 470, //图片的高度
          isShow: true, //是否显示控制器
          isShowBtn: true, //是否显示左右按钮
          controltop: 5, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
          controlsW: 20, //控制按钮宽度
          controlsH: 20, //控制按钮高度
          radius: 20, //控制按钮圆角度数
          controlsColor: "#d7d7d7", //普通控制按钮的颜色
          controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
          isShowNum: true //是否显示数字
      });

      $("#mian>.effect>.accordion>ul>li").mouseover(function () {
          $(this).find(".style1").show().parent().siblings().find(".style1").hide()
          $(this).find(".style2").hide().parent().siblings().find(".style2").show()
      })


      // 电子书手风琴效果
      $("#mian>.putBpx>.listBox>.rightBox>.pianoBox>.bottomList>li").mouseover(function () {
          $(this).find(".style1").show().parent().siblings().find(".style1").hide()
          $(this).find(".style2").hide().parent().siblings().find(".style2").show()
          // $(this).find(".style1").show().parent().siblings().find(".style1").hide().siblings(".style2").hide().parent().siblings().find(".style2").show()
      })

      $(".pptbox").tyslide({
          boxh: 520, //盒子的高度
          w: 1200, //盒子的宽度
          h: 490, //图片的高度
          isShow: true, //是否显示控制器
          isShowBtn: true, //是否显示左右按钮
          controltop: 5, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
          controlsW: 20, //控制按钮宽度
          controlsH: 20, //控制按钮高度
          radius: 20, //控制按钮圆角度数
          controlsColor: "#d7d7d7", //普通控制按钮的颜色
          controlsCurrentColor: "#ff6600", //当前控制按钮的颜色
          isShowNum: true //是否显示数字
      });


      // 选项卡
      $("#mian>.provideBox>.titleBox>.liBox>div").mouseover(function () {
          $(this).addClass("active").siblings().removeClass("active")
          let index = $(this).index()
          $("#mian>.provideBox>.titleBox>.imgBox>.img1").eq(index).addClass("show").siblings().removeClass("show")
      })








  })