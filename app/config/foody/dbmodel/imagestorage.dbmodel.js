module.exports = (sequelize, Sequelize) => {
	const ImageStorage = sequelize.define('ImageStorage', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true        
    },
	source:{
        type: Sequelize.STRING,
    },
    //this is where you categorize the image on which this belongs to wether products, user? and etc
	type:{
        type: Sequelize.STRING,
    },    
    //here sets the owner of the image ID, product, user and etc
    ownerId: {
        type: Sequelize.UUID
    },
	});
	return Product;
}


