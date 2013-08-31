(function ($) {

    var userArr = new Array();
    var socket = io.connect('http://localhost');
    socket.on('connect', function () {
        console.log('connected(client side)');
    });

    $(function () {
        $("#page_change").click(function () {
            console.log('button click');
            var user = $("select[name='user']").val();
            var page = $("#page_no").val();
            var message = user + "_" + page;
            socket.emit('msg send', message);
        });
    });

    socket.on('msg push', function (message) {
        var message_buf = message.split("_");
        if (message_buf[0] == "name") {
            userArr.push(message_buf[1]);
            var user_length = userArr.length
            $("select[name='user']").remove();
            var select_tag = "<select name='user'>";
            for (var i = 0; i < user_length; i++) {
                if (userArr[i] !== "undefined") {
                    select_tag += "<option value='" + userArr[i] + "'>" + userArr[i] + "</option>";
                }
            }
            select_tag += "</select>";
            $(".setting_area").prepend(select_tag);
        } else {
            var message_buf = message.split("_");
            $("#" + message_buf[0]).children().hide();
            console.log("#" + message_buf[0] + " #" + message_buf[1]);
            $("#" + message_buf[0] + " #page_" + message_buf[1]).show();
        }
    });

    // 初回起動時ユーザー情報を読み込む
    $(function () {
        var user_name = "name_" + $("#user_name").val();
        socket.emit('msg send', user_name);
        var user_length = userArr.length;
        if ($("#user_name").val() === undefined) {
            $("select[name='user']").remove();
            var select_tag = "<select name='user'>";
            for (var i = 0; i < user_length; i++) {
                if (userArr[i] !== "undefined") {
                    select_tag += "<option value='" + userArr[i] + "'>" + userArr[i] + "</option>";
                }
            }
            select_tag += "</select>";
            $(".setting_area").prepend(select_tag);
        }
    });

    socket.on('msg updateDB', function (message) {
        console.log("msg3 : " + message);
    });

    $(window).bind("beforeunload", function (e) {
        alert($("#user_name").val() + "閉じます");
    });

})(jQuery);