// 'use strict';
// module.exports = function(app) {
//     var candidate = require('../controllers/CandidateDetailsController')
//     var search = require('../controllers/jobsearchedController')
//     app.route('/User')
//         .post(candidate.UserDetails)
//     app.route('/Education')
//         .post(candidate.EducationDetails)
//     app.route('/Experience')
//         .post(candidate.ExperienceDetails)
//     app.route('/Userupdate')
//         .post(candidate.UserUpdate)
//     app.route('/Formdata')
//         .post(candidate.Formdata)
//     app.route('/jobpost')
//         .get(search.jobpost)
//     app.route('/datefilter')
//         .get(search.jobdatefilterpost)
//    
//     app.route('/jobpost/:searchitem')
//         .get(search.searchtext)
//     app.route('/duplicateTechnology')
//         .get(search.duplicateTechnologytext)
//     app.route('/duplicateExperience')
//         .get(search.duplicateExperiencetext)
//     app.route('/jobfilter')
//         .post(search.filtervalue)
//     app.route('/duplicateLocation')
//         .get(search.duplicateLocationtext)
//     app.route('/duplicateJobtype')
//         .get(search.duplicateJobtypetext)
    // app.route('/jobid/:searchitem/:UserId')
    //     .get(search.getjobdetails)
//     app.route('/getdatepost/:setdate')
//         .get(search.getjobpostingdate)
//     app.route('/appliedjob')
//         .post(search.Applied)

//     app.route('/candidateAppliedjob')
//         .get(candidate.UserAppliedData)

// }
'use strict';

// const Favourite = require('../models/Favourite-JobsModel');

module.exports = function(app) {
    var candidate = require('../controllers/CandidateDetailsController')
    var search = require('../controllers/jobsearchedController')
    var login = require('../controllers/loginDetailsController')
    var Home = require('../controllers/Homecontroller')
    var Candidate = require('../controllers/CandidateController')
    app.route('/login')
    .post(login.loginData)
    app.route('/homecount')
        .get(Home.getcount)
    app.route('/districts')
        .get(Home.getDistrict)
    app.route('/getcompanycount')
        .get(Home.getcompany)
    app.route('/getjob')
        .get(Home.getjobs)
    app.route('/getTechnology')
        .get(Home.gettechnology)
    app.route('/getjobdesc')
        .get(Home.getJobdesc)
    app.route('/resume')
        .post(Home.store_resume)
    app.route('/users')
    .get(login.userpost)
     app.route('/CandidateDetails/:id')
    .get(candidate.CandidateDetails)
    app.route('/appliedjobcount')
    .post(search.Appliedjobcount)
    app.route('/jobid/:JobId/:UserId')
    .get(search.getjobdetails)
    var Favourite = require('../controllers/Favourite-JobsController')
    app.route('/User')
        .post(candidate.UserDetails)
    app.route('/Education')
        .post(candidate.EducationDetails)
    app.route('/Experience')
        .post(candidate.ExperienceDetails)
    app.route('/Userupdate')
        .post(candidate.UserUpdate)
    app.route('/Formdata')
        .post(candidate.Formdata)
    app.route('/jobpost')
        .get(search.jobpost)
    app.route('/datefilter')
        .get(search.jobdatefilterpost)
    app.route('/experiencefilter')
        .get(search.jobexperiencefilterpost)
    app.route('/jobpost/:searchitem')
        .get(search.searchtext)
    app.route('/duplicateTechnology')
        .get(search.duplicateTechnologytext)
    app.route('/duplicateExperience')
        .get(search.duplicateExperiencetext)
    app.route('/jobfilter')
        .post(search.filtervalue)
    app.route('/duplicateLocation')
        .get(search.duplicateLocationtext)
    app.route('/duplicateJobtype')
        .get(search.duplicateJobtypetext)
    app.route('/jobid/:searchitem/:UserId')
        .get(search.getjobdetails)
    app.route('/getdatepost/:setdate')
        .get(search.getjobpostingdate)
    app.route('/appliedjob')
        .post(search.Applied)
    app.route('/appliedjobcount')
        .post(search.Appliedjobcount)
    app.route('/candidateAppliedjob/:id')
        .get(candidate.UserAppliedData)
    app.route('/FavouriteJobs/:id')
        .get(Favourite.UserFavouriteJobs)
        app.route('/Company')
        .get(Candidate.selectCompany)
    app.route('/Companyfilter')
        .post(Candidate.filterdata)
    app.route('/uniqueName')
        .get(Candidate.uniquecompanyName)
    app.route('/uniqueLocation')
        .get(Candidate.uniquecompanylocation)
    app.route('/uniqueCategory')
        .get(Candidate.uniquecompanyCategory)
}