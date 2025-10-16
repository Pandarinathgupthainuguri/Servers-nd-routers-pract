const express = require('express');
const route = express.Router()
const {home} = require('../controlers/controlerHome')
// const user =require()
route.get('',home)
 route.get('home',home)

//  server.get('data',user)



module.exports(route);