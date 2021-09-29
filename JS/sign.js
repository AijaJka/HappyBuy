$(function() {

    $("#main>.wrap>.signBox>.accBox>.butBox").click(function() {

        if ($("#main>.wrap>.signBox>.accBox>.accBox-1>.acc").val() == "") {
            alert("账号不能为空")
        } else if ($("#main>.wrap>.signBox>.accBox>.accBox-1>.pas").val() == "") {
            alert("密码不能为空")
        } else if ($("#main>.wrap>.signBox>.accBox>.accBox-1>.acc").val() !== "123") {
            alert("账号错误")
        } else if ($("#main>.wrap>.signBox>.accBox>.accBox-1>.pas").val() !== "456") {
            alert("密码错误")
        } else {
            let i = 5
            $("#main>.wrap>.signBox>.accBox>.alertBox").append("登录成功，" + i + "秒后跳转")
            setInterval(function() {
                $("#main>.wrap>.signBox>.accBox>.alertBox").empty()
                i--;
                if (i <= 0) {
                    $(location).attr("href", "#")
                } else {
                    $("#main>.wrap>.signBox>.accBox>.alertBox").append("登录成功，" + i + "秒后跳转")
                }
            }, 1000)

        }

    })

    $("#main>.wrap>.signBox>.scanBox").hover(function() {
        $("#main>.wrap>.signBox>.scanBox>.scanBox-1").css({
            left: "40px"
        })
        $("#main>.wrap>.signBox>.scanBox>.scanBox-2").show(200)
    }, function() {
        $("#main>.wrap>.signBox>.scanBox>.scanBox-1").css({
            left: "100px"
        })
        $("#main>.wrap>.signBox>.scanBox>.scanBox-2").css({
            display: "none"
        })
    })

    $("#main>.wrap>.signBox>.textBox>.textBox-2").mouseover(function() {
        $("#main>.wrap>.signBox>.scanBox").hide()
        $("#main>.wrap>.signBox>.accBox").show()
    })
    $("#main>.wrap>.signBox>.textBox>.textBox-1").mouseover(function() {
        $("#main>.wrap>.signBox>.scanBox").show()
        $("#main>.wrap>.signBox>.accBox").hide()
    })

    $("#main>.wrap>.signBox>.textBox>.textBox-2").mouseover(function() {
        $(this).addClass("cg")
        $("#main>.wrap>.signBox>.textBox>.textBox-1").removeClass("cg")
    })
    $("#main>.wrap>.signBox>.textBox>.textBox-1").mouseover(function() {
        $(this).addClass("cg")
        $("#main>.wrap>.signBox>.textBox>.textBox-2").removeClass("cg")
    })
})