const fs = require('fs');
const path = require ('path');

const productsFilePath = path.join(__dirname, '../dataproductsDataBase.json');
const productos = JSON.parse(fs.readFileSync(productsFilePath,'utf-8'));

const toThousad = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");