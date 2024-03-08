/* require*/
const express = require('express');
const router = express.Router();

/* controller require */
const { home, search } = require("../controllers/other");

/* / raiz */
router.get('/', home); 
router.get('/buscar', search); 

module.exports = router;