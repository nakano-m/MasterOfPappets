(function ($) {

    var socket = io.connect('http://localhost');
    socket.on('connect', function () {
        console.log('connected(client side)');
    });

    $(document).on('click', 'button#postbutton', function (e) {
        var message = $('#message').val();
        console.log("msg1 : " + message);
        socket.emit('msg send', message);
    });

    socket.on('msg push', function (message) {
        console.log("msg2 : " + message);
        var date = new Date();
        $('#list').prepend($('<dt>' + date + '</dt><dd>' + message + '</dd>'));
    });

    socket.on('msg updateDB', function (message) {
        console.log("msg3 : " + message);
    });

    $(function () {
        var master_tag = "<input type='button' id='display1' name='display' value='表示１'>";
        master_tag += "<input type='button' id='display2' name='display' value='表示２'>";
        master_tag += "<input type='button' id='display3' name='display' value='表示３'>";
        master_tag += "<input type='button' id='display4' name='display' value='表示４'>";
        master_tag += "<input type='button' id='display5' name='display' value='表示５'>";
        var user_tag = "<div class='user_page'></div>";
        if ($("#user_name").val() == 'master') {
            $(".window_zone").prepend(master_tag);
        } else {
            $(".window_zone").prepend(user_tag);
        }
    });

})(jQuery);

// メッセージを受け取りsocketに送る
function send_message() {
    
}

// sokcetから受け取ったメッセージを画面に返す
function push_message() {
    
} 