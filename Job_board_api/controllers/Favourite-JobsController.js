'user strict';
var Favourite = require('../models/Favourite-JobsModel.js')
exports.UserFavouriteJobs = function(req, res) {
    Favourite.Favouritedata(req.params.id, function(err, post) {
        if (err)
            res.send(err);

        res.json(post);
    });
}