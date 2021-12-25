const res = require("express/lib/response");
var db = require("../models/index")

class CreateAccountController {

    // [GET] /news
    index(req, res) {
        res.render('create_account');
    }

    // [POST] /add
    create_account(req, res) {
        db.query("UPDATE data_tinh SET password_manager = ?, name_manager = ?, email_manager = ? WHERE tinh = ?", [req.body.password, req.body.name_manager, req.body.email_manager, req.body.tinh], function(err, results) {
            if (err) console.log("Khong tao dc"); 
            res.redirect('/home');
        });
        
    }

    // [GET] /news/:slug
    // show(req, res) {
    //     res.send('new detail');
    // }
}

module.exports = new CreateAccountController;