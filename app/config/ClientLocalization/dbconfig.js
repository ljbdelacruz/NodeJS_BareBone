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

db.CLLocalization=require('../../model/clientLocalization/localization.model')(sequelize, Sequelize);
db.CLAppVersioning=require('../../model/clientLocalization/appVersioning.model')(sequelize, Sequelize);

module.exports = db;
