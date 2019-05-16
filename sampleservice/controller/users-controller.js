var modelUser = require('../model/user');

exports.apiCreateUser = function(req, res, next) {
    console.log(req.body);
    let user = new modelUser({
        email: req.body.email,
        password: req.body.password
    })
    user.save()
}