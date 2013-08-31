
/*
 * GET login .
 */
exports.index = function(req, res){
  res.render("login", {});
};

/*
 * POST login infomation.
 */
exports.dologin = function(req, res) {
  res.redirect('https://www.google.co.jp')
}
