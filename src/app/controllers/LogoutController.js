const res = require("express/lib/response");

class LogoutController {

    // [GET] /logout
    index(req, res) {
        res.clearCookie('id');
        res.clearCookie('username');
        res.clearCookie('content1');
        res.clearCookie('content2');
        res.clearCookie('content3');
        res.clearCookie('link1');
        res.clearCookie('link2');
        res.clearCookie('link3');
        res.clearCookie('label1');
        res.clearCookie('a1');
        res.clearCookie('a2');
        res.clearCookie('a3');
        res.clearCookie('b1');
        res.clearCookie('b2');
        res.clearCookie('hidden');
        res.clearCookie('id_xa');
        res.clearCookie('id_huyen');
        res.clearCookie('id_tinh');
        res.clearCookie('hidden_input');
        res.clearCookie('hidden_khaibao');
        res.redirect('/');
    }

}

module.exports = new LogoutController;