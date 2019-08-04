const db = require('../../config/rentme/dbconfig');
const HostReviews = db.HostReviews;
exports.seed = () => {
	HostReviews.create({
        userID:1,
        rating:4,
        description:"very responsive and great but service provided is ok",
        hostID:1,
    })
    HostReviews.create({
        userID:2,
        rating:2,
        description:"not responsive and rude",
        hostID:2,
    });
}
