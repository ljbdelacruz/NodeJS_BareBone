//Load ENV Vars
const env = require('./global.js');
//Init Sequelize for ORM
const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.dbHost,
  dialect: env.dialect,
  operatorsAliases: false,
  logging: env.debug,
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Category=require('./dbmodel/foodcategory.dbmodel');
db.ImageStorage=require('./dbmodel/imagestorage.dbmodel');
//TODO: Product
db.Product=require('./dbmodel/product.dbmodel');
//TODO: Cart
db.UserCart=require('./dbmodel/usercart.dbmodel');
db.UserCartItem=require('./dbmodel/usercartitem.dbmodel');
//TODO: Users Info
db.UsersInfo=require('./dbmodel/usersinfo.dbmodel');
//TODO: Users store
db.UserStore=require('./dbmodel/userstore.dbmodel');


module.exports = db;


