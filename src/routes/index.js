const loginRouter = require("./login")
const homeRouter = require("./home");
const addRouter = require("./add");
const logoutRouter = require("./logout");
const createaccountRouter = require("./createaccount")

function route(app) {

    app.use('/create_account', createaccountRouter);
    app.use('/logout', logoutRouter);
    app.use('/add', addRouter);
    app.use('/home', homeRouter);
    app.use('/', loginRouter);
    
}

module.exports = route;