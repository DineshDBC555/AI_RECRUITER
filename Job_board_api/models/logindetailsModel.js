'user strict'
var sql = require('./db.js');
var model = function() {
    this.name = "";
}
model.loginDetails = function(id, result) {
    // console.log(id);
    var query = "";
    sql.query("SELECT * FROM `user` WHERE email  = '" + id.Email + "'AND password  = '" + id.Password + "';",
        function(err, res) {
            if (err) {
                console.log(err)
                result(null, {
                    "flag": 0,
                    "message": err,
                    "data": []
                });
            } else {


                // console.log("login response", res)

                if (res.length == 0) {
                    result(null, {
                        "flag": 0,
                        "message": "invalid Email || Password",
                        "data": res

                    });

                } else {
                    result(null, {
                        "flag": 1,
                        "message": "Login successfully",
                        "data": res

                    });
                }
            }
        }
    )
}
module.exports = model;