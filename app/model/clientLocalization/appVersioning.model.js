module.exports = (sequelize, Sequelize) => {
	const CLAppVersioning = sequelize.define('clappversioning', {
      id:{
        type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement:true       
      },
			version:{
						type: Sequelize.STRING,
			},
			appid: {
					type: Sequelize.STRING
			}
	});

	return CLAppVersioning;
}
