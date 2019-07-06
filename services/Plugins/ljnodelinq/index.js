var mysqlConfig=require('./mysqlconfig');
// var mysqlConfig=require('../../../routes/rentmeapi/data/dbconfig.rentme')
var selectFunc=require('./select')
var insertFunc=require('./insert');

module.exports={
    mysqlConfig:mysqlConfig,
    selectFunc:selectFunc,
    insertFunc:insertFunc
}