const db = require('../../config/rentme/dbconfig');
const UserReview = db.UserReview;
const uuidv1 = require('uuid/v1');

exports.seed = () => {
	UserReview.create({
        id:uuidv1(),
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
    UserReview.create({
        id:uuidv1(),
        firstname:"Senko",
        lastname:"Musashi",
        profileimage:"senku",
        registration:"facebook",
        socialUID:"2ee",
        contactNumber:"09394242879",
        emailAddress:"senku@gmail.com",
        isVerified:false,
        isHost:false
    })
}
