const env = {
	debug: false,
	//Database Service
	database: 'DB1',
	username: 'ljbdelacruz',
	password: 'soyamilk_05',
	host: 'mongodb+srv://db1-uyc2y.gcp.mongodb.net/test',
	dialect: 'mysql',
	migrate: true,
	//HTTP & HTTPS Service
	key: './security/cert.key',
	cert: './security/cert.pem',
	https: 443,
	http: 8080,
	//Token Config
	tokenValidity: 2678400
};

module.exports=env;
