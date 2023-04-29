const login = require('../controllers/login');

const express = require('express');
const routes = express.Router()

routes.post("/",login)

module.exports = routes