'user strict';
var sql = require('./db.js');
const moment = require('moment');
const date = require('date-and-time');
var Register = function() {
    this.name = "";
}

Register.CandidateData = function(id, result) {
    var query = "";
    sql.query("SELECT *, id as UserId FROM `user` WHERE id = '" + id + "';" +
        "SELECT * FROM `education` WHERE userId = '" + id + "';" +
        "SELECT * FROM `experience` WHERE userId = '" + id + "';",
        function(err, res) {
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

Register.Usercoverpic = function(User, result) {
        var query = "";
        query += "UPDATE `user` SET `CoverPicture`  = '" + User.Filename + "'WHERE Id ='"+User.id+"' ;";
    
        sql.query(query, function(err, res) {
            console.log(res);
            if (err) {
                result(null, {
                    "flag": 0,
                    "message": err,
                    "data": []
                })
    
            } else {
                if (res.affectedRows == 1) {
                if (res[0][0].result == "Success") {
                    result(null, {
                        "flag": 1,
                        "message": "Coverpic Updated successfully",
                        "data": res
                    });
                }
             
            }
        }
        });
    };

Register.UserRegister = function(Register, result) {
    var query = "";
    query += "CALL `SpStoreRegister`('" + Register.Email + "','" + Register.Phone + "', '" + Register.Name + "', '" + Register.Password + "', '" + moment(Register.Dob).format("YYYY-MM-DD") + "','" + Register.JobTitle + "','" + Register.Position + "','" + Register.Salary + "','" + Register.CoverPicture + "','" + Register.Active + "', '" + Register.CreatedBy + "',CURRENT_TIMESTAMP());";

    sql.query(query, function(err, res) {
        if (err) {
            result(null, {
                "flag": 0,
                "message": err,
                "data": []
            });

        } else {
            if (res[0][0].result == "Success") {
                result(null, {
                    "flag": 1,
                    "message": "Registered successfully",
                    "data": res
                });
            } else if (res[0][0].result == "Phone already exist") {
                result(null, {
                    "flag": 0,
                    "message": "Phone number already exist",
                    "data": res
                });
            } else if (res[0][0].result == "Email already exist") {
                result(null, {
                    "flag": 0,
                    "message": "Email already exist",
                    "data": []
                });
            }
        }
    });
};
Register.EducationData = function(Education, result) {
    var query = "";
    query += "DELETE FROM education WHERE UserId ='" + Education[0].UserId + "';";
    Education.forEach((Education) => {
        query += "call `SpStoreEducation`('" + Education.Title + "','" + Education.Degree + "','" + Education.Institute + "','" + Education.Year + "','" + Education.Active + "','" + Education.CreatedBy + "',CURRENT_TIMESTAMP(),'" + Education.UpdatedBy + "',CURRENT_TIMESTAMP(),'" + Education.UserId + "');";

    });

    sql.query(query, function(err, res) {
        if (err) {
            result(null, {
                "flag": 0,
                "message": err,
                "data": []
            });

        } else {

            result(null, {
                "flag": 1,
                "message": "Education Details Added Successfully",
                "data": res
            });

        }
    });
};
Register.ExperienceData = function(Experience, result) {
    var query = "";
    query += "DELETE FROM experience WHERE UserId ='" + Experience[0].UserId + "';";
    Experience.forEach((Experience) => {

        query += "call `SpStoreExperience`('" + Experience.CompanyName + "','" + Experience.Location + "','" + Experience.Position + "','" + moment(Experience.StartDate).format("YYYY-MM-DD") + "','" + moment(Experience.EndDate).format("YYYY-MM-DD") + "','" + Experience.Active + "','" + Experience.CreatedBy + "',CURRENT_TIMESTAMP(),'" + Experience.UpdatedBy + "',CURRENT_TIMESTAMP(),'" + Experience.UserId + "');";
    });

    sql.query(query, function(err, res) {
        if (err) {
            result(null, {
                "flag": 0,
                "message": err,
                "data": []
            });

        } else {

            result(null, {
                "flag": 1,
                "message": "Experience Details Added Successfully",
                "data": res
            });

        }
    });
};
// Register.UserUpdateData = function(Update, result) {
//     var query = "";
//     query += "CALL `SpUpdateUser`('" + Update.Email + "','" + Update.Phone + "', '" + Update.Name + "', '" + Update.Password + "', '" + Update.Dob + "','" + Update.JobTitle + "','" + Update.Position + "','" + Update.Salary + "','" + Update.CoverPicture + "','" + Update.Active + "', '" + Update.CreatedBy + "',CURRENT_TIMESTAMP(),'" + Update.Id + "');";

//     sql.query(query, function(err, res) {
//         if (err) {
//             result(null, {
//                 "flag": 0,
//                 "message": err,
//                 "data": []
//             })

//         } else {
//             if (res[0][0].result == "Success") {
//                 result(null, {
//                     "flag": 1,
//                     "message": "User Details Updated successfully",
//                     "data": res
//                 });
//             }
//         }
//     });
// };
Register.UserUpdateData = function(Update, result) {
    var query = "";
    query += "CALL `SpUpdateUser`('" + Update.Email + "','" + Update.Phone + "', '" + Update.Name + "', '" + Update.Password + "', '" + Update.Dob + "','" + Update.JobTitle + "','" + Update.Position + "','" + Update.Salary + "','" + Update.CoverPicture + "','" + Update.Active + "', '" + Update.CreatedBy + "',CURRENT_TIMESTAMP(),'" + Update.Id + "');";

    sql.query(query, function(err, res) {
        if (err) {
            result(null, {
                "flag": 0,
                "message": err,
                "data": []
            })

        } else {
            if (res[0][0].result == "Success") {
                result(null, {
                    "flag": 1,
                    "message": "User Details Updated successfully",
                    "data": res
                });
            }
        }
    });
};
Register.UserFormData = function(Data, result) {
    var query = "";
    query += "DELETE FROM experience WHERE UserId ='" + Data[0].experience[0].UserId + "';";
    query += "DELETE FROM education WHERE UserId ='" + Data[0].education[0].UserId + "';";
    query += "CALL `SpStoreFormData`('" + JSON.stringify(Data) + "');";
    //console.log("=========",Data[0].basicdetails[0].Dob)
    console.log(query)
    sql.query(query, function(err, res) {
        // console.log("==========================",res)
        if (err) {
            result(null, {
                "flag": 0,
                "message": err,
                "data": []
            })
        } else {
            console.log(res[2][0]);
            console.log("++++++++++++++");
            if (res[2][0].RESULT == "SUCCESS") {
                result(null, {
                    "flag": 1,
                    "message": " Details Added successfully",
                    "data": res
                });
            }

        }

    });
};
Register.Applieddata = function(id, result) {
    sql.query("SELECT job.*,appliedjobs.* FROM appliedjobs JOIN job ON appliedjobs.JobId = job.Id WHERE appliedjobs.UserId = '" + id + "';", function(err, res) {

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

module.exports = Register;