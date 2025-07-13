const express = require('express');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

app.use(morgan('dev'));

//ROUTES
app.get('/',(req,res)=>{
    res.send('Welcome');
})

app.listen(PORT,()=>{
    console.log('Server running on port ', PORT)
})

