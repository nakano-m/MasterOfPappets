(function ($) {

    var userArr = new Array();
    var socket = io.connect('http://localhost');
    socket.on('connect', function () {
        console.log('connected(client side)');
    });

    $(document).on('click', 'button', function (e) {
        var user = $('#user_name').val();
        var page = $("#page_no").val();
        var message = user + "_" + page;
        socket.emit('msg send', message);
    });

    socket.on('msg push', function (message) {
        var message_buf = message.split("_");
        if (message_buf[0] == "name") {
            userArr.push(message_buf[1]);
            var user_length = userArr.length
            var select_tag = "<select name='user'>";
            for (var i = 0; i < user_length; i++) {
                select_tag += "<option value='" + userArr[i] + "'>" + userArr[i] + "</option>";
            }
            select_tag += "</select>";
            $(".setting_area").prepend(select_tag);
        } else {
            var message_buf = message.split("_");
            $("#" + message_buf[0]).children().hide();
            $("#" + message_buf[0] + " #" + message_buf[1]).show();
        }
    });

    // 初回起動時ユーザー情報を読み込む
    $(function () {
        var user_name = "name_" + $("#user_name").valueOf();
        socket.emit('msg send', user_name);
    });

    $('button').click(function () {
    });

    socket.on('msg updateDB', function (message) {
        console.log("msg3 : " + message);
    });

})(jQuery);