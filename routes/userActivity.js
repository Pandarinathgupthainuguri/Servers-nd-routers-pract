const express = require('express');
const route = express.Router();

const { user, age } = require('../controlers/controlerUser');

// GET all users
route.get('/', user);

// GET users by age → here you must use `:age` param
route.get('/age/:age', age);

module.exports = route;   // ✅ should export the router, not call it
