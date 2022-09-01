'user strict';
const { query } = require('express');
var sql = require('./db.js');
var model = function() {
    //this.name="Test"
}

model.getvalue = function(err, result) {
    sql.query("SELECT job.*,companydetails.Logo FROM job JOIN companydetails ON job.Companyid = companydetails.Id;", err, function(err, res) {
        // SELECT DISTINCT(`Technology`) as tech FROM job;
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
model.getdatefilter = function(err, result) {

    sql.query("SELECT * FROM dateposted", err, function(err, res) {
        // SELECT DISTINCT(`Technology`) as tech FROM job;
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
model.getexperiencefilter = function(err, result) {
        sql.query("SELECT * FROM experience_filter", err, function(err, res) {
            // SELECT DISTINCT(`Technology`) as tech FROM job;
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
    // model.getSearchvalue = function (err, result){


//    }
model.getSearchvalue = function(search, result) {
    var query = "";
    query += "CALL `SpSearchJob`('" + search + "');";
    console.log(query)
    sql.query(query, function(err, res) {
        console.log("==========================", res)
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

model.duplicatevalueTechnology = function(err, result) {
    sql.query("SELECT DISTINCT(`Technology`) as Technology FROM job", err, function(err, res) {
        // SELECT DISTINCT(`Technology`) as tech FROM job;
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
model.duplicatevalueExperience = function(err, result) {
    sql.query("SELECT DISTINCT(`Experience`) as Experience FROM job", err, function(err, res) {
        // SELECT DISTINCT(`Technology`) as tech FROM job;
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
model.duplicatevalueLocation = function(err, result) {
    sql.query("SELECT DISTINCT(`Location`) as Location FROM job", err, function(err, res) {
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
model.duplicatevalueJobType = function(err, result) {
    sql.query("SELECT DISTINCT(`JobType`) as JobType FROM job", err, function(err, res) {
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
model.filtervalue = function(filter, result) {
    if (filter.Search == undefined) {
        filter.Search = "";
    }
    var query = "";
    query += "CALL `SpFilterJob`('" + filter.Technology + "','" + filter.Location + "','" + filter.JobType + "','" + filter.Date + "','" + filter.Experience + "','" + filter.Search + "');";
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
model.getdateposted = function(Date, err, result) {

        console.log("SELECT * FROM job WHERE CreatedDate BETWEEN " + "'" + Date + "'" + " AND CURRENT_DATE;")
        sql.query("SELECT * FROM job WHERE CreatedDate BETWEEN " + "'" + Date + "'" + " AND CURRENT_DATE; ", err, function(err, res) {

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
    // model.getJobdata = function(id, UserId, err, result) {

//     sql.query("SELECT job.*,companydetails.*,(SELECT UserId FROM `appliedjobs` WHERE UserId=" + UserId + " AND " + id + " LIMIT 1) as Isapplied FROM job INNER JOIN companydetails ON companydetails.JobId=job.Id WHERE job.Id=" + id + ";", err, function(err, res) {
//         if (res) {
//             result(null, {
//                 "flag": 1,
//                 "message": "Success",
//                 "data": res
//             });
//         } else {
//             result(null, {
//                 "flag": 0,
//                 "message": err,
//                 "data": []
//             });
//         }
//     })

// sql.query("SELECT job.*,companydetails.*,(SELECT UserId FROM `appliedjobs` WHERE UserId=" + UserId + " AND `JobId`=" + id + " LIMIT 1) as Isapplied FROM job INNER JOIN companydetails ON companydetails.JobId=job.Id WHERE job.Id=" + id + ";", err, function(err, res) {
//     console.log("SELECT job.*,companydetails.*,(SELECT UserId FROM `appliedjobs` WHERE UserId=" + UserId + " AND `JobId`=" + id + " LIMIT 1) as Isapplied FROM job INNER JOIN companydetails ON companydetails.JobId=job.Id WHERE job.Id=" + id + ";");
//     if (res) {
//         result(null, {
//             "flag": 1,
//             "message": "Success",
//             "data": res
//         });
//     } else {
//         result(null, {
//             "flag": 0,
//             "message": err,
//             "data": []
//         });
//     }
// })

// }
model.getJobdata = function(JobId, UserId, err, result) {
    // SELECT companydetails.*, job.*,appliedjobs.* FROM companydetails LEFT JOIN job ON companydetails.Id=job.Companyid LEFT JOIN appliedjobs ON job.id = appliedjobs.JobId WHERE appliedjobs.UserId=149;
    sql.query("SELECT companydetails.*, job.* ,(SELECT UserId FROM `appliedjobs` WHERE UserId=" + UserId + " AND appliedjobs.JobId=job.id LIMIT 1) as Isapplied FROM companydetails LEFT JOIN job ON companydetails.Id=job.Companyid WHERE  job.id = " + JobId + ";", err, function(err, res) {
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
model.UserAppliedJobs = function(job, result) {
    var query = "";
    query += "Insert into appliedjobs (UserId, JobId, CreatedBy, CreatedDate) values('" + job.UserId + "','" + job.JobId + "','" + job.CreatedBy + "',CURRENT_TIMESTAMP());";

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
model.UserAppliedJobsCount = function(job, result) {
    var query = "";
    query += "SELECT * FROM `appliedjobs` WHERE UserId='" + job.UserId + "' AND `JobId`='" + job.JobId + "';";

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
module.exports = model;