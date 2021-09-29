/**
 *                    _ooOoo_
 *                   o8888888o
 *                   88" . "88
 *                   (| -_- |)
 *                    O\ = /O
 *                ____/`---'\____
 *              .   ' \\| |// `.
 *               / \\||| : |||// \
 *             / _||||| -:- |||||- \
 *               | | \\\ - /// | |
 *             | \_| ''\---/'' | |
 *              \ .-\__ `-` ___/-. /
 *           ___`. .' /--.--\ `. . __
 *        ."" '< `.___\_<|>_/___.' >'"".
 *       | | : `- \`.;`\ _ /`;.`/ - ` : | |
 *         \ \ `-. \_ __\ /__ _/ .-` / /
 * ======`-.____`-.___\_____/___.-`____.-'======
 *                    `=---='
 *
 * .............................................
 *          佛祖保佑             永无BUG
 */


/**
 *  佛曰:
 *          写字楼里写字间，写字间里程序员；
 *          程序人员写程序，又拿程序换酒钱。
 *          酒醒只在网上坐，酒醉还来网下眠；
 *          酒醉酒醒日复日，网上网下年复年。
 *          但愿老死电脑间，不愿鞠躬老板前；
 *          奔驰宝马贵者趣，公交自行程序员。
 *          别人笑我忒疯癫，我笑自己命太贱；
 *          不见满街漂亮妹，哪个归得程序员？
 */
$(function () {
  // 商品二级菜单的交互
  $("#main>.wrap>.asideAndBanner>.leftAside>li").hover(function () {
    // 移入事件
    // 给当前的p标签添加active
    $(this).find("p").addClass("active")
    // 让当前的二级菜单显示
    $(this).find(".titleTwo").show()
  }, function () {
    // 移出事件
    // 给当前的p标签删除active
    $(this).find("p").removeClass("active")
    // 让当前的二级菜单隐藏
    $(this).find(".titleTwo").hide()
  })
  // 大的轮播图配置
  $("#bannerRight").tyslide({
    boxh: 430, //盒子的高度
    w: 1000, //盒子的宽度
    h: 400, //图片的高度
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
  // 电子书轮播图配置
  $(".bannerBox").tyslide({
    boxh: 220, //盒子的高度
    w: 331, //盒子的宽度
    h: 220, //图片的高度
    isShow: true, //是否显示控制器
    isShowBtn: true, //是否显示左右按钮
    controltop: 5, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW: 10, //控制按钮宽度
    controlsH: 2, //控制按钮高度
    radius: 0, //控制按钮圆角度数
    controlsColor: "#fff", //普通控制按钮的颜色
    controlsCurrentColor: "#ccc", //当前控制按钮的颜色
    isShowNum: false //是否显示数字
  });

  // 电子书的选项卡互动
  $("#main .eBookBox .commonTitle>ul>li").mouseover(function () {
    $(this).addClass("active").siblings().removeClass("active")
    let index = $(this).index()
    $("#main>.wrap>.eBookBox>.leftBox>.leftBottomList>.rightSmallList").eq(index).show().siblings(".rightSmallList").hide()
  })

  // 电子书手风琴效果
  $("#main>.wrap>.eBookBox>.rightBox>.pianoBox>.bottomList>li").mouseover(function () {
    $(this).find(".style1").show().parent().siblings().find(".style1").hide()
    $(this).find(".style2").hide().parent().siblings().find(".style2").show()
    // $(this).find(".style1").show().parent().siblings().find(".style1").hide().siblings(".style2").hide().parent().siblings().find(".style2").show()
  })

  // 楼层轮播图配置
  $(".floorBanner").tyslide({
    boxh: 341, //盒子的高度
    w: 550, //盒子的宽度
    h: 341, //图片的高度
    isShow: true, //是否显示控制器
    isShowBtn: true, //是否显示左右按钮
    controltop: 5, //控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
    controlsW: 10, //控制按钮宽度
    controlsH: 2, //控制按钮高度
    radius: 0, //控制按钮圆角度数
    controlsColor: "#fff", //普通控制按钮的颜色
    controlsCurrentColor: "#ccc", //当前控制按钮的颜色
    isShowNum: false //是否显示数字
  });

  // 女装的选项卡互动
  $("#main .clothes .commonTitle>ul>li").mouseover(function () {
    $(this).addClass("active").siblings().removeClass("active")
    let index = $(this).index()
    $("#main>.wrap>.clothes>.listBox>.rightListBox").eq(index).show().siblings(".rightListBox").hide()
  })
  // 户外的选项卡互动
  $("#main .outDoor .commonTitle>ul>li").mouseover(function () {
    $(this).addClass("active").siblings().removeClass("active")
    let index = $(this).index()
    $("#main>.wrap>.outDoor>.listBox>.rightListBox").eq(index).show().siblings(".rightListBox").hide()
  })
  // 儿童的选项卡互动
  $("#main .children .commonTitle>ul>li").mouseover(function () {
    $(this).addClass("active").siblings().removeClass("active")
    let index = $(this).index()
    $("#main>.wrap>.children>.listBox>.rightListBox").eq(index).show().siblings(".rightListBox").hide()
  })
  // 推荐商品的交互事件
  $("#main>.wrap>.goodsBox>.topTitle>ul>li").click(function () {
    $(this).addClass("active").siblings().removeClass("active")
    let index = $(this).index()
    $("#main>.wrap>.goodsBox>.bannerBox>.group").stop(true).animate({
      left: index * (-1200)
    }, 500)
  })



  // 返回顶部的交互事件
  $(window).scroll(function () {
    let t = $(document).scrollTop();
    if (t >= 1000) {
      $("#backTop").show()
    } else {
      $("#backTop").hide()
    }
    if (t >= 600) {
      $("#titleTwo").stop(true).slideDown(500)
    } else {
      $("#titleTwo").stop(true).slideUp(500)
    }
    if (t > 1000) {
      $("#floorGuid").addClass("floorGuid1")
    } else {
      $("#floorGuid").removeClass("floorGuid1")
    }
    // console.log(t);

  })
  // 注册点击返回顶部事件
  $("#backTop").click(function () {
    $("html,body").stop(true).animate({
      scrollTop: 0
    }, 500)
  })
  let arr = ["#ff6600", "#90d46d", "#f85726", "#ba9eee", "#fe7594", "#c2ed51"]

  $("#floorGuid>li").hover(function () {
    $(this).find(".text").stop(true).animate({
      left: "40px"
    }, 50)
    let index = $(this).index()
    $(this).find(".icon").stop(true).css({
      backgroundPositionX: "-40px",
      backgroundColor: arr[index]
    })
  }, function () {
    $(this).find(".text").stop(true).animate({
      left: "0px"
    }, 50)
    $(this).find(".icon").stop(true).css({
      backgroundPositionX: "0px",
      backgroundColor: "#f2f2f2"
    })
  })

  $("#floorGuid>li").click(function () {
    let index = $(this).index()
    let t = $("#main>.wrap>.titleFoll").eq(index).offset().top

    console.log(t);
    $("html,body").stop(true).animate({
      scrollTop: t
    }, 500)
  })


})