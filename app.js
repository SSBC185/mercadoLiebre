const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const methodOverride =  require('method-override');

const app = express()

app.use(express.static(path.join(__dirname,'../public')));

app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParse());
app.use(mehodOverride('_method'));


app.set('view engine','ejs');
app.set('views', path.join(__dirname,'/views' ));




const mainRouter = require ('routes/main');
const productsRouter = require ('./routes/products');


app.use('/', mainRouter);
app.use('/products',productsRouter)


app.use((req , res, next) => next(createError(404)));

app.use((err, req , res , next) => {
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get ('env') === 'dev' ? err : {};

  res.status(err.status || 500);
  res.render('error');

});

module.exports = app;





const port = 3030;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"));
  });

app.get("/registro", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/registro.html"));
  });
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname, "./views/login.html"));
});

  app.listen(port, () => console.log(`http://localhost:${port}`));


 