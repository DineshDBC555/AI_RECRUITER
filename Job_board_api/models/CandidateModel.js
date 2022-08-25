'user strict';
var sql = require('./db.js');

var Candidate = function() {
    this.name = "";
}

Candidate.companydetails = function(err, result) {
    sql.query("SELECT CompanyName, OurCompany,CompanyLocation,Category FROM Companydetails;", err, function(err, res) {
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

Candidate.filterdata = function(filter, result) {
    if (filter.Search == undefined) {
        filter.Search = "";
    }
    var query = "";
    query += "CALL `SpCompanySearch`('" + filter.CompanyName + "','" + filter.CompanyLocation + "','" + filter.Category + "');";
    //console.log("====search=====",filter.search)  
    sql.query(query, function(err, res) {
        console.log("==========================", res)
        if (res) {
            result(null, {
                "flag": 1,
                "message": "Filter Success",
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



Candidate.uniqueName = function(err, result) {
    sql.query("SELECT DISTINCT(`CompanyName`) as CompanyName FROM Companydetails", err, function(err, res) {
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
Candidate.uniqueLocation = function(err, result) {
    sql.query("SELECT DISTINCT(`CompanyLocation`) as CompanyLocation FROM Companydetails", err, function(err, res) {
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

Candidate.uniqueCategory = function(err, result) {
    sql.query("SELECT DISTINCT(`Category`) as Category FROM Companydetails", err, function(err, res) {
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



module.exports = Candidate;