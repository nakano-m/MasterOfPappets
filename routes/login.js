
/*
 * GET login .
 */
exports.index = function(req, res){
  res.render("login", {});
};

/*
 * POST login infomation.
 */
<<<<<<< HEAD
exports.dologin = function (req, res) {
    if (validateUser(req.body.user_name, req.body.password)) {
        if (isMasterUser(req.body.user_name)) {
            // redirect Master's room.
            res.redirect("/myroom");
            return;
        }
        // redirect User's room.
        res.redirect("/userroom?user_name=" + req.body.user_name);
    }
=======
exports.dologin = function(req, res) {
  if (validateUser(req.body.user_name, req.body.password)) {
    if (isMasterUser(req.body.user_name)) {
      // redirect Master's room.
      res.redirect("/myroom");
      return;
    }
    // redirect User's room.
    res.redirect("/userroom?user_name=" + req.body.user_name);
    return;
  }
>>>>>>> 006161aef33ae9f94d8de47f7bb6a0fb922a6de8

    // failed to login.
    res.render("login", {
        user_name: req.body.user_name,
        error_message: "Invalid."
    });
}

function validateUser(user_name, password) {
  // empty
  if (!user_name || !password) {
    return false;
  }

  // invalid master
  if (isMasterUser(user_name) && password != 'backdoor') {
    return false;
  }

  return true;
}

function isMasterUser(user_name) {
  return user_name == 'master';
}
