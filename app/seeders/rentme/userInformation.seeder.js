const db = require('../../config/rentme/dbconfig');
const UserReview = db.UserReview;
exports.seed = () => {
	UserReview.create({
        firstname:"Lainel JOhn",
        lastname:"Dela Cruz",
        profileimage:"ldelacruz",
        registration:"facebook",
        socialUID:"1ee",
        contactNumber:"09394242879",
        emailAddress:"ldelacruz@gmail.com",
        isVerified:false,
        isHost:false
    })
}