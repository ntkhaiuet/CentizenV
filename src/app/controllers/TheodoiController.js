const res = require("express/lib/response");
var db = require("../models/index");
const fs = require('fs');

class TheodoiController {

    // [GET] /news
    index(req, res) {
        db.query("SELECT id, ten FROM tiendo;", function(err, results) {
            if (err) throw err;
            var data = JSON.stringify(results);
            fs.writeFileSync('src/public/ASSETS/data_vietnam_province/tiendo.json', data);
        })
        if (req.cookies.a1) {
            res.render('theodoi', {username: req.cookies.username, dinh_danh: 1});
        } else if (req.cookies.a2) {
            res.render('theodoi', {username: req.cookies.username, dinh_danh: 2, code: req.cookies.id});
        } else if (req.cookies.a3) {
            res.render('theodoi', {username: req.cookies.username, dinh_danh: 3, code: req.cookies.id});
        } else if (req.cookies.b1) {
            res.render('theodoi', {username: req.cookies.username, dinh_danh: 4, code: req.cookies.id});
        }
        
    }

}

module.exports = new TheodoiController;