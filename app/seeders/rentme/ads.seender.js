const db = require('../../config/rentme/dbconfig');
const Ads = db.Ads;
exports.seed = () => {
	Ads.create({
        title: "Jojos Crib",
        description:"very clean and bright",
        price:200,
        currencyCode:840,
        ownerID:1,
        categoryID:1,
        priority:1,
        longitude:0,
        latitude:0,
        unitIdentifier:"SERIAL: 101",
        rentedByUserID:1,
        rentedAt:"12/05/1995",
        returnDate:"12/20/1995",
        available:false,
        createdAt:"12/05/1995",
        updatedAt:"12/05/1995"
    });
    Ads.create({
        title: "Jojos Bistro ",
        description:"very clean and bright",
        price:200,
        currencyCode:840,
        ownerID:1,
        categoryID:1,
        priority:1,
        longitude:0,
        latitude:0,
        unitIdentifier:"SERIAL: 101",
        rentedByUserID:1,
        rentedAt:"12/05/1995",
        returnDate:"12/20/1995",
        available:false,
        createdAt:"12/05/1995",
        updatedAt:"12/05/1995"
	});
}
