const express = require('express');
const morgan = require('morgan');
const path = require('path')

const app = express();
const PORT = 3000;

//MIDDLEWARE
app.use(express.static(path.join(__dirname,'public')))
app.use(morgan('dev'));

//ROUTES
app.get('/',(req,res)=>{
    res.render('index.ejs');
});

app.listen(PORT,()=>{
    console.log('Server running on port ', PORT)
});