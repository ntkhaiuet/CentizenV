const { redirect } = require("express/lib/response");
const res = require("express/lib/response");
var db = require("../models/index");

class LoginController {

    // [GET] /login
    index(req, res) {
        res.render('login');
    }

    // [POST] /login/auth
    auth(req, res) {
        var id_b2 = /[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/;
        var id_b1 = /[0-9][0-9][0-9][0-9][0-9][0-9]/;
        var id_a3 = /[0-9][0-9][0-9][0-9]/;
        var id_a2 = /[0-9][0-9]/;
        if (id_b2.test(req.body.fullname)) {
            db.query("SELECT * FROM data_thon WHERE id = ? AND password_manager = ?", [req.body.fullname, req.body.password], function(err, results) {
                if (err) {
                    res.status(404).send('ERROR!!!')
                } else {
                    if (results.length === 0) {
                        res.redirect('/');
                    } else {
                        var u = results[0].id + " - " + results[0].thon;
                        res.cookie('id', results[0].id, { expires: new Date(Date.now() + 900000)});
                        res.cookie('username', u, { expires: new Date(Date.now() + 900000)});
                        // res.cookie('content1', "Thêm Thôn/Bản/TDP", { expires: new Date(Date.now() + 900000)});
                        // res.cookie('content2', "Cấp tài khoản", { expires: new Date(Date.now() + 900000)});
                        // res.cookie('link1', "/add", { expires: new Date(Date.now() + 900000)});
                        // res.cookie('link2', "/create_account", { expires: new Date(Date.now() + 900000)});
                        res.cookie('label1', "thôn/bản/tổ dân phố", { expires: new Date(Date.now() + 900000)});
                        res.cookie('b2', true, { expires: new Date(Date.now() + 900000)});
                        res.cookie('hidden', "hidden", { expires: new Date(Date.now() + 900000)});
                        res.cookie('id_xa', results[0].id_xa, { expires: new Date(Date.now() + 900000)});
                        res.redirect("auth");
                    }
                }
            }); 
        } else if (id_b1.test(req.body.fullname)) {
            db.query("SELECT * FROM data_xa WHERE id = ? AND password_manager = ?", [req.body.fullname, req.body.password], function(err, results) {
                if (err) {
                    res.status(404).send('ERROR!!!')
                } else {
                    if (results.length === 0) {
                        res.redirect('/');
                    } else {
                        var u = results[0].id + " - " + results[0].xa;
                        res.cookie('id', results[0].id, { expires: new Date(Date.now() + 900000)});
                        res.cookie('username', u, { expires: new Date(Date.now() + 900000)});
                        res.cookie('content1', "Thêm Thôn/Bản/TDP", { expires: new Date(Date.now() + 900000)});
                        res.cookie('content2', "Cấp tài khoản", { expires: new Date(Date.now() + 900000)});
                        res.cookie('content3', "Xem chi tiết", { expires: new Date(Date.now() + 900000)});
                        res.cookie('link1', "/add", { expires: new Date(Date.now() + 900000)});
                        res.cookie('link2', "/create_account", { expires: new Date(Date.now() + 900000)});
                        res.cookie('link3', "/view", { expires: new Date(Date.now() + 900000)});
                        res.cookie('label1', "thôn/bản/tổ dân phố", { expires: new Date(Date.now() + 900000)});
                        res.cookie('b1', true, { expires: new Date(Date.now() + 900000)});
                        res.cookie('hidden', "", { expires: new Date(Date.now() + 900000)});
                        res.cookie('id_huyen', results[0].id_huyen, { expires: new Date(Date.now() + 900000)});
                        res.redirect("auth");
                    }
                }
            }); 
        } else if (id_a3.test(req.body.fullname)) {
            db.query("SELECT * FROM data_huyen WHERE id = ? AND password_manager = ?", [req.body.fullname, req.body.password], function(err, results) {
                if (err) {
                    res.status(404).send('ERROR!!!')
                } else {
                    if (results.length === 0) {
                        res.redirect('/');
                    } else {
                        var u = results[0].id + " - " + results[0].huyen;
                        res.cookie('id', results[0].id, { expires: new Date(Date.now() + 900000)});
                        res.cookie('username', u, { expires: new Date(Date.now() + 900000)});
                        res.cookie('content1', "Thêm Phường/Xã", { expires: new Date(Date.now() + 900000)});
                        res.cookie('content2', "Cấp tài khoản", { expires: new Date(Date.now() + 900000)});
                        res.cookie('content3', "Xem chi tiết", { expires: new Date(Date.now() + 900000)});
                        res.cookie('link1', "/add", { expires: new Date(Date.now() + 900000)});
                        res.cookie('link2', "/create_account", { expires: new Date(Date.now() + 900000)});
                        res.cookie('link3', "/view", { expires: new Date(Date.now() + 900000)});
                        res.cookie('label1', "phường/xã", { expires: new Date(Date.now() + 900000)});
                        res.cookie('a3', true, { expires: new Date(Date.now() + 900000)});
                        res.cookie('hidden', "hidden", { expires: new Date(Date.now() + 900000)});
                        res.cookie('id_tinh', results[0].id_tinh, { expires: new Date(Date.now() + 900000)});
                        res.redirect("auth");
                    }
                }
            }); 
        } else if (id_a2.test(req.body.fullname)) {
            db.query("SELECT * FROM data_tinh WHERE id = ? AND password_manager = ?", [req.body.fullname, req.body.password], function(err, results) {
                if (err) {
                    res.status(404).send('ERROR!!!')
                } else {
                    if (results.length === 0) {
                        res.redirect('/');
                    } else {
                        var u = results[0].id + " - " + results[0].tinh;
                        res.cookie('id', results[0].id, { expires: new Date(Date.now() + 900000)});
                        res.cookie('username', u, { expires: new Date(Date.now() + 900000)});
                        res.cookie('content1', "Thêm Quận/Huyện", { expires: new Date(Date.now() + 900000)});
                        res.cookie('content2', "Cấp tài khoản", { expires: new Date(Date.now() + 900000)});
                        res.cookie('content3', "Xem chi tiết", { expires: new Date(Date.now() + 900000)});
                        res.cookie('link1', "/add", { expires: new Date(Date.now() + 900000)});
                        res.cookie('link2', "/create_account", { expires: new Date(Date.now() + 900000)});
                        res.cookie('link3', "/view", { expires: new Date(Date.now() + 900000)});
                        res.cookie('label1', "quận/huyện", { expires: new Date(Date.now() + 900000)});
                        res.cookie('a2', true, { expires: new Date(Date.now() + 900000)});
                        res.cookie('hidden', "hidden", { expires: new Date(Date.now() + 900000)});
                        res.redirect("auth");
                    }
                }
            });    
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
                        var u = results[0].id + " - " + results[0].username;
                        res.cookie('id', "", { expires: new Date(Date.now() + 900000)});
                        res.cookie('username', u, { expires: new Date(Date.now() + 900000)});
                        res.cookie('content1', "Thêm Tỉnh/TP", { expires: new Date(Date.now() + 900000)});
                        res.cookie('content2', "Cấp tài khoản", { expires: new Date(Date.now() + 900000)});
                        res.cookie('content3', "Xem chi tiết", { expires: new Date(Date.now() + 900000)});
                        res.cookie('link1', "/add", { expires: new Date(Date.now() + 900000)});
                        res.cookie('link2', "/create_account", { expires: new Date(Date.now() + 900000)});
                        res.cookie('link3', "/view", { expires: new Date(Date.now() + 900000)});
                        res.cookie('label1', "tỉnh/thành phố", { expires: new Date(Date.now() + 900000)});
                        res.cookie('a1', true, { expires: new Date(Date.now() + 900000)});
                        res.cookie('hidden', "hidden", { expires: new Date(Date.now() + 900000)});
                        res.redirect("auth");
                    }
                }     
            });
        }

    }

    // [GET] /login/auth
    getAuth(req, res) {
        if (req.cookies.b2) {
            db.query("SELECT open, close FROM khaibao WHERE id = ?", [req.cookies.id_xa], function(err, results) {
                if (err) {
                    res.status(404).send('ERROR!!!')
                }
                else {
                    if (results.length === 0) {
                        res.send("Chưa mở đợt khai báo");
                    }
                    else {
                        if (Date.now() >= results[0].open && Date.now() <= results[0].close) {
                            db.query("SELECT open, close FROM khaibao WHERE id = ?", [req.cookies.id_xa.substring(0,4)], function(err, results1) {
                                if (err) {
                                    res.status(404).send('ERROR!!!')
                                }
                                else {
                                    if (results1.length === 0) {
                                        res.send("Chưa mở đợt khai báo");
                                    }
                                    else {
                                        if (Date.now() >= results1[0].open && Date.now() <= results1[0].close) {
                                            db.query("SELECT open, close FROM khaibao WHERE id = ?", [req.cookies.id_xa.substring(0,2)], function(err, results2) {
                                                if (err) {
                                                    res.status(404).send('ERROR!!!')
                                                }
                                                else {
                                                    if (results2.length === 0) {
                                                        res.send("Chưa mở đợt khai báo");
                                                    }
                                                    else {
                                                        if (Date.now() >= results2[0].open && Date.now() <= results2[0].close) {
                                                            db.query("SELECT open, close FROM khaibao WHERE a1 = ? LIMIT 1", ['1'], function(err, results3) {
                                                                if (err) {
                                                                    res.status(404).send('ERROR!!!')
                                                                }
                                                                else {
                                                                    if (results3.length === 0) {
                                                                        res.send("Chưa mở đợt khai báo");
                                                                    }
                                                                    else {
                                                                        if (Date.now() >= results3[0].open && Date.now() <= results3[0].close) {
                                                                            res.redirect("input");
                                                                        } else {
                                                                            res.send("Chưa mở đợt khai báo");
                                                                        }
                                                                    }
                                                                }     
                                                            });
                                                        } else {
                                                            res.send("Chưa mở đợt khai báo");
                                                        }
                                                    }
                                                }     
                                            });
                                        } else {
                                            res.send("Chưa mở đợt khai báo");
                                        }
                                    }
                                }     
                            });
                        } else {
                            res.send("Chưa mở đợt khai báo");
                        }
                    }
                }     
            });
        } else if (req.cookies.b1) {
            db.query("SELECT open, close FROM khaibao WHERE id = ?", [req.cookies.id_huyen], function(err, results) {
                if (err) {
                    res.status(404).send('ERROR!!!')
                }
                else {
                    if (results.length === 0) {
                        res.cookie('hidden_input', "hidden", { expires: new Date(Date.now() + 900000)});
                        res.redirect("home");
                    }
                    else {
                        if (Date.now() >= results[0].open && Date.now() <= results[0].close) {
                            db.query("SELECT open, close FROM khaibao WHERE id = ?", [req.cookies.id_huyen.substring(0,2)], function(err, results1) {
                                if (err) {
                                    res.status(404).send('ERROR!!!')
                                }
                                else {
                                    if (results1.length === 0) {
                                        res.cookie('hidden_input', "hidden", { expires: new Date(Date.now() + 900000)});
                                        res.redirect("home");
                                    }
                                    else {
                                        if (Date.now() >= results1[0].open && Date.now() <= results1[0].close) {
                                            db.query("SELECT open, close FROM khaibao WHERE a1 = ? LIMIT 1", ['1'], function(err, results2) {
                                                if (err) {
                                                    res.status(404).send('ERROR!!!')
                                                }
                                                else {
                                                    if (results2.length === 0) {
                                                        res.cookie('hidden_input', "hidden", { expires: new Date(Date.now() + 900000)});
                                                        res.redirect("home");
                                                    }
                                                    else {
                                                        if (Date.now() >= results2[0].open && Date.now() <= results2[0].close) {
                                                            res.redirect("home");
                                                        } else {
                                                            res.cookie('hidden_input', "hidden", { expires: new Date(Date.now() + 900000)});
                                                            res.redirect("home");
                                                        }
                                                    }
                                                }     
                                            });
                                        } else {
                                            res.cookie('hidden_input', "hidden", { expires: new Date(Date.now() + 900000)});
                                            res.redirect("home");
                                        }
                                    }
                                }     
                            });
                        } else {
                            res.cookie('hidden_input', "hidden", { expires: new Date(Date.now() + 900000)});
                            res.redirect("home");
                        }
                    }
                }     
            });
        } else if (req.cookies.a3) {
            db.query("SELECT open, close FROM khaibao WHERE id = ?", [req.cookies.id_tinh], function(err, results) {
                if (err) {
                    res.status(404).send('ERROR!!!')
                }
                else {
                    if (results.length === 0) {
                        res.cookie('hidden_khaibao', "hidden", { expires: new Date(Date.now() + 900000)});
                        res.redirect("home");
                    }
                    else {
                        if (Date.now() >= results[0].open && Date.now() <= results[0].close) {
                            db.query("SELECT open, close FROM khaibao WHERE a1 = ? LIMIT 1", ['1'], function(err, results1) {
                                if (err) {
                                    res.status(404).send('ERROR!!!')
                                }
                                else {
                                    if (results1.length === 0) {
                                        res.cookie('hidden_khaibao', "hidden", { expires: new Date(Date.now() + 900000)});
                                        res.redirect("home");
                                    }
                                    else {
                                        if (Date.now() >= results1[0].open && Date.now() <= results1[0].close) {
                                            res.redirect("home");
                                        } else {
                                            res.cookie('hidden_khaibao', "hidden", { expires: new Date(Date.now() + 900000)});
                                            res.redirect("home");
                                        }
                                    }
                                }     
                            });
                        } else {
                            res.cookie('hidden_khaibao', "hidden", { expires: new Date(Date.now() + 900000)});
                            res.redirect("home");
                        }
                    }
                }     
            });
        } else {
            db.query("SELECT open, close FROM khaibao WHERE a1 = ? LIMIT 1", ['1'], function(err, results) {
                if (err) {
                    res.status(404).send('ERROR!!!')
                }
                else {
                    if (results.length === 0) {
                        res.cookie('hidden_khaibao', "hidden", { expires: new Date(Date.now() + 900000)});
                        res.redirect("home");
                    }
                    else {
                        if (Date.now() >= results[0].open && Date.now() <= results[0].close) {
                            res.redirect("home");
                        } else {
                            res.cookie('hidden_khaibao', "hidden", { expires: new Date(Date.now() + 900000)});
                            res.redirect("home");
                        }
                    }
                }     
            });
        }
    }
}
module.exports = new LoginController;