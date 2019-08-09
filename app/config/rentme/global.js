const env = {
	debug: false,
	//Database Service
	database: 'rentmeapi',
	username: 'root',
	password: 'soyamilk_05',
	//mongo db server do not use if not gonna use
	mdbhost: 'mongodb+srv://db1-uyc2y.gcp.mongodb.net/test',
	//mysql db host
	//use this when running local db
	dbHost:'localhost',
	dialect: 'mysql',
	migrate: false,
	//if demo true it will use the dummy data
	demo:false,
	//HTTP & HTTPS Service
	key: './security/cert.key',
	cert: './security/cert.pem',
	https: 443,
	http: 8080,
	domain:'http://0.0.0.0/',
	//Token Config
	tokenValidity: 2678400
};

module.exports=env;
