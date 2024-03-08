/* require */   
const express = require('express');
const router = express.Router();
const { uploadProducts } = require('../middlewares/uploadFiles');
/* controller require */   

const {create , store, edit , update , destroy} = require('../controllers/admin');

/* create one product */   

router.get('/crear-producto', create);
router.post('/crear-producto', uploadProducts.single('img'),store);

/*  edite one product*/

router.get('/editar-producto/:id', edit);
router.put('/editar-producto/:id', uploadProducts.single('img'), update); 

/*  delete one product*/
router.delete('/eliminar-producto/:id',destroy);


module.exports = router;

