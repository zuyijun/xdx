$(function () {
    $("#sm").click(function () {
        $(this).addClass("active");
        $("#zh").removeClass("active");
        $("#sm_box").css("display","block");
        $("#zh_box").css("display","none");
    })
    $("#zh").click(function () {
        $(this).addClass("active");
        $("#sm").removeClass("active");
        $("#zh_box").css("display","block");
        $("#sm_box").css("display","none");
    })
})