
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
  if (validateUser(req.body.user_name, req.body.password)) {
    res.redirect("/myroom?user_name=" + req.body.user_name);
  }
  res.render("login", {
    user_name: req.body.user_name,
    error_message: "Invalid."
  });
}

function validateUser(user_name, password) {
  
  var error_message = "";

  // empty
  if (!user_name || !password) {
    return false;
  }

  // invalid master
  if (user_name == 'master' &&
      password != 'backdoor') {
    return false;
  }

  return true;
}
