const res = require("express/lib/response");
var db = require("../models/index")

class CreateAccountController {

    // [GET] /news
    index(req, res) {
        res.render('create_account', {label1: req.cookies.label1, username: req.cookies.username});
    }

    // [POST] /add
    create_account(req, res) {

        if (req.cookies.b1) {
            db.query("UPDATE data_thon SET password_manager = ?, name_manager = ?, email_manager = ? WHERE thon = ?", [req.body.password, req.body.name_manager, req.body.email_manager, req.body.tinh], function(err, results) {
                if (err) console.log("Khong tao dc"); 
                res.redirect('/home');
            });
        } else if (req.cookies.a3) {
            db.query("UPDATE data_xa SET password_manager = ?, name_manager = ?, email_manager = ? WHERE xa = ?", [req.body.password, req.body.name_manager, req.body.email_manager, req.body.tinh], function(err, results) {
                if (err) console.log("Khong tao dc"); 
                res.redirect('/home');
            });
        } else if (req.cookies.a2) {
            db.query("UPDATE data_huyen SET password_manager = ?, name_manager = ?, email_manager = ? WHERE huyen = ?", [req.body.password, req.body.name_manager, req.body.email_manager, req.body.tinh], function(err, results) {
                if (err) console.log("Khong tao dc"); 
                res.redirect('/home');
            });
        } else {
            db.query("UPDATE data_tinh SET password_manager = ?, name_manager = ?, email_manager = ? WHERE tinh = ?", [req.body.password, req.body.name_manager, req.body.email_manager, req.body.tinh], function(err, results) {
                if (err) console.log("Khong tao dc"); 
                res.redirect('/home');
            });
        }
    }

    // [GET] /news/:slug
    // show(req, res) {
    //     res.send('new detail');
    // }
}

module.exports = new CreateAccountController;