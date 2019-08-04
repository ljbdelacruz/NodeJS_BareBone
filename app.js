//#region modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('./node_modules/body-parser');
var app = express();
var server=require('http').createServer(app);
var cors = require('cors');
app.use(cors());

app.use(bodyParser.json())
//#endregion

//#region variables
const db = require('./app/config/rentme/dbconfig.js');
const env = require('./app/config/rentme/global.js');
var connection=require('./services/Plugins/ljnodelinq');
const port = env.http;
//#endregion

//#region db population
//#region ads
var adsS=require('./app/seeders/rentme/ads.seender');
var adsImageS=require('./app/seeders/rentme/adsImage.seeder')
var userInformationS=require('./app/seeders/rentme/userInformation.seeder')
var rentRequestS=require('./app/seeders/rentme/rentRequest.seeder')
//#endregion

var categoryS=require('./app/seeders/rentme/category.seeder')

//#region reviews
var userReviewS=require('./app/seeders/rentme/userReview.seeder')
var adsReviewS=require('./app/seeders/rentme/adsReview.seeder')
var hostReviewS=require('./app/seeders/rentme/hostReviews.seeder')
//#endregion

if(env.migrate == true) {
	db.sequelize.sync({force: true}).then(() => {
    console.log("DB Migration Success")
    categoryS.seed();
    adsS.seed();
    adsImageS.seed();
    userInformationS.seed();
    rentRequestS.seed();
    userReviewS.seed();
    adsReviewS.seed();
    hostReviewS.seed();
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

//#region ads
var adsRouter = require('./routes/rentmeapi/ads.api');
app.use('/ads', adsRouter);
var rentRequest=require('./routes/rentmeapi/rentrequest.api');
app.use('/rentrequest', rentRequest);
var adsImageRouter=require('./routes/rentmeapi/adsImage.api');
app.use('/adsimage', adsImageRouter);
//#endregion

//#region category
var categoryRouter=require('./routes/rentmeapi/categories.api')
app.use('/category', categoryRouter);
var subCategoryRouter=require('./routes/rentmeapi/subcategory.api')
app.use('/subcategory', subCategoryRouter);
//#endregion

var userRouter=require('./routes/rentmeapi/user.api');
app.use('/user', userRouter);

//#region ratings
var userRatingRouter=require('./routes/rentmeapi/userRatings.api');
app.use('/userrating', userRatingRouter)
var hostRatingRouter=require('./routes/rentmeapi/hostRatings.api')
app.use('/hostrating', hostRatingRouter)
var adsRatingReview=require('./routes/rentmeapi/adsRating.api');
app.use('/adsrating', adsRatingReview)
//#endregion


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

