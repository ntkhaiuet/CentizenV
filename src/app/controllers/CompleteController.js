const res = require("express/lib/response");
var db = require("../models/index");

class CompleteController {

    // [GET] /complete
    index(req, res) {
        console.log(req.cookies.username);
        const s = req.cookies.username.split(" - ");
        db.query("INSERT INTO tiendo (id, ten) VALUES(?,?)", [s[0], s[1]], function(err, results) {
            if (err) {
                res.status(404).send('ERROR!!!')
            } else {
                if (req.cookies.b2) {
                    res.redirect("input");
                } else {
                    res.redirect("home");
                }
            }
        })
    }

}

module.exports = new CompleteController;