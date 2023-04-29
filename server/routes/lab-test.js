const  {
	getAllTest,
} = require('../controllers/lab-test');


const express = require('express');
const routes = express.Router()

routes.get('/', getAllTest)

module.exports = routes