const res = require("express/lib/response");
var VarLogin = require('./LoginController');

class HomeController {

    // [GET] /news
    index(req, res) {
        res.render('home', {username: req.cookies.username, content1: req.cookies.content1, link1: req.cookies.link1, content2: req.cookies.content2, link2: req.cookies.link2});
    }

    // [GET] /news/:slug
    // show(req, res) {
    //     res.send('new detail');
    // }
}

module.exports = new HomeController;