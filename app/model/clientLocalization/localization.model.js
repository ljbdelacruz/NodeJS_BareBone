module.exports = (sequelize, Sequelize) => {
	const CLLocalization = sequelize.define('cllocalization', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true        
    },
	  key:{
        type: Sequelize.STRING,
	  },
	  value: {
	  	  type: Sequelize.STRING
	  },
    langID: {
        type: Sequelize.INTEGER
    },
    appID: {
        type: Sequelize.STRING
    }
	});

	return CLLocalization;
}
