const adminRoutes = require('./routes/admin')

const shopRoutes = require('./routes/shop')

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes)
app.use('/shop',shopRoutes)

app.use((req, res, next) => {
    res.status(404).send('<h1>Not found</h1>')
})

// app.use()

// app.use((req, res, next) => {
//     console.log("hi")
//     next()
// })

// app.use('/add-product',(req, res, next) => {
//     res.send('<form action="/product" method="POST"> <input type="text" name="title"><button type="submit">Add Product</button> </form>')
// })

// app.use('/product',(req,res,next) => {
//     console.log(req.body)
//     res.redirect('/');
// })

// app.use('/', (req,res,next) => {
//     console.log("hello")
//     res.send('<h1>Welcome</h1>')
// })
app.listen(4000);