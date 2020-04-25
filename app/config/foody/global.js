const env = {
	debug: false,
	//Database Service
	database: 'foodyapi',
	username: 'root',
	password: 'soyamilk_05',
	//mongo db server do not use if not gonna use
	mdblocalhost: "mongodb://localhost:27017/foodyapi",
	//mysql db host
	//use this when running local db
	dbHost:'localhost',
	dialect: 'mysql',
	migrate: true,
	//if demo true it will use the dummy data
	demo:false,
	//HTTP & HTTPS Service
	key: './security/cert.key',
	cert: './security/cert.pem',
	https: 443,
	http: 8080,
	domain:'http://0.0.0.0/',
	//Token Config
	tokenValidity: 2678400,
	version1API:"/api/v1"
};

module.exports=env;
