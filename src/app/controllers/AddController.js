const res = require("express/lib/response");
var db = require("../models/index")

class AddController {

    // [GET] /news
    index(req, res) {
        res.render('add');
    }

    // [POST] /add
    add(req, res) {
        db.query("INSERT INTO data_tinh (id, tinh) VALUES(?, ?)", [req.body.id, req.body.tinh], function(err, results) {
            if (err) console.log("Khong them dc"); 
            res.redirect('/home');
        });
        
    }

    // [GET] /news/:slug
    // show(req, res) {
    //     res.send('new detail');
    // }
}

module.exports = new AddController;