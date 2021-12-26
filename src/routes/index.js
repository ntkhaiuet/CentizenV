const loginRouter = require("./login")
const homeRouter = require("./home");
const addRouter = require("./add");
const logoutRouter = require("./logout");
const createaccountRouter = require("./createaccount");
const inputRouter = require("./input");
const viewRouter = require("./view");
const editRouter = require("./edit");
const deleteRouter = require("./delete");
const khaibaoRouter = require("./khaibao");
const theodoiRouter = require("./theodoi");
const completeRouter = require("./complete");

function route(app) {

    app.use('/complete', completeRouter);
    app.use('/theodoi', theodoiRouter);
    app.use('/khaibao', khaibaoRouter);
    app.use('/delete', deleteRouter);
    app.use('/edit', editRouter);
    app.use('/view', viewRouter);
    app.use('/input', inputRouter);
    app.use('/create_account', createaccountRouter);
    app.use('/logout', logoutRouter);
    app.use('/add', addRouter);
    app.use('/home', homeRouter);
    app.use('/', loginRouter);
    
}

module.exports = route;