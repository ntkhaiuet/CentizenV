const res = require("express/lib/response");
var db = require("../models/index");

class EditController {

    // [GET] /news
    index(req, res) {
        if (req.cookies.b2) {
            res.render('edit', {username: req.cookies.username, hidden_thon: "hidden"});
        } else {
            res.render('edit', {username: req.cookies.username, require: "require", code: req.cookies.id});
        }
        
    }

    postEdit(req, res) {
        var dob = req.body.year + "/" + req.body.month + "/" + req.body.day;
        var thuong_tru = req.body['address-1'];
        var tam_tru;
        if (req.body['address-2'] === "") {
            tam_tru = req.body['address-1'];
        } else {
            tam_tru = req.body['address-2'];
        }
        db.query("UPDATE nguoi_dan SET name = ?, dob = ?, gioi_tinh = ?, thuong_tru = ?, tam_tru = ?, ton_giao = ?, nghe_nghiep = ? WHERE cccd = ?", [req.body.fullname, dob, req.body.sex, thuong_tru, tam_tru, req.body.religion, req.body.job, req.body.cccd], function(err, results) {
            if (err) {
                res.status(404).send('ERROR!!!')
            } else {
                res.redirect("edit");
            }
        });
    }

    getEdit(req, res) {
        res.redirect('/input');
    }

}

module.exports = new EditController;