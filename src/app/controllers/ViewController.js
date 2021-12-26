const res = require("express/lib/response");
var db = require("../models/index");
const fs = require('fs');

class ViewController {

    // [GET] /view
    index(req, res) {
        db.query("SELECT * FROM nguoi_dan;", function(err, results) {
            if (err) throw err;
            var data = JSON.stringify(results);
            fs.writeFileSync('src/public/ASSETS/data_vietnam_province/nguoidan.json', data);
        });


        if (req.cookies.a1) {
            res.render('view', {username: req.cookies.username, dinh_danh: 1});
        } else if (req.cookies.a2) {
            res.render('view', {username: req.cookies.username, hidden_province: "hidden", dinh_danh: 2, code: req.cookies.id});
        } else if (req.cookies.a3) {
            res.render('view', {username: req.cookies.username, hidden_province: "hidden", hidden_district: "hidden", dinh_danh: 3, code: req.cookies.id});
        } else {
            res.render('view', {username: req.cookies.username, hidden_province: "hidden", hidden_district: "hidden", hidden_subdistrict: "hidden", dinh_danh: 4, code: req.cookies.id});
        }
        
    }

    // [GET] /view/:cccd
    search(req, res) {
        res.cookie('cccd', req.params.cccd, { expires: new Date(Date.now() + 900000)});
        res.redirect("detail");
    }

    // [GET /view/detail
    detail(req, res) {
        var cccd = req.cookies.cccd;
        db.query("SELECT * FROM nguoi_dan WHERE cccd = ?", [cccd], function(err, results) {
            if (err) {
                res.status(404).send('ERROR!!!')
            }
            else {
                db.query("SELECT dth.thon, dx.xa, dh.huyen, dt.tinh FROM nguoi_dan nd JOIN data_thon dth ON nd.id_thon = dth.id JOIN data_xa dx ON dth.id_xa = dx.id JOIN data_huyen dh ON dx.id_huyen = dh.id JOIN data_tinh dt ON dh.id_tinh = dt.id WHERE cccd = ?", [cccd], function(err, results1) {
                    if (err) {
                        res.status(404).send('ERROR!!!')
                    } else {
                        var que = results1[0].thon + ", " + results1[0].xa + ", " + results1[0].huyen + ", " + results1[0].tinh;
                        if (req.cookies.a1 || req.cookies.a2 || req.cookies.a3) {
                            res.render('detail', {username: req.cookies.username, name: results[0].name, cccd: results[0].cccd, dob: results[0].dob, gender: results[0].gioi_tinh, que: que, religion: results[0].ton_giao, thuong_tru: results[0].thuong_tru, tam_tru: results[0].tam_tru, job: results[0].nghe_nghiep, hidden_delete: "hidden"});
                        } else {
                            res.render('detail', {username: req.cookies.username, name: results[0].name, cccd: results[0].cccd, dob: results[0].dob, gender: results[0].gioi_tinh, que: que, religion: results[0].ton_giao, thuong_tru: results[0].thuong_tru, tam_tru: results[0].tam_tru, job: results[0].nghe_nghiep});
                        }
                    }
                })
                
            }     
        });
    }

}

module.exports = new ViewController;