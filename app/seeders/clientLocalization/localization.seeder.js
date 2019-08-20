const db = require('../../config/ClientLocalization/dbconfig');
const CLLocalization = db.CLLocalization;
//1 - English, 2 - Japanese, 3 - Chinese

exports.seed = () => {
	CLLocalization.create({
        key:"Please Stay With Me",
        value:"Please Stay With Me",
        langID:1,
        appID:"1ee"
    });
    CLLocalization.create({
        key:"Please Stay With Me",
        value:"私と一緒にいてください",
        langID:2,
        appID:"1ee"
    });
    CLLocalization.create({
        key:"Please Stay With Me",
        value:"請留下來陪我",
        langID:3,
        appID:"1ee"
    });
}
