const res = require("express/lib/response");
var db = require("../models/index");

class KhaibaoController {

    // [GET] /khaibao
    index(req, res) {
        res.render('khaibao', {username: req.cookies.username});
    }

    // [POST] /khaibao/post
    post(req, res) {
        var a1 = '0';
        var a2 = '0';
        var a3 = '0';
        var b1 = '0';
        if (req.cookies.a1) {
            a1 = '1';
        } else if (req.cookies.a2) {
            a2 = '1';
        } else if (req.cookies.a3) {
            a3 = '1';
        } else {
            b1 = '1';
        }
        if (req.cookies.a1) {
            db.query("INSERT INTO khaibao (open, close, a1, a2, a3, b1) VALUES(?,?,?,?,?,?)", [req.body.openDate, req.body.closeDate, a1, a2, a3, b1], function(err, results) {
                if (err) {
                    res.status(404).send('ERROR!!!')
                } else {
                    res.redirect('get');
                }
            });
        } else {
            db.query("INSERT INTO khaibao (open, close, a1, a2, a3, b1, id) VALUES(?,?,?,?,?,?,?)", [req.body.openDate, req.body.closeDate, a1, a2, a3, b1, req.cookies.id], function(err, results) {
                if (err) {
                    res.status(404).send('ERROR!!!')
                } else {
                    res.redirect('get');
                }
            });
        }
    }

    // [GET] /khaibao/get
    get(req, res) {
        res.redirect('/home');
    }
    
}

module.exports = new KhaibaoController;