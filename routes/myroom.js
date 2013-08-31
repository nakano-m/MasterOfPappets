exports.index = function(req, res){
<<<<<<< HEAD
    res.render('myroom', {user_name: "user1"});
};
=======
    res.render('myroom', { user_name: req.query.user_name });
};
>>>>>>> 91bbe7c46778a8582dd0ca2dfe13ab503f37891b
