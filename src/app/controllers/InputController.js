const res = require("express/lib/response");
var db = require("../models/index");

class InputController {

    // [GET] /news
    index(req, res) {
        if (req.cookies.b1) {
            res.render('input', {username: req.cookies.username, code: req.cookies.id, required: "required"});
        } else {
            res.render('input', {hidden: "hidden", username: req.cookies.username, hidden_thon: "hidden"});
        }
        
    }

    // [POST] /add
    add(req, res) {
        var dob = req.body.year + "/" + req.body.month + "/" + req.body.day;
        var thuong_tru = req.body['address-1'];
        var tam_tru;
        if (req.body['address-2'] === "") {
            tam_tru = req.body['address-1'];
        } else {
            tam_tru = req.body['address-2'];
        }
        if (req.cookies.b1) {
            var id_thon;
            db.query("SELECT id FROM data_thon WHERE thon = ?", [req.body.thon], function(err, results) {
                if (err) {
                    res.status(404).send('ERROR!!!')
                } else {
                    id_thon = results[0].id;
                    console.log(id_thon);
                    db.query("INSERT INTO nguoi_dan (cccd, name, dob, gioi_tinh, thuong_tru, tam_tru, ton_giao, nghe_nghiep, id_thon) VALUES(?,?,?,?,?,?,?,?,?)", [req.body.cccd, req.body.fullname, dob, req.body.sex, thuong_tru, tam_tru, req.body.religion, req.body.job, id_thon], function(err, results) {
                        if (err) {
                            res.status(404).send('ERROR!!!')
                        } else {
                            res.redirect("add");
                        }
                    })
                }
            });
        } else {
            db.query("INSERT INTO nguoi_dan (cccd, name, dob, gioi_tinh, thuong_tru, tam_tru, ton_giao, nghe_nghiep, id_thon) VALUES(?,?,?,?,?,?,?,?,?)", [req.body.cccd, req.body.fullname, dob, req.body.sex, thuong_tru, tam_tru, req.body.religion, req.body.job, req.cookies.id], function(err, results) {
                if (err) {
                    res.status(404).send('ERROR!!!')
                } else {
                    res.redirect("add");
                }
            });
        }
    }

    // [GET] /news/:slug
    getAdd(req, res) {
        res.redirect("/input");
    }
}

module.exports = new InputController;