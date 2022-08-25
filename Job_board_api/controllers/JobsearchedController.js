'use strict';
var jobsearch = require('../models/jobsearchedModel.js');
exports.jobpost = function (req, res) {
    jobsearch.getvalue(req.body, function (err, post) {
        if (err)
            res.send(err);

        res.json(post);
    });
};
exports.jobdatefilterpost = function (req, res) {
    jobsearch.getdatefilter(req.body, function (err, post) {
        if (err)
            res.send(err);

        res.json(post);
    });
};
exports.jobexperiencefilterpost = function (req, res) {
    jobsearch.getexperiencefilter(req.body, function (err, post) {
        if (err)
            res.send(err);

        res.json(post);
    });
};
exports.searchtext = function (req, res) {
    jobsearch.getSearchvalue(req.params.searchitem, function (err, post) {
        if (err)
            res.send(err);

        res.json(post);
    });
};
exports.duplicateTechnologytext = function (req, res) {
    jobsearch.duplicatevalueTechnology(req.body, function (err, post) {
        if (err)
            res.send(err);

        res.json(post);
    });
};
exports.duplicateExperiencetext = function (req, res) {
    jobsearch.duplicatevalueExperience(req.body, function (err, post) {
        if (err)
            res.send(err);

        res.json(post);
    });
};
exports.duplicateLocationtext = function (req, res) {
    jobsearch.duplicatevalueLocation(req.body, function (err, post) {
        if (err)
            res.send(err);

        res.json(post);
    });
};
exports.duplicateJobtypetext = function (req, res) {
    jobsearch.duplicatevalueJobType(req.body, function (err, post) {
        if (err)
            res.send(err);

        res.json(post);
    });
};
exports.getjobdetails = function (req, res) {
    jobsearch.getJobdata( req.params.JobId,req.params.UserId, function (err, post) {
        if (err)
            res.send(err);

        res.json(post);
    });
};

exports.filtervalue = function (req, res) {
    jobsearch.filtervalue(req.body, function (err, post) {
        if (err)
            res.send(err);

        res.json(post);
    });
};
exports.getjobpostingdate = function (req, res) {
    jobsearch.getdateposted(req.params.setdate, function (err, post) {
        if (err)
            res.send(err);

        res.json(post);
    });
};
exports.Applied = function (req, res) {
    jobsearch.UserAppliedJobs(req.body, function (err, post) {
        if (err)
            res.send(err);

        res.json(post);
    });
};
exports.Appliedjobcount = function (req, res) {
    jobsearch.UserAppliedJobsCount(req.body, function (err, post) {
        if (err)
            res.send(err);

        res.json(post);
    });
};