'user strict'
var sql = require('./db.js');
var Favourite = function() {
    this.name = "";
}
Favourite.Favouritedata = function(id, result) {
    sql.query("SELECT job.*,favouritejobs.* FROM favouritejobs JOIN job ON favouritejobs.JobId = job.Id WHERE favouritejobs.UserId = '" + id + "';", function(err, res) {

        if (res) {
            result(null, {
                "flag": 1,
                "message": "Success",
                "data": res
            });
        } else {
            result(null, {
                "flag": 0,
                "message": err,
                "data": []
            });
        }
    })

}

module.exports = Favourite;