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

})(jQuery);

// メッセージを受け取りsocketに送る
function send_message() {
    
}

// sokcetから受け取ったメッセージを画面に返す
function push_message() {
    
} 