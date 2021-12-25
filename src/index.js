const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const { extname, dirname } = require("path");
// const session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;

const route = require("./routes");

// Connect to DB
const db = require('./app/models/index');

// Folder static
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Express cookie
app.use(cookieParser());

// Express-session
// app.use(session({
//   secret: 'secret',
//   resave: true,
//   saveUninitialized: true,
//   cookie: { maxAge: 60000 }
// }));

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
