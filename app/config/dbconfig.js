//Load ENV Vars
const env = require('./global.js');
//Init Sequelize for ORM
const Sequelize = require('../../node_modules/sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.dbHost,
  dialect: env.dialect,
  operatorsAliases: false,
  logging: env.debug,
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//#region rentme db
db.ads=require('../model/rentmeapi/ads.model')(sequelize, Sequelize);


//#endregion




//Relationship ORM
//Users and roles
// db.role.belongsToMany(db.user, { through: 'user_roles', foreignKey: 'roleId', otherKey: 'userId'});
// db.user.belongsToMany(db.role, { through: 'user_roles', foreignKey: 'userId', otherKey: 'roleId'});
//Category and subCategory
// db.subcategory.belongsToMany(db.category, { through: 'category_sub', foreignKey: 'subCategoryID', otherKey: 'categoryID'})
// db.category.belongsToMany(db.subcategory, { through: 'category_sub', foreignKey: 'categoryID', otherKey: 'subCategoryID'})
//Stores and Category
// db.category.belongsToMany(db.stores, {through: 'store_category', foreignKey: 'categoryID', otherKey: 'storeID'})





module.exports = db;
