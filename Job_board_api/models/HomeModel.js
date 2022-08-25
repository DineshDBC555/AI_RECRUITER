'user strict';
var sql = require('./db.js');
let countriesData = require('../config/India.json');
var Homecount = function() {
    this.name = "";
}
Homecount.getCountrydistrict=function (err, result) {
    result(null, {
        "flag": 1,
        "message": 'Countries list obtained successfully',
        "data": countriesData[0].districts
    });
};
Homecount.getcount = function(err, result) {
    sql.query("SELECT COUNT(*) as userCount FROM user WHERE Active = 1", err, function(err, res) {
        if (res) {
            result(null, {
                "flag": 1,
                "message": "Success",
                "data": res
            });
        } else {
            result(null, {
                "flag": 0,
                "message": err,
                "data": []
            });

        }
    })
};
Homecount.getcompany = function(err, result) {
    sql.query("SELECT COUNT(*) as companyCount FROM companydetails WHERE Active = 1", err, function(err, res) {
        if (res) {
            result(null, {
                "flag": 1,
                "message": "Success",
                "data": res
            });
        } else {
            result(null, {
                "flag": 0,
                "message": err,
                "data": []
            });
        }
    })

};
Homecount.getJobdesc = function(err, result) {
    sql.query("SELECT job.*,companydetails.OurCompany,companydetails.Ourmission,companydetails.Ourvision,companydetails.CompanyName,companydetails.CompanyEmail,companydetails.CompanyLocation,companydetails.Category  FROM job INNER JOIN companydetails ON job.Companyid = companydetails.Id ORDER BY `job`.`CreatedDate` DESC;", err, function(err, res) {
        if (res) {
            result(null, {
                "flag": 1,
                "message": "Success",
                "data": res
            });
        } else {
            result(null, {
                "flag": 0,
                "message": err,
                "data": []
            });
        }
    })

};
Homecount.storeResume = function(User, result) {
    var query = "";
    query += "update user set Resume='" + User.Resume + "' Where Id= '" + User.Id + "';";

    sql.query(query, function(err, res) {
        console.log(res)
        if (res) {
            result(null, {
                "flag": 1,
                "message": "Success",
                "data": res
            });
        } else {
            result(null, {
                "flag": 0,
                "message": err,
                "data": []
            });
        }
    });
};
Homecount.getjobs = function(err, result) {
    sql.query("SELECT COUNT(*) as jobCount FROM job WHERE Active = 1", err, function(err, res) {

        if (res) {
            result(null, {
                "flag": 1,
                "message": "Success",
                "data": res
            });
        } else {
            result(null, {
                "flag": 0,
                "message": err,
                "data": []
            });
        }
    })
}

Homecount.gettechnology = function(err, result) {
    sql.query("SELECT Technology,COUNT(*) as  technologyCount FROM job GROUP BY Technology", err, function(err, res) {

        if (res) {
            result(null, {
                "flag": 1,
                "message": "Success",
                "data": res
            });
        } else {
            result(null, {
                "flag": 0,
                "message": err,
                "data": []
            });
        }
    })
}


module.exports = Homecount;