/* require */   
const express = require('express');
const router = express.Router();

/* controller require */   
const {list , detail} = require ('../controllers/products');

/*get all products */   
router.get('/', list);


/*get one product */

router.get('/detalle/:id' , detail);






module.exports = router;

