module.exports = (sequelize, Sequelize) => {
	const Product = sequelize.define('Product', {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true        
        },
        title:{
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING
        },
        price: {
            type: Sequelize.DOUBLE
        },
        ownerId: {
            type: Sequelize.UUID
        },
        storeUUID: {
            type: Sequelize.UUID
        },
        productReview: {
            type: Sequelize.DOUBLE
        },
    });
	return Product;
}


