// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const {home, search} =  require("../controllers/other")
  

/*** / RAIZ ***/ 
router.get('/',home); 
router.get('/search',search); 

module.exports = router;
