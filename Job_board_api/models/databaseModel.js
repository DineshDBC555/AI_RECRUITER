'user strict';
var sql = require('./db.js');
var model=function(){
    //this.name="Test"
}

model.getvalue = function (err, result){
 sql.query("SELECT * FROM admin", err, function (err, res){
    if(res){
        result(null, {
            "flag": 1,
            "message": "Success",
            "data": res
        });
    }
    else{
        result(null, {
            "flag": 0,
            "message": err,
            "data": []
        });
    }
 })
 
}

module.exports=model;