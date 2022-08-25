'user strict';
var logindata = require('../models/loginDetailsModel.js')
exports.loginData = function(req, res) {
    logindata.loginDetails(req.body, function(err, post) {
        if (err)
            res.send(err);
        res.json(post);
    })
}
exports.userpost = function(req, res) {
    logindata.getvalue(req.body, function(err, post) {
        if (err)
            res.send(err);

        res.json(post);
    });

}



// // };
// 'user strict';
// var loginDetail = require('../models/loginDetailsModel.js');
// exports.loginpost = function(req,res){
//     loginDetail.

// }