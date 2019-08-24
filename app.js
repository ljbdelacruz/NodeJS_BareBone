//#region modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
var server=require('http').createServer(app);
var cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
// app.use(bodyParser);
app.use(bodyParser.json())
//#endregion

//#region variables
const db = require('./app/config/ClientLocalization/dbconfig');
const env = require('./app/config/ClientLocalization/global');
var connection=require('./services/Plugins/ljnodelinq');
const port = env.http;
//#endregion

//#region db population
var localizationS=require('./app/seeders/clientLocalization/localization.seeder')
var appLocalVersionS=require('./app/seeders/clientLocalization/appLocalVersion.seeder')
if(env.migrate == true) {
	db.sequelize.sync({force: true}).then(() => {
    localizationS.seed();
    appLocalVersionS.seed();
	});
}

//#endregion

//#region view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//#endregion

//#region rentme routers
var indexRouter = require('./routes/index');
app.use('/', indexRouter);
var localizationRouter=require('./routes/clientLocalization/localization.api')
app.use('/localization', localizationRouter)
var appLocalVersionRouter=require('./routes/clientLocalization/applocalversioning.api')
app.use('/applocalversion', appLocalVersionRouter)


//#endregion

//#region  error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next){
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
module.exports = app;
//#endregion

//#region server listening setup
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
server.listen(port, ()=>{
  console.log(`Example app listening on port ${port}!`)
});
//#endregion

//#region setup db connection
connection.mysqlConfig(env.dbHost, env.username, env.password, env.db, function(conn){
  //success
  var apis=require('./services/data');
  connection.selectFunc(conn);
  connection.insertFunc(conn);
}, function(){
  //failed
});
//#endregion

