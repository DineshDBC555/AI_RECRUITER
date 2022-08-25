'user strict';
var Candidate = require('../models/CandidateModel.js')
exports.selectCompany = function(req, res) {
    Candidate.companydetails(req.body, function(err, post) {
        if (err)
            res.send(err);

        res.json(post);
    })

}

exports.filterdata = function(req, res) {
    Candidate.filterdata(req.body, function(err, post) {
        if (err)
            res.send(err);

        res.json(post);
    });
};

exports.uniquecompanyName = function(req, res) {
    Candidate.uniqueName(req.body, function(err, post) {
        if (err)
            res.send(err);

        res.json(post);
    })

}
exports.uniquecompanylocation = function(req, res) {
    Candidate.uniqueLocation(req.body, function(err, post) {
        if (err)
            res.send(err);

        res.json(post);
    })

}
exports.uniquecompanyCategory = function(req, res) {
    Candidate.uniqueCategory(req.body, function(err, post) {
        if (err)
            res.send(err);

        res.json(post);
    })

}