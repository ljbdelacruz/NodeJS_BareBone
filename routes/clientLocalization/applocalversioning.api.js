
/*
    url: /applocalversion/
*/

var express = require('express');
var router = express.Router();
const dummy=require('../../app/seeders/dummy.data')
const global=require('../../app/config/ClientLocalization/global')
var repo=require('../../app/Repository/ClientLocalization/appVersioning.repo')
const NodeRSA = require('node-rsa');
const fs = require('fs')
const pem = require('pem-file')

const keyData="-----BEGIN RSA PRIVATE KEY-----"+
"MIICWgIBAAKBgHFFb2ghYW95A0hiFR/OXDKd8NRlndzIdIOF5JW4dTianOtM8mnN\n"+
"iEEuWnZqKEGZi5qwhLJdoLgu1/YwiXdhuk1clEW6Or+cxT+Nen0t2a4ARVo5brAy\n"+
"5Z1oL1QRu4GDDWIVO3kTtkZU69FHbyqCHvUdqQijiQUcCdNmhW85mILxAgMBAAEC\n"+
"gYBJhODXfHsKaEgaLhc56q3q6JqMsVvyFmWRjFEeYHgtAiWBkBLzW0Tp0ZVDsIlq\n"+
"cqerApFOV/jeMwFXOI+w3cyWUAMoeX2KjtxKjTSUHMiPHCvCnT8HcmBqduU3brMF\n"+
"3tdQcI0PdeztNUsFAIvdly8IDJtWQs5LT9tfYvvpNxsoQQJBANn2yLXiO0FY0YBy\n"+
"6Wy9/h6k4jUZGcnT0tqibu2dtTplJiJ6Wz8SaSFJSzXo4mYHUSVgMskvpt4pzg8m\n"+
"EFBTA5kCQQCFCah9PC01udQhUQQ1vRL66p2NjzuJrvW22AHkFcc3nLzQDMW6nVuE\n"+
"rP/xAi3sggxp11+TGeqlwjkMXWO4QBEZAkAtPpEDUGbEdc9nPnM942JwsgFSzFcS\n"+
"EipewAEOygHokT6NQaDXQtcX1cMK+cClNTee7o0cPgwBaeQgOOKCCflhAkBKP3mp\n"+
"a0xQD8Y0UeLnmv5cy1PjDW1NCjhYM3XatczZXMCD3Jz96ZSKF4NAHtdCh9Ilv+23\n"+
"S1+J4zuziut8iUUBAkBBdYyBWFx9p6J9//iMbcvflLwvdAAoUQSSmthAeXDGVjKq\n"+
"yvK3aS+QlrviY/15HAbGFcwjSJk3dF3diy8s/WuP\n"+
"-----END RSA PRIVATE KEY-----";

router.get('/checkVersion/:id', function(req, res, next){
    console.log(req.params.id);
    if(global.demo){
        res.send({desc:"DUMMY MODE"});
    }else{
        // repo.prototype.checkVersion(req.params.id, 
        //     function(local){
        //       res.send(local);
        //     }, function(err){
        //       res.send(err);
        //     }
        // )
        decryptStringWithRsaPrivateKey(req.params.id, "./routes/clientLocalization/private.pem", function(data){
            console.log(data);
        }, function(){})
    }
});



router.post('/decrypt', function(req, res, next){
    console.log("DATA")
    console.log(req.body.data);
    console.log(req.body);
    const key=NodeRSA({b: 512});
    key.setOptions({encryptionScheme: 'pkcs1'});
    key.importKey(keyData, 'pkcs1');
    const decrypted = key.decrypt(req.body.data, 'utf8');
    console.log("Decryption")
    console.log(decrypted);
    res.send({data:decrypted});
})


module.exports = router;