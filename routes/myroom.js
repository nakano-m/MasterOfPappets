exports.index = function(req, res){
    res.render('myroom', { user_name: req.query.user_name });
};
