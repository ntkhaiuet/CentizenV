const res = require("express/lib/response");
var db = require("../models/index")

class AddController {

    // [GET] /add
    index(req, res) {
        res.render('add', {tieude: req.cookies.content1, placeholder1: req.cookies.id, label1: req.cookies.label1, username: req.cookies.username});
    }

    // [POST] /add
    add(req, res) {

        if (req.cookies.b1) {
            db.query("INSERT INTO data_thon (id, thon, id_xa) VALUES(?, ?, ?)", [req.body.id, req.body.tinh, req.cookies.id], function(err, results) {
                if (err) console.log("Khong them dc"); 
                res.redirect('/home');
            });
        } else if (req.cookies.a3) {
            db.query("INSERT INTO data_xa (id, xa, id_huyen) VALUES(?, ?, ?)", [req.body.id, req.body.tinh, req.cookies.id], function(err, results) {
                if (err) console.log("Khong them dc"); 
                res.redirect('/home');
            });
        } else if (req.cookies.a2) {
            db.query("INSERT INTO data_huyen (id, huyen, id_tinh) VALUES(?, ?, ?)", [req.body.id, req.body.tinh, req.cookies.id], function(err, results) {
                if (err) console.log("Khong them dc"); 
                res.redirect('/home');
            });
        } else {
            db.query("INSERT INTO data_tinh (id, tinh) VALUES(?, ?)", [req.body.id, req.body.tinh], function(err, results) {
                if (err) console.log("Khong them dc"); 
                res.redirect('/home');
            });
        }
    }
}

module.exports = new AddController;