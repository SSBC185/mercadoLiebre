const multer = require ('multer');
const path = require ('path');


const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null,'/public/images/products')
    },
    filename: function (req , res , cb){
        const filenameFormat = file.filename + "-" + Date.now() + "-" + path.extname(file.originalname)
        cb(null, filenameFormat)
    }
});

const uploadProducts = multer ({ storage });


module.exports = {
    uploadProducts
}