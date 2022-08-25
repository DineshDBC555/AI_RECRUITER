'user strict';
var model=require('../models/databaseModel.js')
exports.getvalue =  function(req,res){
    model.getvalue(req.body,function (err, user){
        if (err)
                res.send(err);

            res.json(user);
    })

}  