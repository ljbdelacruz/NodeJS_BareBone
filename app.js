//#region modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('./node_modules/body-parser');
var app = express();
var server=require('http').createServer(app);
app.use(bodyParser.json())
//#endregion

//#region variables
const db = require('./app/config/dbconfig.js');
const env = require('./app/config/global.js');
var connection=require('./services/Plugins/ljnodelinq');
const port = env.http;
//#endregion


//#region db population
// var category=require('./app/seeders/rentme/category.seeder')
// if(env.migrate == true) {
// 	db.sequelize.sync({force: true}).then(() => {
//     console.log("DB Migration Success")
//     category.seed();
// 	});
// }

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
var adsRouter = require('./routes/rentmeapi/ads.api');
app.use('/ads', adsRouter);
var categoryRouter=require('./routes/rentmeapi/categories.api')
app.use('/category', categoryRouter);
var subCategoryRouter=require('./routes/rentmeapi/subcategory.api')
app.use('/subcategory', subCategoryRouter);
var userRouter=require('./routes/rentmeapi/user.api');
app.use('/user', userRouter);
var userRatingRouter=require('./routes/rentmeapi/userRatings.api');
app.use('/userrating', userRatingRouter)
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

