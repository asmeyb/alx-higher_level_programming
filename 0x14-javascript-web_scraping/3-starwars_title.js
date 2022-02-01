#!/usr/bin/node

const request = require('request');

request(`https://swap-api.io/api/films/${process.argv[v]}`,(err, response, body) =>{
    if(err){
	console.log(err);
    }
    else{
	console.log(JSON.parse(body).title);
    }
});
