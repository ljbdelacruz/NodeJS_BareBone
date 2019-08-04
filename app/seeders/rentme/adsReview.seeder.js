const db = require('../../config/rentme/dbconfig');
const AdsReview = db.AdsReview;
exports.seed = () => {
	AdsReview.create({
        userID:1,
        rating:4,
        description:"working all",
        adID:1,        
    })
    AdsReview.create({
        userID:2,
        rating:2,
        description:"bad services do not use",
        adID:2,        
    });
}
