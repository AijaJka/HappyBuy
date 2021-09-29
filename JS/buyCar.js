$(function () {

  countAll()

  function countAll() {
    let allNum = 0;
    let allMoney = 0;
    $("#main .single>.floorBox>li:first-child>input").each(function () {
      if ($(this).prop("checked") == true) {
        allNum += parseInt($(this).parents("li").next().next().next().find("input").val())
        allMoney += parseFloat($(this).parents("li").next().next().next().next().html())
      }
    })

    console.log(allNum);
    console.log(allMoney);
    $("#main .allCountBox .numAll").html(allNum)
    $("#main .allCountBox .countAll span").html(allMoney.toFixed(2))
  }


  $("#main>.wrap .floorBox>li:nth-child(4)>.numberBox>button:last-of-type").click(function () {

    let num = $(this).prev().val()

    num++

    $(this).prev().val(num)

    let price = $(this).parents("li").prev().html()

    let count = price * num

    $(this).parents("li").next().html(count.toFixed(2))

    countAll()

  })



  $("#main>.wrap .floorBox>li:nth-child(4)>.numberBox>button:first-of-type").click(function () {

    let num = $(this).next().val()

    if (num <= 1) {

      num = 1

    } else {

      num--

    }

    $(this).next().val(num)

    let price = $(this).parents("li").prev().html()

    let count = price * num

    $(this).parents("li").next().html(count.toFixed(2))

    countAll()

  })



  let oldNum = 0



  $("#main>.wrap .floorBox>li:nth-child(4)>.numberBox>input").focus(function () {

    oldNum = $(this).val()
    countAll()

  })



  $("#main>.wrap .floorBox>li:nth-child(4)>.numberBox>input").blur(function () {

    let num = $(this).val()

    if (num == "") {

      $(this).val(oldNum)

    } else {

      if (isNaN(num) == true) {

        $(this).val(oldNum)

      } else {

        num = Math.ceil(num)

        if (num <= 0) {

          $(this).val(oldNum)

        } else {

          $(this).val(num)

          $(this).next().val(num)

          let price = $(this).parents("li").prev().html()

          let count = price * num

          $(this).parents("li").next().html(count.toFixed(2))
        }

      }

    }
    countAll()

  })


  $("#main .allCheck").click(function () {
    let status = $(this).prop("checked")
    $("#main .allCheck").prop({
      checked: status
    })
    $("#main .single>.floorBox>li:first-child>input").prop({
      checked: status
    })
    countAll()

  })



  $("#main .allCountBox .textRight").click(function () {
    $("#main .single>.floorBox>li:first-child>input:checked").parents(".single").remove()
    countAll()

  })



  $("#main .single>.floorBox>li:last-child>p:first-child").click(function () {
    $(this).parents(".single").remove()
    countAll()

  })


  // $("#main .single>.floorBox>li:first-child>input").click(function () {
  //   let flag = false
  //   $("#main .single>.floorBox>li:first-child>input").each(function () {
  //     if ($(this).prop("checked") == false) {
  //       flag = true
  //     }
  //   })
  //   if (flag == false) {
  //     $("#main .allCheck").prop({
  //       checked: true
  //     })
  //   } else {
  //     $("#main .allCheck").prop({
  //       checked: false
  //     })
  //   }
  // })


  $("#main .single>.floorBox>li:first-child>input").click(function () {
    let a = false
    $("#main .single>.floorBox>li:first-child>input").each(function () {
      if ($(this).prop("checked") == false) {
        a = true
      }
    })
    if (a == true) {
      $("#main .allCheck").prop({
        checked: false
      })
    } else {
      $("#main .allCheck").prop({
        checked: true
      })
    }
  countAll()
    
  })

})

















// $(function () {
//   // 3.计算数量和总价并显示countAll()
//   // 1.计算数量和总价并显示
//   function countAll() { }
//   // 2.+号事件
//   /*
//     点击按钮，获取当前输入框的值然后++，返回输入框显示
//     2.小计=数量*单价
//     3.计算数量和总价并显示countAll()
//   */
//   //  点击按钮
//   $("#main>.wrap .floorBox>li:nth-child(4)>.numberBox>button:last-of-type").click(function () {
//     // 获取当前输入框的值
//     let num = $(this).prev().val();
//     // 然后++
//     num++
//     // console.log(num);
//     // 返回输入框显示
//     $(this).prev().val(num)
//     // 2.小计=数量*单价
//     // 获取单价
//     let price = $(this).parents("li").prev().html()
//     // console.log(price);
//     // 计算小计
//     let count = num * price
//     // console.log(count);
//     // 替换小计
//     $(this).parents("li").next().html(count.toFixed(2))
//     // 计算数量和总价并显示countAll()

//   })
//   //3.-号事件
//   /*
//     点击按钮，获取当前输入框的值 判断值小于1，就直接设置为1，大于1就--
//     返回输入框显示
//     2.小计=数量*单价
//     3.计算数量和总价并显示countAll()
//   */
//   $("#main>.wrap .floorBox>li:nth-child(4)>.numberBox>button:first-of-type").click(function () {
//     // 获取当前输入框的值
//     let num = $(this).next().val();
//     // 判断值小于1，就直接设置为1
//     if (num <= 1) {
//       num = 1
//     } else {
//       // 然后--
//       num--
//     }
//     // console.log(num);
//     // 返回输入框显示
//     $(this).next().val(num)
//     // 2.小计=数量*单价
//     // 获取单价
//     let price = $(this).parents("li").prev().html()
//     // console.log(price);
//     // 计算小计
//     let count = num * price
//     // console.log(count);
//     // 替换小计
//     $(this).parents("li").next().html(count.toFixed(2))
//     // 计算数量和总价并显示countAll()

//   })
//   //4.手动输入判断 失焦事件 blur  
//   /*
//     输入内容然后失焦以后，获取输入的内容
//     进行：
//       1.非空判断
//       2.数字判断
//       3.小数判断
//       4.负数判断
//       上述有问题，就显示上次输入的数  聚焦事件
//     返回输入框显示
//     2.小计=数量*单价
//     3.计算数量和总价并显示countAll()
//   */
//   let oldNum = 0;
//   $("#main>.wrap .floorBox>li:nth-child(4)>.numberBox>input").focus(function () {
//     // 保存上次的正确值
//     oldNum = $(this).val()
//     // console.log(oldNum);
//   })
//   $("#main>.wrap .floorBox>li:nth-child(4)>.numberBox>input").blur(function () {
//     // 获取新的输入内容
//     let num = $(this).val();
//     // 1.非空判断
//     if (num == "") {
//       $(this).val(oldNum)
//     } else {
//       // 2.数字判断
//       if (isNaN(num) == true) {
//         $(this).val(oldNum)
//       } else {
//         // 3.小数判断
//         num = Math.ceil(num)
//         // console.log(num);
//         // 4.负数判断
//         if (num < 0) {
//           $(this).val(oldNum)
//         } else {
//           $(this).val(num)
//           // 2.小计=数量*单价
//           // 获取单价
//           let price = $(this).parents("li").prev().html()
//           // console.log(price);
//           // 计算小计
//           let count = num * price
//           // console.log(count);
//           // 替换小计
//           $(this).parents("li").next().html(count.toFixed(2))
//           // 计算数量和总价并显示countAll()

//         }
//       }
//     }

//   })
//   //5.全选事件
//   /*
//     点击上下全选中的任何一个，都可以控制所有的选中按钮
//     做统一的选中处理
//     3.计算数量和总价并显示countAll()
//   */
//   $("#main .allCheck").click(function () {
//     // 获取当前点击的全选状态
//     let status = $(this).prop("checked")
//     // 把全选的属性设置为获取的属性
//     $("#main .allCheck").prop({ checked: status })
//     // 设置单元格的属性
//     $("#main .single>.floorBox>li:first-child>input").prop({ checked: status })
//     // 3.计算数量和总价并显示countAll()

//   })
//   // 6.单元格点击选中控制全选
//   /*
//     点击任何一个单元格选项，都要先把所有单元格选项
//     查看一遍，只要有一个没选中就不能全选，否则就全选
//     3.计算数量和总价并显示countAll()

//     什么是标杆=flag思维？

//     侦察兵---斥候（旗帜） 敌不动我不动 根据旗帜改变来改变自己的状态
//   */
//   $("#main .single>.floorBox>li:first-child>input").click(function () {
//     // 设置标杆 用于提示改变状态
//     let flag = false;

//     $("#main .single>.floorBox>li:first-child>input").each(function () {
//       // 检查每一个状态，只要有一个改变，就改变标杆的性质
//       if ($(this).prop("checked") == false) {
//         flag = true
//       }
//     })
//     // console.log(flag);

//     // 全选状态---根据标杆的状态来改变自己的状态
//     if (flag == false) {
//       $("#main .allCheck").prop({ checked: true })
//     } else {
//       $("#main .allCheck").prop({ checked: false })
//     }
//     // 3.计算数量和总价并显示countAll()
//   })
//   //7.删除选中项
//   /*
//     把选中的单元格删除掉
//     3.计算数量和总价并显示countAll()
//   */
//   $("#main .allCountBox .textRight").click(function () {
//     $("#main .single>.floorBox>li:first-child>input:checked").parents(".single").remove()
//     // 3.计算数量和总价并显示countAll()
//   })
//   //8.删除
//   /*
//     点击单元格的删除，把当前的这一个整个单元格删除掉
//      3.计算数量和总价并显示countAll()
//   */
//   $("#main .single>.floorBox>li:last-child>p:first-child").click(function () {
//     $(this).parents(".single").remove()
//     // 3.计算数量和总价并显示countAll()
//   })
// })