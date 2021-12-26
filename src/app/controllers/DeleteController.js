const res = require("express/lib/response");
var db = require("../models/index");

class DeleteController {

    // [GET] /news
    index(req, res) {
        db.query("DELETE FROM nguoi_dan WHERE cccd = ?", [req.cookies.cccd], function(err, results) {
            if (err) {
                res.status(404).send('ERROR!!!')
            } else {
                res.redirect('view');
            }
        });
    }
}

module.exports = new DeleteController;