const db = require('../../config/rentme/dbconfig');
const AdImage = db.AdImage;
exports.seed = () => {
	AdImage.create({
        adsID:1,
        source:"image1 test",
        UID:"1ee",
        UID2:"2ee"
    });
    AdImage.create({
        adsID:2,
        source:"image2 test",
        UID:"3ee",
        UID2:"4ee"
    });
}
