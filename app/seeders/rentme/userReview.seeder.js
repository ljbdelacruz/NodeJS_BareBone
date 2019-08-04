const db = require('../../config/rentme/dbconfig');
const UserReview = db.UserReview;
exports.seed = () => {
	UserReview.create({
        hostID:1,
        rating:4,
        description:"very responsive and great but service provided is ok",
        userID:1,
    })
    UserReview.create({
        hostID:2,
        rating:2,
        description:"not responsive and rude",
        userID:2,
    });
}
