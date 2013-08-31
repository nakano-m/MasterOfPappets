exports.index = function(req, res){
  res.render('userroom', { user_name: req.query.user_name });
};
