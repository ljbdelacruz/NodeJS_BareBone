const db = require('../../config/rentme/dbconfig');
const RentRequest = db.RentRequest;
exports.seed = () => {
	RentRequest.create({
        userID:1,
        adID:1,
        hostID:1,
        message:"Hi can you accomodate me this june 20",
        dateBorrowStart:"07-20-2019",
        dateBorrowEnd:"07-23-2019",
        payable:2030.19,
        quantity:1,
        isApproved:false
    })
    RentRequest.create({
        userID:2,
        adID:2,
        hostID:2,
        message:"Hi can you accomodate me this june 30",
        dateBorrowStart:"07-30-2019",
        dateBorrowEnd:"08-1-2019",
        payable:30.40,
        quantity:2,
        isApproved:false
    });
}
