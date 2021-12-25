const res = require("express/lib/response");

class LogoutController {

    // [GET] /news
    index(req, res) {
        res.clearCookie('daDangNhap');
        res.clearCookie('username');
        res.clearCookie('content1');
        res.clearCookie('content2');
        res.clearCookie('link1');
        res.clearCookie('link2');
        res.redirect('/');
    }

    // [POST] /add
    // add(req, res) {
    //     console.log(req.body.id);
    //     res.redirect('/home');
    // }

    // [GET] /news/:slug
    // show(req, res) {
    //     res.send('new detail');
    // }
}

module.exports = new LogoutController;