var page_sum = 10;
exports.index = function (req, res) {
    var pageArr = new Array();
    for (var i = 0; i < page_sum; i++) {
        pageArr.push(i + 1);
    }
    res.render('myroom', { user_name: req.query.user_name, page: pageArr });
};
