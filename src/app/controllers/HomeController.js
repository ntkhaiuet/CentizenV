const res = require("express/lib/response");
const fs = require('fs');
var db = require("../models/index");
// var VarLogin = require('./LoginController');

class HomeController {

    // [GET] /news
    index(req, res) {
        db.query("SELECT id, tinh FROM data_tinh;", function(err, results) {
            if (err) throw err;
            var data = JSON.stringify(results);
            fs.writeFileSync('src/public/ASSETS/data_vietnam_province/tinh.json', data);
        })
        db.query("SELECT id, huyen, id_tinh FROM data_huyen;", function(err, results) {
            if (err) throw err;
            var data = JSON.stringify(results);
            fs.writeFileSync('src/public/ASSETS/data_vietnam_province/huyen.json', data);
        })
        db.query("SELECT id, xa, id_huyen FROM data_xa;", function(err, results) {
            if (err) throw err;
            var data = JSON.stringify(results);
            fs.writeFileSync('src/public/ASSETS/data_vietnam_province/xa.json', data);
        })
        db.query("SELECT id, thon, id_xa FROM data_thon;", function(err, results) {
            if (err) throw err;
            var data = JSON.stringify(results);
            fs.writeFileSync('src/public/ASSETS/data_vietnam_province/thon.json', data);
        })
        db.query("SELECT * FROM nguoi_dan;", function(err, results) {
            if (err) throw err;
            var data = JSON.stringify(results);
            fs.writeFileSync('src/public/ASSETS/data_vietnam_province/nguoidan.json', data);
        });
        if (req.cookies.b1) {
            if (req.cookies.hidden_input === "hidden") {
                res.render('home', {username: req.cookies.username, content1: req.cookies.content1, link1: req.cookies.link1, content2: req.cookies.content2, link2: req.cookies.link2, content3: req.cookies.content3, link3: req.cookies.link3, hidden: req.cookies.hidden_input, hidden_khaibao: req.cookies.hidden_input, hidden_province: "hidden", hidden_district: "hidden", hidden_subdistrict: "hidden", code: req.cookies.id, dinh_danh: 4});
            } else {
                res.render('home', {username: req.cookies.username, content1: req.cookies.content1, link1: req.cookies.link1, content2: req.cookies.content2, link2: req.cookies.link2, content3: req.cookies.content3, link3: req.cookies.link3, hidden: req.cookies.hidden, hidden_province: "hidden", hidden_district: "hidden", hidden_subdistrict: "hidden", code: req.cookies.id, dinh_danh: 4});
            }
        } else if (req.cookies.a3) {
            if (req.cookies.hidden_khaibao === "hidden") {
                res.render('home', {username: req.cookies.username, content1: req.cookies.content1, link1: req.cookies.link1, content2: req.cookies.content2, link2: req.cookies.link2, content3: req.cookies.content3, link3: req.cookies.link3, hidden: req.cookies.hidden, hidden_khaibao: req.cookies.hidden_khaibao, hidden_province: "hidden", hidden_district: "hidden", code: req.cookies.id, dinh_danh: 3});
            } else {
                res.render('home', {username: req.cookies.username, content1: req.cookies.content1, link1: req.cookies.link1, content2: req.cookies.content2, link2: req.cookies.link2, content3: req.cookies.content3, link3: req.cookies.link3, hidden: req.cookies.hidden, hidden_province: "hidden", hidden_district: "hidden", code: req.cookies.id, dinh_danh: 3});
            }
        } else if (req.cookies.a2) {
            if (req.cookies.hidden_khaibao === "hidden") {
                res.render('home', {username: req.cookies.username, content1: req.cookies.content1, link1: req.cookies.link1, content2: req.cookies.content2, link2: req.cookies.link2, content3: req.cookies.content3, link3: req.cookies.link3, hidden: req.cookies.hidden, hidden_khaibao: req.cookies.hidden_khaibao, hidden_province: "hidden", code: req.cookies.id, dinh_danh: 2});
            } else {
                res.render('home', {username: req.cookies.username, content1: req.cookies.content1, link1: req.cookies.link1, content2: req.cookies.content2, link2: req.cookies.link2, content3: req.cookies.content3, link3: req.cookies.link3, hidden: req.cookies.hidden, hidden_province: "hidden", code: req.cookies.id, dinh_danh: 2});
            }
        } else {
            res.render('home', {username: req.cookies.username, content1: req.cookies.content1, link1: req.cookies.link1, content2: req.cookies.content2, link2: req.cookies.link2, content3: req.cookies.content3, link3: req.cookies.link3, hidden: req.cookies.hidden, dinh_danh: 1});
        }
        
    }

    // [GET] /news/:slug
    // show(req, res) {
    //     res.send('new detail');
    // }
}

module.exports = new HomeController;