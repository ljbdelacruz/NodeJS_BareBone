const db = require('../../config/rentme/dbconfig');
const AdImage = db.AdImage;
const uuidv1 = require('uuid/v1');
exports.seed = () => {
	AdImage.create({
        id:uuidv1(),
        adsID:1,
        source:"image1 test",
        UID:"1ee",
        UID2:"2ee"
    });
    AdImage.create({
        id:uuidv1(),
        adsID:2,
        source:"image2 test",
        UID:"3ee",
        UID2:"4ee"
    });
}
