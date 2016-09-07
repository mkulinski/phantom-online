const User = require('./userModel');

const userController = {};

userController.getAllUsers = (next) => {
  User.find({}, next);
};

userController.checkLogin = (req, res, next) => {
  authenticate(req.body.username, req.body.password, (err, user) => {
    if (user) {
      // username = user.username;
      next();
    }
    else {
      return res.status(401).json({
        err,
      });
    }
  });
};

userController.restrict = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    req.error = 'Access denied!';
    res.redirect('/login');
  }
};

userController.createUser = (req, res, next) => {
  User.create(new User(req.body), (err, result) => {
    if (err) {
      res.render(err);
    }
    // username = result.username;
    next();
  });
};

function authenticate(name, pass, callback) {
  User.findOne({ username: name }, (err, user) => {
    if (!user) return callback(new Error('cannot find user'));
    if (pass === user.password) {
      return callback(null, user);
    } else {
      return console.log('error');
    }
  });
}

module.exports = userController;
