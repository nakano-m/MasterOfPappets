exports.index = function(req, res){
<<<<<<< HEAD
    res.render('myroom', {user_name: "user1"});
=======
    res.render('myroom', { user_name: req.query.user_name });
>>>>>>> 89060cca1dff9b47109f69b6ca54baf0e1b22e48
};
