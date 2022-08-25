'user strict';
var model=function(){
    this.name="Test"
}
model.getdata = function (err, result){
    // res.send('Welcome');
    result(null, {
        "flag": 0,
        "message": 'Welcome',
        "data": []
    });
}

module.exports=model;

