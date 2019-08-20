const db = require('../../config/ClientLocalization/dbconfig');
const CLAppVersioning = db.CLAppVersioning;
exports.seed = () => {
	CLAppVersioning.create({
        version:"v0.0",
        appid:"1ee"
    });
}