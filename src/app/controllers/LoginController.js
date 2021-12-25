const { redirect } = require("express/lib/response");
const res = require("express/lib/response");
var db = require("../models/index");
const fs = require('fs');


var content1;
var content2;
var link1;
var link2;

class LoginController {

    // [GET] /login
    index(req, res) {
        res.render('login');
    }

    // [POST] /login/auth
    auth(req, res) {
        var id_a2 = /[0-9][0-9]/;
        if (id_a2.test(req.body.fullname)) {
            db.query("SELECT * FROM data_tinh WHERE id = ? AND password_manager = ?", [req.body.fullname, req.body.password], function(err, results) {
                if (err) {
                    res.status(404).send('ERROR!!!')
                } else {
                    if (results.length === 0) {
                        res.redirect('/');
                    } else {
                        var u = results[0].id;
                        content1 = "Thêm Quận/Huyện";
                        content2 = "Cấp tài khoản"
                        link1 = "/add";
                        link2 = "/create_account";
                        let sess = req.session;
                        sess.daDangNhap = true;
                        sess.username = u + " - " + results[0].tinh;
                        sess.content1 = content1;
                        sess.link1 = link1;
                        sess.content2 = content2;
                        sess.link2 = link2;
                        res.redirect("auth");
                    }
                }
            })      
        } else {
            db.query("SELECT * FROM user_a1 WHERE username = ? AND password = ?", [req.body.fullname, req.body.password], function(err, results) {
                if (err) {
                    res.status(404).send('ERROR!!!')
                }
                else {
                    if (results.length === 0) {
                        res.redirect('/');
                    }
                    else {
                        var u = results[0].username;
                        content1 = "Thêm Tỉnh/Thành phố";
                        content2 = "Cấp tài khoản"
                        link1 = "/add";
                        link2 = "/create_account";
                        // var sess = req.session;
                        // sess.daDangNhap = true;
                        // sess.username = u;
                        // sess.content1 = content1;
                        // sess.link1 = link1;
                        // sess.content2 = content2;
                        // sess.link2 = link2;
                        res.cookie('daDangNhap', true, { expires: new Date(Date.now() + 900000)});
                        res.cookie('username', u, { expires: new Date(Date.now() + 900000)});
                        res.cookie('content1', content1, { expires: new Date(Date.now() + 900000)});
                        res.cookie('content2', content2, { expires: new Date(Date.now() + 900000)});
                        res.cookie('link1', link1, { expires: new Date(Date.now() + 900000)});
                        res.cookie('link2', link2, { expires: new Date(Date.now() + 900000)});
                        res.redirect("auth");
                    }
                }     
            });
        }
    }

    // [GET] /login/auth
    getAuth(req, res) {
        db.query("SELECT id, tinh FROM data_tinh;", function(err, results) {
            if (err) throw err;
            var data = JSON.stringify(results);
            fs.writeFileSync('src/public/ASSETS/data_vietnam_province/tinh1.json', data);
        })
        res.redirect("home");
    }
}
module.exports = new LoginController;