'user strict';
var model=require('../models/exampleModel.js')
exports.getdata =  function(req,res){
    model.getdata(req.body,function (err, user){
        if (err)
                res.send(err);

            res.json(user);
    })

}  