// 左侧菜单点击效果
$(document).ready(function () {

    $("#sidlenav .list_dt").on("click", function () {
        $(this).siblings("dt").removeAttr("id");

        if ($(this).attr("id") == "open") {
            $(this).removeAttr("id").siblings("dd").slideUp();
        } else {
            $(this).attr("id", "open").next().slideDown().siblings("dd").slideUp();
        }

    });
});