const http = require('http');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

// app.use()

// app.use((req, res, next) => {
//     console.log("hi")
//     next()
// })

app.use('/add-product',(req, res, next) => {
    res.send('<form action="/product" method="POST"> <input type="text" name="title"><button type="submit">Add Product</button> </form>')
})

app.use('/product',(req,res,next) => {
    console.log(req.body)
    res.redirect('/');
})
app.listen(4000);