'user strict';
var Homecount = require('../models/HomeModel.js')
exports.getcount = function(req, res) {
    Homecount.getcount(req.body, function(err, post) {
        if (err)
            res.send(err);

        res.json(post);
    })

}
exports.getDistrict = function(req, res) {
    Homecount.getCountrydistrict(req.body, function(err, post) {
        if (err)
            res.send(err);

        res.json(post);
    })
}
exports.getcompany = function(req, res) {
    Homecount.getcompany(req.body, function(err, post) {
        if (err)
            res.send(err);

        res.json(post);
    })
}
exports.getjobs = function(req, res) {
    Homecount.getjobs(req.body, function(err, post) {
        if (err)
            res.send(err);

        res.json(post);
    })
}
exports.gettechnology = function(req, res) {
    Homecount.gettechnology(req.body, function(err, post) {
        if (err)
            res.send(err);

        res.json(post);

    })
}
exports.getJobdesc = function(req, res) {
    Homecount.getJobdesc(req.body, function(err, post) {
        if (err)
            res.send(err);

        res.json(post);

    })
}
exports.store_resume = function(req, res) {
    Homecount.storeResume(req.body, function(err, post) {
        if (err)
            res.send(err);

        res.json(post);

    })
}