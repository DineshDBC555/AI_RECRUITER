'use strict';
var RegisterData = require('../models/CandidateDetailsModel.js');
exports.CandidateDetails = function(req, res) {
    RegisterData.CandidateData(req.params.id, function(err, post) {

        if (err)
            res.send(err);

        res.json(post);

    });
}
exports.coverpic = function(req, res) {
    RegisterData.Usercoverpic(req.body, function(err, post) {
        if (err)
            res.send(err);

        res.json(post);
    });
};

exports.UserDetails = function(req, res) {
    RegisterData.UserRegister(req.body, function(err, post) {
        if (err)
            res.send(err);

        res.json(post);
    });
};
exports.EducationDetails = function(req, res) {
    RegisterData.EducationData(req.body, function(err, post) {
        if (err)
            res.send(err);

        res.json(post);
    });
};
exports.ExperienceDetails = function(req, res) {
    RegisterData.ExperienceData(req.body, function(err, post) {
        if (err)
            res.send(err);

        res.json(post);
    });
};
exports.UserUpdate = function(req, res) {
    RegisterData.UserUpdateData(req.body, function(err, post) {
        if (err)
            res.send(err);

        res.json(post);
    });
};
exports.Formdata = function(req, res) {
    RegisterData.UserFormData(req.body, function(err, post) {
        if (err)
            res.send(err);

        res.json(post);
    });
};
exports.UserAppliedData = function(req, res) {
    RegisterData.Applieddata(req.params.id, function(err, post) {
        if (err)
            res.send(err);

        res.json(post);
    });
}