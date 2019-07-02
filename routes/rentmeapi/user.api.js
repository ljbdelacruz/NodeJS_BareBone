var express = require('express');
var router = express.Router();


router.post('/auth', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.send({username:'ljbdelacruz', accessToken:'1ee'})
});


